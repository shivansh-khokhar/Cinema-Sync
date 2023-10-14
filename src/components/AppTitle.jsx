export default function AppTitle(props) {
  const {
    title = "CinemaSync",
    subTitle = "Are you looking a for a movie or an actor ?",
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}
