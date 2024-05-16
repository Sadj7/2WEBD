import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface ArtIds {
  total: number;
  objectIDs: number[];
}

export function useArtIdListQuery() {
  return useQuery({
    queryKey: ["AllID"],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=*`
      );
      const json = await response.json();
      return json as ArtIds;
    },
    placeholderData: keepPreviousData,
  });
}
