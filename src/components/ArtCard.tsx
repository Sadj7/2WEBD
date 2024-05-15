import { useState } from "react";
import styles from "./ArtCard.module.css";
import { Link } from "react-router-dom";

interface ArtCardProps {
  title: string;
  artist: string;
  imgUrl: string;
  id: number;
}

export function ArtCard(props: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = props.imgUrl
    ? props.imgUrl 
    : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";

  const artTitle = props.title ? props.title : "Titre inconnu";

  const artistName = props.artist ? props.artist : "Artiste inconnu";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`${styles.ArtCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={styles.fill} src={imageUrl} alt={artTitle} />
      <h4>Titre : {artTitle}</h4>
      <div className={styles.Container}>
        <h4>Artiste: {artistName}</h4>
        <Link to={`/view/${props.id}`}>
          <button>Détails</button>
        </Link>
      </div>
    </div>
  );
}
