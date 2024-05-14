import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface ArtListResponse {
    total: number;
    idsList: number[];
}

export function useArtIdListQuery() {
    return useQuery({
        queryKey: ["arts"],
        queryFn: async () => {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects`
            );
            const json = await response.json();
            return json as ArtListResponse;
        },
        placeholderData: keepPreviousData,
    })
}