import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";
import NotFoundImgSrc from "../../lib/not-found.png"

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          id = {data.person.id}
          name = {data.person.name}
          image = { 
            data.person.image ? data.person.image.medium : NotFoundImgSrc
          }
          country = {data.person.country ? data.person.country.name : null}
          gender = {data.person.gender}
          birthday = {data.person.birthday}
          deathday = {data.person.deathday}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorGrid;
