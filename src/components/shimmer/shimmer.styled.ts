import styled, { css } from "styled-components";
import styleSheet from "../../constants/style-sheet";

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

export const ImgShimmer = styled.div<{ size: string }>`
  ${shimmerStyle}
  width: ${(props) => props.size};
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const TextShimmer = styled.div`
  ${shimmerStyle}
  width: 100%;
  height: ${styleSheet.spaces.medium};
  margin: ${styleSheet.spaces.none};
  margin-bottom: ${styleSheet.spaces.medium};
  :last-child {
    margin-bottom: ${styleSheet.spaces.none};
  }
`;

export const SquaredImgShimmer = styled.div`
  ${shimmerStyle}
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  max-width: 250px;
  border-radius: 10%;
`;
