import styled from "styled-components";

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>Total Seasons: {seasons.length}</p>
      <p>
        Total Episodes:{" "}
        {seasons.reduce((sum, seasons) => {
          return (sum += seasons.episodeOrder);
        }, 0)}
      </p>
      <SeasonList>
        {seasons.map((seasons) => {
          return (
            <div key={seasons.id} className="season-item">
              <div className="left">
                <p>Season: {seasons.number}</p>
                <p>Episode: {seasons.episodeOrder}</p>
              </div>
              <div className="right">
                Aired: {' '}
                  <strong>
                   {seasons.premiered} - {seasons.endDate}
                  </strong>
              </div>
            </div>
          );
        })}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
    color: #EDEBEB;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;