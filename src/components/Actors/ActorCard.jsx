const ActorCard = ({ name, image, gender, birthday, deathday, country }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name} {!!gender && `(${gender})`}</h1>
      <p>{country ? `From ${country}` : "Country Unknown"} </p>
      {!!birthday && <p>Born {birthday}</p> }
      {!!deathday && <p>Died {deathday}</p> }
    </div>
  );
};
export default ActorCard;
