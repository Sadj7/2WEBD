import { useQuery } from "@tanstack/react-query";

export function useArtDetailQuery(objectID: number) {
  return useQuery({
    queryKey: ["art-detail", objectID],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    },
  });
}
