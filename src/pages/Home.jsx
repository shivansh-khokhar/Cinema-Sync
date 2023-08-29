import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { searchForShows, searchForActors } from "../api/tvMaze";

function Home() {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const onInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      if (searchOption === "shows") {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForActors(searchStr);
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
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="searchOption"
            value="shows"
            onChange={onRadioChange}
            checked={searchOption === "shows"}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="searchOption"
            value="actors"
            onChange={onRadioChange}
            checked={searchOption === "actors"}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
