import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

const Card = styled.div<{ hasHover?: boolean }>`
  padding: ${styleSheet.spaces.medium};
  background-color: ${styleSheet.colors.darkBlue};
  border: ${styleSheet.spaces.extraSmall} solid ${styleSheet.colors.darkBlue};
  border-radius: ${styleSheet.spaces.small};
  height: max-content;

  ${(props) =>
    props.hasHover &&
    `
    :hover {
      border-color: ${styleSheet.colors.green};
      background-color: ${styleSheet.colors.lightBlue};
    }
  `};
`;

export default Card;
