import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface Artwork {
  map(
    arg0: (theart: unknown) => import("react/jsx-runtime").JSX.Element
  ): React.ReactNode;
  objectID: number;
  isHighlight: boolean;
  accessionNumber: string;
  accessionYear: string;
  isPublicDomain: boolean;
  primaryImage: string;
  primaryImageSmall: string;
  additionalImages: string[];
  constituents: {
    constituentID: number;
    role: string;
    name: string;
    constituentULAN_URL: string;
    constituentWikidata_URL: string;
    gender: string;
  }[];
  department: string;
  objectName: string;
  title: string;
  culture: string;
  period: string;
  dynasty: string;
  reign: string;
  portfolio: string;
  artistRole: string;
  artistPrefix: string;
  artistDisplayName: string;
  artistDisplayBio: string;
  artistSuffix: string;
  artistAlphaSort: string;
  artistNationality: string;
  artistBeginDate: string;
  artistEndDate: string;
  artistGender: string;
  artistWikidata_URL: string;
  artistULAN_URL: string;
  objectDate: string;
  objectBeginDate: number;
  objectEndDate: number;
  medium: string;
  dimensions: string;
  dimensionsParsed: {
    element: string;
    dimensionType: string;
    dimension: number;
  }[];
  measurements: {
    elementName: string;
    elementDescription: string;
    elementMeasurements: { [key: string]: number };
  }[];
  creditLine: string;
  geographyType: string;
  city: string;
  state: string;
  county: string;
  country: string;
  region: string;
  subregion: string;
  locale: string;
  locus: string;
  excavation: string;
  river: string;
  classification: string;
  rightsAndReproduction: string;
  linkResource: string;
  metadataDate: string;
  repository: string;
  objectURL: string;
  tags: { term: string; AAT_URL: string; Wikidata_URL: string }[];
  objectWikidata_URL: string;
  isTimelineWork: boolean;
  GalleryNumber: string;
}

export function useArtDetailQuery(objectID: number) {
  return useQuery({
    queryKey: ["art-detail", objectID],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      );
      const json = await response.json();
      return json as Artwork;
    },
    placeholderData: keepPreviousData,
  });
}
