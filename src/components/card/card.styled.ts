import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

const Card = styled.div<{ hasHover?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${styleSheet.colors.darkBlue};
  border: ${styleSheet.spaces.extraSmall} solid ${styleSheet.colors.darkBlue};
  border-radius: ${styleSheet.spaces.small};

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
