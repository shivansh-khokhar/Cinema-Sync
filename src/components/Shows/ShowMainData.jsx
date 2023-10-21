const ShowMainData = ({ name, genres,  image, summary, rating }) => {
  return (
    <div>
      <img src={image ? image.original : "/not-found.png"} alt="Movie" />
      <div>
        <h1> {name} </h1>
        <div>Rating: {rating.average}</div>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        <div>Genres:
            <div>
                {genres.map(genre=> {
                    return <span key={genre} >{genre}</span>
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
