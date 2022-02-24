import React from "react";
import {
  PaginatorContainer,
  Spinner,
  LeftIcon,
  RightIcon,
  PaginatorText,
} from "./paginator.styled";
import LeftArrowIcon from "../../assets/arrow-left-circle.svg";
import RightArrowIcon from "../../assets/arrow-right-circle.svg";
import { InfoType } from "../../graphql/fragments/info.fragment";

interface PaginatorProps {
  currPage: number;
  pageInfo?: InfoType;
  onNextClick?: () => void;
  onPrevClick?: () => void;
  loading?: boolean;
}

export const Paginator = ({
  pageInfo,
  currPage,
  onNextClick,
  onPrevClick,
  loading = false,
}: PaginatorProps): React.ReactElement => {
  const prevDisabled = loading || !pageInfo?.prev || !onPrevClick;
  const nextDisabled = loading || !pageInfo?.next || !onNextClick;

  return (
    <PaginatorContainer>
      <LeftIcon
        src={LeftArrowIcon}
        role="button"
        onClick={() => !prevDisabled && onPrevClick()}
        disabled={prevDisabled}
      />
      {loading ? (
        <Spinner />
      ) : (
        <PaginatorText>{`${currPage} / ${pageInfo?.pages || 1}`}</PaginatorText>
      )}
      <RightIcon
        src={RightArrowIcon}
        role="button"
        onClick={() => !nextDisabled && onNextClick()}
        disabled={nextDisabled}
      />
    </PaginatorContainer>
  );
};
