import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvMaze";
import { useQuery } from "@tanstack/react-query";

const Show = () => {
  const { showId } = useParams();

  const {data: showData, error: showError} = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId)
  });

  if (showError) {
    return <div>oops! an error occured: {showError.message} </div>;
  }

  if (showData) {
    return <div>Show Data: {showData.name} </div>;
  }
  return <div>Data is loading...</div>;
};
export default Show;
