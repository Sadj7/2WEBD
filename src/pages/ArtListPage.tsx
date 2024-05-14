import { ArtCard } from "../components/ArtCard";
import { useArtDetailQuery } from "../queries/useArtDetailQuery";
import { useArtIdListQuery } from "../queries/useArtListQuery";
import styles from "./ArtListPage.module.css";
import { useState } from "react";

export function ArtListPage() {
  const [offset, setOffset] = useState(0);
  const [id, setId] = useState(0);
  const artIdListQuery = useArtIdListQuery();
  const artIdDetailQuery = useArtDetailQuery(id);

  const incrementOffset = () => {
    setOffset(offset + 10);
  };

  const decrementOffset = () => {
    if (offset === 0) return;
    setOffset(offset - 10);
  };

  if (artIdListQuery.isLoading) {
    return <div><h2>Chargement en cours...</h2></div>;
  }

  if (artIdListQuery.isError) {
    return <div><h2>Erreur lors du chargement</h2></div>;
  }

  const artsIdList = artIdListQuery.data;

  const displayedArts = artsIdList && artsIdList.idsList ? artsIdList.idsList.slice(offset, offset + 10) : [];

  return (
    <div>
      <h2>Oeuvres mises en valeur: </h2>
      <div>
      {displayedArts?.map((artId) => {
        setId(artId);
        const art = artIdDetailQuery.data;
        console.log('artIdDetailQuery.data:', art);
        return art?.results.map((detail) => (
        <div>
          <h2>art</h2>
          <ArtCard
          key={artId}
          title={detail.title}
          imageUrl={detail.primaryImage}
          artist={detail.artistDisplayName}
        />
        </div>
        ));
      })}
      </div>
      <div className={styles.Pagination}>
        <button disabled={offset === 0} onClick={decrementOffset}>
          <h2>{"<"}</h2>
        </button>
        <h4>Page {offset / 10 + 1}</h4>
        <button
          disabled={offset >= (artsIdList?.total ?? 0) - 10}
          onClick={incrementOffset}
        >
          <h2>{">"}</h2>
        </button>
      </div>
    </div>
  );
}
