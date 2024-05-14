import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ArtDetail } from "../components/details";

interface ArtListResponse {
    total: number;
    results: ArtDetail[];
}

export function useArtListQuery(limit: number, offset: number) {
    return useQuery({
        queryKey: ["arts", { limit, offset }],
        queryFn: async () => {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects?limit=${limit}&offset=${offset}`
            );
            const json = await response.json();
            return json as ArtListResponse;
        },
        placeholderData: keepPreviousData,
    })
}