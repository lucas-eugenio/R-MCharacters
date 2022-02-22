import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

const HEIGHT = "80px";

export const BaseHeader = styled.header`
  background-color: ${styleSheet.colors.darkBlue};
  height: ${HEIGHT};
  padding: ${styleSheet.spaces.small} ${styleSheet.spaces.none};
  text-align: center;
`;

export const HeaderImg = styled.img`
  height: ${HEIGHT};
`;

export const Body = styled.body`
  padding: ${styleSheet.spaces.large};
`;
