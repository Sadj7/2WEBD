import { useParams } from "react-router-dom";
import { useArtDetailQuery } from "../queries/useArtDetailQuery";
import ArtDetailCard from "../components/ArtDetailCard";

const ArtDetailPage = () => {
  const { objectID } = useParams();
  const { data, isLoading, isError, error } = useArtDetailQuery(
    parseInt(objectID || "0")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //   if (isError) {
  //     return <div>Error: {error.message}</div>;
  //   }

  return (
    <div>
      <h1>Art Detail</h1>
      <ArtDetailCard detail={data} />
    </div>
  );
};

export default ArtDetailPage;
