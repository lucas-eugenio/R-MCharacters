import styled, { css } from "styled-components";
import styleSheet from "../../constants/style-sheet";

export const Card = styled.div`
  padding: ${styleSheet.spaces.medium};
  background-color: ${styleSheet.colors.darkBlue};
  border: ${styleSheet.borders.base};
  border-radius: ${styleSheet.borders.radius};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${styleSheet.spaces.medium};
  justify-content: center;
`;

const SHIMMER_WIDTH = "300px";
const shimmerStyle = css`
  @keyframes shimmer {
    0% {
      background-position: -${SHIMMER_WIDTH} 0;
    }
    100% {
      background-position: ${SHIMMER_WIDTH} 0;
    }
  }

  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: ${SHIMMER_WIDTH} 100%;
`;

export const IMG_SIZE = "80px";
const IMG_RADIUS = "40px";
export const CharacterImg = styled.img`
  width: ${IMG_SIZE};
  height: ${IMG_SIZE};
  border-radius: ${IMG_RADIUS};
  float: left;
`;

export const ImgShimmer = styled.div`
  ${shimmerStyle}
  width: ${IMG_SIZE};
  height: ${IMG_SIZE};
  border-radius: ${IMG_RADIUS};
`;

export const NameText = styled.h2`
  color: ${styleSheet.colors.offWhite};
  margin: ${styleSheet.spaces.none} ${styleSheet.spaces.none}
    ${styleSheet.spaces.small};
`;

const TEXT_WIDTH = "120px";
export const TextShimmer = styled.div`
  ${shimmerStyle}
  width: ${TEXT_WIDTH};
  height: ${styleSheet.spaces.medium};
  margin: ${styleSheet.spaces.extraSmall} ${styleSheet.spaces.none};
`;

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
