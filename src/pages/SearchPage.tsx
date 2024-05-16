import { useState } from "react";
import { ArtCard } from "../components/ArtCard";
import { useArtSearchQuery } from "../queries/useSearchQuery";
import styles from "./ArtListPage.module.css";
import { useParams } from "react-router-dom";
import { useArtDetailQuery } from "../queries/useArtDetailQuery";

export function SearchPage() {
  const [offset, setOffset] = useState(0);
  const { searchQuery = "" } = useParams<{ searchQuery: string }>();
  const artIdListQuery = useArtSearchQuery(searchQuery);

  const incrementOffset = () => {
    setOffset(offset + 10);
  };

  const decrementOffset = () => {
    if (offset === 0) return;
    setOffset(offset - 10);
  };

  if (artIdListQuery.isLoading) {
    return (
      <div>
        <h2>Chargement en cours...</h2>
      </div>
    );
  }

  if (artIdListQuery.isError) {
    return (
      <div>
        <h2>Erreur lors du chargement</h2>
      </div>
    );
  }

  const artsIdList = artIdListQuery.data?.objectIDs.slice(offset, offset + 8);

  const total = artIdListQuery.data?.total ?? 0;

  return (
    <div>
      <h2>{total} résultats trouvés</h2>
      <div className={styles.ArtGrid}>
        {artsIdList?.map((id: number) => (
          <ArtCardWithDetails key={id} id={id} />
        ))}
      </div>
      <div className={styles.Pagination}>
        <button disabled={offset === 0} onClick={decrementOffset}>
          <h2>{"<"}</h2>
        </button>
        <h4>Page {Math.floor(offset / 8 + 1)}</h4>
        <button disabled={offset >= total - 8} onClick={incrementOffset}>
          <h2>{">"}</h2>
        </button>
      </div>
    </div>
  );
}

function ArtCardWithDetails({ id }: { id: number }) {
  const artDetailQuery = useArtDetailQuery(id);

  if (artDetailQuery.isLoading) {
    return (
      <div className={styles.PreCard}>
        <h2>Chargement en cours...</h2>
      </div>
    );
  }

  if (artDetailQuery.isError) {
    return (
      <div>
        <h2>Erreur lors du chargement</h2>
      </div>
    );
  }

  const artDetail = artDetailQuery.data;

  if (!artDetail) {
    return (
      <div>
        <h4>No art found !</h4>
      </div>
    );
  }

  return (
    <ArtCard
      title={artDetail.title}
      artist={artDetail.artistDisplayName}
      imgUrl={artDetail.primaryImageSmall}
      id={artDetail.objectID}
    />
  );
}