import { useState } from "react";
import { searchForShows, searchForActors } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";

function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      if (searchOption === "shows") {
        const result = await searchForShows(q);
        setApiData(result);
      } else {
        const result = await searchForActors(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map((data) => {
        return data.show ? (
          <div key={data.show.id}>{data.show.name}</div>
        ) : (
          <div key={data.person.id}>{data.person.name}</div>
        );
      });
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website's home page.</p>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
