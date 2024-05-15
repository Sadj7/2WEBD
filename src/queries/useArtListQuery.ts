import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface ArtIds {
    total: number;
    objectIDs: number[];
}

export function useArtIdListQuery(limit: number, offset: number) {
  return useQuery({
    queryKey: ["AllID", { limit, offset }],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects`
      );
      const json = await response.json();
      return json as ArtIds;
    },
    placeholderData: keepPreviousData,
  });
}