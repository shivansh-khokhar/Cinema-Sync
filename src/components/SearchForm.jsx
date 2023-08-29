import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const onInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};

export default SearchForm;
