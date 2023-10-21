const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Total Seasons: {seasons.length}</p>
      <p>
        Total Episodes:{" "}
        {seasons.reduce((sum, seasons) => {
          return (sum += seasons.episodeOrder);
        }, 0)}
      </p>
      <div>
        {seasons.map((seasons) => {
          return (
            <div key={seasons.id}>
              <div >
                <p>Season: {seasons.number}</p>
                <p>Episode: {seasons.episodeOrder}</p>
              </div>
              <div>
                <p>Aired: {seasons.premiered} - {seasons.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
