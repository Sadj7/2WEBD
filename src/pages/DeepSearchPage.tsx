import { useState } from "react";
import styles from "./DeepSearchPage.module.css";
import { useArtDeepSearchQuery } from "../queries/useDeepSearchQuery";
import { ArtCard } from "../components/ArtCard";
import { useArtDetailQuery } from "../queries/useArtDetailQuery";

export function DeepSearchPage() {
  const [offset, setOffset] = useState(0);
  const [artName, setArtName] = useState("*");
  const [authorName, setAuthorName] = useState("*");
  const [department, setDepartment] = useState("*");
  const [isHighlight, setIsHighlight] = useState("*");
  const artIdListQuery = useArtDeepSearchQuery(artName, authorName, department, isHighlight);

  const incrementOffset = () => {
    setOffset(offset + 10);
  };

  const decrementOffset = () => {
    if (offset === 0) return;
    setOffset(offset - 10);
  };
  
  const handleChangeArtName = (name: string) => {
    setArtName(name);
  };

  const handleChangeAuthorName = (autName: string) => {
    setAuthorName(autName);
  };

  const handleChangeDepartment = (department: string) => {
    setDepartment(department);
  };

  const handleChangeIsHighlight = (isHL: string) => {
    setIsHighlight(isHL);
  }



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
        <button className={styles.BackButton} onClick={() => window.history.back()}>Retour</button>
      </div>
    );
  }

  const artsIdList = artIdListQuery.data?.objectIDs.slice(offset, offset + 4);

  const total = artIdListQuery.data?.total ?? 0;

  if (!artsIdList || artsIdList.length === 0) {
    return (
      <div>
        <h2>Aucun résultat trouvé avec ces paramètres</h2>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.DeepSearchContainer}>
          <p>
            Nom de l'oeuvre :
            <input
              type="text"
              placeholder="Nom d'une oeuvre..."
              onChange={(e) => handleChangeArtName(e.target.value)}
            />
          </p>
          <p>
            Nom de l'auteur :
            <input
              type="text"
              placeholder="Nom d'un(e) auteur(trice)..."
              onChange={(e) => handleChangeAuthorName(e.target.value)}
            />
          </p>
          <p>
            Département:
            <select value={department} onChange={(e) => handleChangeDepartment(e.target.value)}>
              <option value="*">Choisissez un département</option>
              <option value="1">American Decorative Arts</option>
              <option value="3">Ancient Near Eastern Art</option>
              <option value="4">Arms and Armor</option>
              <option value="5">Arts of Africa, Oceania, and the Americas</option>
              <option value="6">Asian Art</option>
              <option value="7">The Cloisters</option>
              <option value="8">The Costume Institute</option>
              <option value="9">Drawings and Prints</option>
              <option value="10">Egyptian Art</option>
              <option value="11">European Paintings</option>
              <option value="12">European Sculpture and Decorative Arts</option>
              <option value="13">Greek and Roman Art</option>
              <option value="14">Islamic Art</option>
              <option value="15">The Robert Lehman Collection</option>
              <option value="16">The Libraries</option>
              <option value="17">Medieval Art</option>
              <option value="18">Musical Instruments</option>
              <option value="19">Photographs</option>
              <option value="21">Modern Art</option>
            </select>
          </p>
          <p>
            Mise en valeur:
            <select value={isHighlight} onChange={(e) => handleChangeIsHighlight(e.target.value)}>
              <option value="*">Choisissez une option</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </p>
      </div>
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
        <h4>Page {Math.floor(offset / 4 + 1)}</h4>
        <button disabled={offset >= total - 4} onClick={incrementOffset}>
          <h2>{">"}</h2>
        </button>
      </div>
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