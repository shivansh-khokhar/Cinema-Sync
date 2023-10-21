const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => {
        return (
          <div key={person.id}>
            <div >
            <img
              src={person.image ? person.image.medium : "/not-found.png"}
              alt="Movie"
            />
            </div>
            <div>
                <p>| Name: {person.name} | Character: {character.name} | {voice && "Voiceover |"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
