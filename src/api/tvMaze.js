const baseURL = "https://api.tvmaze.com";
const getApi = async (queryString) => {
  const response = await fetch(`${baseURL}${queryString}`);
  const body = await response.json();
  return body;
};

export const searchForShows = (query) => getApi(`/search/shows?q=${query}`);
