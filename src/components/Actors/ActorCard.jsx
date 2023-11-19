import { SearchCard, SearchImgWrapper } from "../common/SearchCard";

const ActorCard = ({ name, image, gender, birthday, deathday, country }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name} {!!gender && `(${gender})`}</h1>
      <p>{country ? `From ${country}` : "Country Unknown"} </p>
      {!!birthday && <p>Born {birthday}</p> }
      {!!deathday && <p>Died {deathday}</p> }
    </SearchCard>
  );
};
export default ActorCard;
