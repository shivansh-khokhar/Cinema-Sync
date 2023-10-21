
const ShowCard = ({ id, name, image, summary, onStarMeClick, isStarred }) => {

  // cutting the summary to 10 characters and removing "<p>" from the api data
  let summaryStripped = summary ?
   summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '') + "..." : "No Description";

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read more</a>
        <button type="button" onClick={()=>onStarMeClick(id)}>{isStarred? "Unstar Me" : "Star Me"}</button>
      </div>
      
    </div>
  );
};

export default ShowCard;
