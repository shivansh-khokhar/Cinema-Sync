import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvMaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/Shows/ShowMainData";
import Details from "../components/Shows/Details";
import Seasons from "../components/Shows/Seasons";
import Cast from "../components/Shows/Cast";
import { Link } from "react-router-dom";


const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false
  });

  if (showError) {
    return <div>oops! an error occured: {showError.message} </div>;
  }

  if (showData) {
    return (
      <div>
        <Link to="/">Go to Home</Link>
        <ShowMainData
          name={showData.name}
          genres={showData.genres}
          image={showData.image}
          summary={showData.summary}
          rating={showData.rating}
        />
        <div>
          <h1>Details</h1>
          <Details
            language={showData.language}
            premiered={showData.premiered}
            status={showData.status}
            network={showData.network}
          />
        </div>
        <div>
          <h1>Seasons</h1>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h1>Cast</h1>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>Data is loading...</div>;
};
export default Show;
