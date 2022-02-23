import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

const PILL_PADDING = "2px 6px";
export const BasePill = styled.p`
  width: fit-content;
  padding: ${PILL_PADDING};
  margin: ${styleSheet.spaces.none};
  border: ${styleSheet.borders.base};
  height: ${styleSheet.spaces.medium};
  border-radius: ${styleSheet.spaces.medium};
`;

export const AlivePill = styled(BasePill)`
  color: ${styleSheet.colors.green};
  background-color: ${styleSheet.colors.lightGreen};
`;

export const DeadPill = styled(BasePill)`
  color: ${styleSheet.colors.red};
  background-color: ${styleSheet.colors.lightRed};
`;

export const UnknownPill = styled(BasePill)`
  color: ${styleSheet.colors.darkGray};
  background-color: ${styleSheet.colors.offWhite};
`;
