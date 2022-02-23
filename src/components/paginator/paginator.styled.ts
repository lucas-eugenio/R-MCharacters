import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

const MIN_WIDTH = "120px";
export const PaginatorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-width: ${MIN_WIDTH};
`;

const IconButton = styled.img<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ disabled }) => disabled && "opacity: 0.2;"}
`;

export const LeftIcon = styled(IconButton)`
  margin-right: ${styleSheet.spaces.small};
`;

export const RightIcon = styled(IconButton)`
  margin-left: ${styleSheet.spaces.small};
`;

export const PaginatorText = styled.p`
  margin-right: ${styleSheet.spaces.none} ${styleSheet.spaces.extraSmall};
`;

const SPINNER_SIZE = "24px";
export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: ${styleSheet.spaces.extraSmall} solid ${styleSheet.colors.lightGray};
  border-top: ${styleSheet.spaces.extraSmall} solid
    ${styleSheet.colors.darkBlue};
  border-radius: 50%;
  width: ${SPINNER_SIZE};
  height: ${SPINNER_SIZE};
  animation: spin 2s linear infinite;
`;
