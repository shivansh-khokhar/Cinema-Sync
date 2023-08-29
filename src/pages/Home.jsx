import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { searchForShows } from "../api/tvMaze";

function Home() {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      const result = await searchForShows(searchStr);
      setApiData(result);
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
        return <div key={data.show.id}>{data.show.name}</div>;
      });
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website's home page.</p>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
