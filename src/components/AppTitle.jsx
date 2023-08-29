export default function AppTitle(props) {
  const {
    title = "CinemaSync",
    subTitle = "Search your movie or rate your movie",
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}
