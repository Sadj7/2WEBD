import { keepPreviousData, useQuery } from "@tanstack/react-query";
interface ArtIds {
  total: number;
  objectIDs: number[];
}

export function useArtSearchQuery(query: string) {
  return useQuery({
    queryKey: ["art-detail", query],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
      );
      const json = await response.json();
      return json as ArtIds;
    },
    placeholderData: keepPreviousData,
  });
}
