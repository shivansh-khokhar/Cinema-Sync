import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvMaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/Shows/ShowMainData";
import Details from "../components/Shows/Details";
import Seasons from "../components/Shows/Seasons";
import Cast from "../components/Shows/Cast";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextCenter } from '../components/common/TextCenter';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false
  });

  if (showError) {
    return <TextCenter>oops! an error occured: {showError.message} </TextCenter>;
  }

  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper >
        <Link to="/">Go to Home</Link>
        </BackHomeWrapper>
        <ShowMainData
          name={showData.name}
          genres={showData.genres}
          image={showData.image}
          summary={showData.summary}
          rating={showData.rating}
        />
        <InfoBlock>
          <h1>Details</h1>
          <Details
            language={showData.language}
            premiered={showData.premiered}
            status={showData.status}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h1>Seasons</h1>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h1>Cast</h1>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <TextCenter>Data is loading...</TextCenter>;
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;