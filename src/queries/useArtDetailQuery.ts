import { useQuery } from "@tanstack/react-query";
import { ArtDetail } from "../components/details";

interface ArtDetailResponse {
  results: ArtDetail[];
}

export function useArtDetailQuery(objectID: number) {
  return useQuery({
    queryKey: ["art-detail", objectID],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      );
      const json = await response.json();
      return json as ArtDetailResponse;
    },
  });
}
