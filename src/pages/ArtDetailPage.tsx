import { ArtDetailCard } from "../components/ArtDetailCard";
import { useArtDetailQuery } from "../queries/useArtDetailQuery";
import { useParams } from "react-router-dom";

export function ArtDetailPage() {
  const { artId } = useParams<{artId: string}>();
  const artDetailQuery = useArtDetailQuery(artId ? parseInt(artId) : 0);

  if (!artId) {
    return <h1>Error 404</h1>;
  }

  if (artDetailQuery.isLoading) {
    return <div><h2>Chargement en cours...</h2></div>;
  }

  if (artDetailQuery.isError) {
    return <div><h2>Erreur lors du chargement</h2></div>;
  }

  const artDetail = artDetailQuery.data;

  if(!artDetail) {
    return <h1>Aucune Oeuvre d'art trouvée !</h1>
  }

  return (
    <ArtDetailCard
      title={artDetail.title}
      imgUrl={artDetail.primaryImage}
      artistName={artDetail.artistDisplayName}
      artistBio={artDetail.artistDisplayBio}
      artDepartment={artDetail.department}
      artPeriod={artDetail.period}
      artCulture={artDetail.culture}
      artDimensions={artDetail.dimensions}
      artCreditLine={artDetail.creditLine}
    />
  );
}