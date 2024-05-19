import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface ArtIds {
  total: number;
  objectIDs: number[];
}

export function useArtDeepSearchQuery(title: string, query: string, departmentId: string, isHighlight: string) {
  return useQuery({
    queryKey: ["art-detail", query, departmentId, isHighlight, title],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?title=${title}&departmentId=${departmentId}&isHighlight=${isHighlight}&q=${query}`
      );
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const json = await response.json();
      return json as ArtIds;
    },
    placeholderData: keepPreviousData,
  });
}
