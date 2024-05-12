import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ArtDetail } from "../components/details";

interface ArtListResponse {
    total: number;
    results: ArtDetail[];
}

export function useArtListQuery(request: string) {
    return useQuery({
        queryKey: ["arts"],
        queryFn: async () => {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=${request}`
            );
            const json = await response.json();
            return json as ArtListResponse;
        },
        placeholderData: keepPreviousData,
    })
}