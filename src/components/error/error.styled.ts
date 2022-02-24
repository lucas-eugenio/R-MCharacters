import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

export const ErrorContainer = styled.div`
  width: 100%;
  background-color: ${styleSheet.colors.lightRed};
  padding: ${styleSheet.spaces.large};
  border: 2px solid ${styleSheet.colors.red};
  border-radius: ${styleSheet.spaces.small};
  max-width: 400px;
`;

export const ErrorTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ErrorImg = styled.img`
  margin-right: ${styleSheet.spaces.small};
`;

export const ErrorText = styled.p`
  width: 100%;
  margin: auto;
  color: ${styleSheet.colors.red};
`;

export const ErrorMessage = styled(ErrorText)`
  margin-top: ${styleSheet.spaces.medium};
`;
