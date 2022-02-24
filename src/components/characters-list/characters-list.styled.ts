import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListTitle = styled.h2`
  margin: ${styleSheet.spaces.large} ${styleSheet.spaces.none};
`;

export const ListContainer = styled.div`
  display: grid;
  gap: ${styleSheet.spaces.large};
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LinkWithoutDecoration = styled.a`
  text-decoration: none;
`;
