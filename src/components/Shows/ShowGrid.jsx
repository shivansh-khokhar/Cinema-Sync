import ShowCard from "./ShowCard";
import useStarredShows from "../../lib/useStarredShows";
import { FlexGrid } from "../common/FlexGrid";

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarredShows] = useStarredShows();

  const onStarMeClick = (showId) => {
    if (starredShows.includes(showId)) {
      dispatchStarredShows({ type: "UNSTAR", showId });
    } else {
      dispatchStarredShows({ type: "STAR", showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : "/not-found.png"}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
      
    </FlexGrid>
  );
};
export default ShowGrid;
