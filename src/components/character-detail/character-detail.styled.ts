import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";
import Card from "../card/card.styled";

export const CardWithColor = styled(Card)`
  color: ${styleSheet.colors.offWhite};
`;

export const TitleText = styled.h2`
  margin-right: ${styleSheet.spaces.small};
  text-align: center;
`;

export const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailedImg = styled.img`
  border-radius: 10%;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  max-width: 250px;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${styleSheet.spaces.medium};
  align-items: center;
`;

export const StatusText = styled.p`
  margin: ${styleSheet.spaces.none};
  margin-right: ${styleSheet.spaces.extraSmall};
`;

export const TextContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: ${styleSheet.spaces.extraSmall};
  border-radius: ${styleSheet.spaces.extraSmall};
  background-color: ${styleSheet.colors.offWhite};
  margin: ${styleSheet.spaces.large} ${styleSheet.spaces.none};
`;

export const DataText = styled.p`
  margin: ${styleSheet.spaces.none};
  margin-bottom: ${styleSheet.spaces.medium};
  :last-child {
    margin-bottom: ${styleSheet.spaces.none};
  }
`;

export const UnorderedList = styled.ul`
  margin: ${styleSheet.spaces.none};
  padding: ${styleSheet.spaces.medium};
  display: grid;
  gap: ${styleSheet.spaces.large};
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListItem = styled.li`
  margin: ${styleSheet.spaces.none};
  margin-bottom: ${styleSheet.spaces.medium};
  :last-child {
    margin-bottom: ${styleSheet.spaces.none};
  }
  ::marker {
    color: ${styleSheet.colors.red};
  }
`;
