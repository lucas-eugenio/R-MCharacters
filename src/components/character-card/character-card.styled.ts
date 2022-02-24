import styled from "styled-components";
import styleSheet from "../../constants/style-sheet";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${styleSheet.spaces.medium};
  justify-content: center;
`;

export const CharacterImg = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  float: left;
`;

export const NameText = styled.h2`
  color: ${styleSheet.colors.offWhite};
  margin: ${styleSheet.spaces.none} ${styleSheet.spaces.none}
    ${styleSheet.spaces.small};
`;
