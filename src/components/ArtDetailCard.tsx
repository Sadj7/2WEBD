import React from "react";
import { ArtDetail } from "./details";
import "./ArtDetailCard.module.css";

interface ArtDetailCardProps {
  detail: ArtDetail;
}

const ArtDetailCard: React.FC<ArtDetailCardProps> = ({ detail }) => {
  return (
    <div className="art-detail-card">
      <h2>{detail.title}</h2>
      <p>Artist: {detail.artistDisplayName}</p>
      <p>Department: {detail.department}</p>
      <p>Period: {detail.period}</p>
      <p>Culture: {detail.culture}</p>
      <p>Dimensions: {detail.dimensions}</p>
      <p>Credit Line: {detail.creditLine}</p>
      {/* Ajoutez d'autres détails d'art que vous souhaitez afficher */}
    </div>
  );
};

export default ArtDetailCard;
