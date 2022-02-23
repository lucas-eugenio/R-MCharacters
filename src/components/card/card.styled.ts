import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

const Card = styled.div`
  padding: ${styleSheet.spaces.medium};
  background-color: ${styleSheet.colors.darkBlue};
  border: ${styleSheet.borders.base};
  border-radius: ${styleSheet.borders.radius};
`;

export default Card;
