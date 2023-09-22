import { Link } from "react-router-dom";

const ShowCard = ({ name, image, summary }) => {

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
        <Link to="/">Read more</Link>
        <button type="button">Star me</button>
      </div>
      
    </div>
  );
};

export default ShowCard;
