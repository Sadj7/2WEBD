import { useState } from "react";
import styles from "./ArtCard.module.css";
import { Link } from "react-router-dom";

interface ArtCardProps {
  name: string;
  title: string;
  imageUrl: string;
  artist: string;
}

export function ArtCard(props: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      <img src={props.imageUrl} alt={props.title} />
      <h2>Titre : {props.title}</h2>
      <h4>Artiste: {props.artist}</h4>
      <Link to={`/view/${props.name}`}>
        <button>Voir Détails</button>
      </Link>
    </div>
  );
}
