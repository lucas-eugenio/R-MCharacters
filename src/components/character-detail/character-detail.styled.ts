import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";
import Card from "../card/card.styled";

export const CardWithMaxHeight = styled(Card)`
  max-width: 800px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${styleSheet.colors.offWhite};
`;

export const DataContainer = styled.div`
  width: 50%;
  text-align: center;
`;

export const EpisodesContainer = styled.div`
  width: 50%;
`;

export const TitleText = styled.h2`
  margin-right: ${styleSheet.spaces.small};
`;

export const DetailedImg = styled.img`
  border-radius: 10%;
  width: 100%;
  max-width: 200px;
`;

export const BoldDataText = styled.h3`
  margin: ${styleSheet.spaces.medium} ${styleSheet.spaces.none};
`;

export const UnorderedList = styled.ul`
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  max-height: 300px;
  margin: ${styleSheet.spaces.none};
  padding: ${styleSheet.spaces.none};

  @media screen and (min-width: 767px) {
    max-height: 360px;
  }
`;

export const ListItem = styled.li`
  margin: ${styleSheet.spaces.none} ${styleSheet.spaces.none}
    ${styleSheet.spaces.small};
`;
