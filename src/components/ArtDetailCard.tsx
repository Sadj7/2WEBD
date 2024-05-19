import styles from "./ArtDetailCard.module.css";

interface ArtDetailCardProps {
  title: string;
  imgUrl: string;
  artistName: string;
  artistBio: string;
  artDepartment: string;
  artPeriod: string;
  artCulture: string;
  artDimensions: string;
  artCreditLine: string;
}

export function ArtDetailCard(props: ArtDetailCardProps) {
  const imageUrl = props.imgUrl
    ? props.imgUrl 
    : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";

  const artTitle = props.title ? props.title : "Titre inconnu";
  const artistName = props.artistName ? props.artistName : "Artiste inconnu";
  const artistBio = props.artistBio ? props.artistBio : "";
  const artDepartment = props.artDepartment ? props.artDepartment : "Département inconnu";
  const artPeriod = props.artPeriod ? props.artPeriod : "Période inconnue";
  const artCulture = props.artCulture ? props.artCulture : "Culture inconnue";
  const artDimensions = props.artDimensions ? props.artDimensions : "Dimensions inconnues";
  const artCreditLine = props.artCreditLine ? props.artCreditLine : "Aucun crédit trouvé";

  return (
    <div className={styles.BigContainer}>
      <div className={styles.ImageContainer}>
        <img src={imageUrl} alt={artTitle} />
      </div>
      <div className={styles.InfoContainer}>
        <h1>{artTitle}</h1>
        <p>Artiste: <h4>{artistName}, {artistBio}</h4></p>
        <p>Département: <h4>{artDepartment}</h4></p>
        <p>Période: <h4>{artPeriod}</h4></p>
        <p>Culture: <h4>{artCulture}</h4></p>
        <p>Dimensions: <h4>{artDimensions}</h4></p>
        <p>Ligne de crédit: <h4>{artCreditLine}</h4></p>
        <button className={styles.BackButton} onClick={() => window.history.back()}>Retour</button>
      </div>
    </div>
  );
}