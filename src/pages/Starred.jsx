import { getShowByIds } from "../api/tvMaze";
import ShowGrid from "../components/Shows/ShowGrid";
import useStarredShows from "../lib/useStarredShows";
import { useQuery } from "@tanstack/react-query";

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows && starredShows.length === 0) return <h1>No Shows Starred!</h1>;

  if (starredShows && starredShows.length > 0) return <ShowGrid shows={starredShows} />;

  if(starredShowsError) return <p>Error Occured {starredShowsError.message}</p>
};
export default Starred;
