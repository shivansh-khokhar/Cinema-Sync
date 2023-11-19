import { useState } from "react";
import { searchForShows, searchForActors } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/Shows/ShowGrid";
import ActorGrid from "../components/Actors/ActorGrid";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const [filter, setFilter] = useState();

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["data", filter],
    queryFn: () => filter.searchOption === 'shows'? searchForShows(filter.q) : searchForActors(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({q, searchOption});
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Result Found</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      {/* <h1>Home Page</h1>
      <p>Welcome to our website's home page.</p> */}
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
