import { ArtCard } from "../components/ArtCard";
import { useArtListQuery } from "../queries/useArtListQuery";
// import styles from "./ArtListPage.module.css";
import { useState } from "react";

export function ArtListPage() {
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const artListQuery = useArtListQuery(limit, offset);

  const incrementOffset = () => {
    setOffset(offset + 10);
  };

  const decrementOffset = () => {
    if (offset === 0) return;
    setOffset(offset - 10);
  };

  if (artListQuery.isLoading) {
    return <div><h2>Chargement en cours...</h2></div>;
  }

  if (artListQuery.isError) {
    return <div><h2>Erreur lors du chargement</h2></div>;
  }

  const arts = artListQuery.data;

  const displayedArts = arts?.results?.slice(offset, offset + 10);

  return (
    <div>
      <div>
        {displayedArts?.map((art) => {
          return (
            <ArtCard
              key={art.objectID}
              title={art.title}
              imageUrl={art.primaryImage}
              artist={art.artistDisplayName}
            ></ArtCard>
          );
        })}
      </div>
      <div>
        <button disabled={offset === 0} onClick={decrementOffset}>
          <h2>{"<"}</h2>
        </button>
        <h4>Page {offset / 10 + 1}</h4>
        <button
          disabled={offset >= (arts?.total ?? 0) - 10}
          onClick={incrementOffset}
        >
          <h2>{">"}</h2>
        </button>
      </div>
    </div>
  );
}
