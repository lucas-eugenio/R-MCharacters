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
  loading?: boolean;
  onRouteChange?: (page: number) => void;
}

export const Paginator = ({
  pageInfo,
  currPage,
  loading = false,
  onRouteChange,
}: PaginatorProps): React.ReactElement => {
  const prevDisabled = loading || !pageInfo?.prev || !onRouteChange;
  const nextDisabled = loading || !pageInfo?.next || !onRouteChange;

  return (
    <PaginatorContainer>
      <LeftIcon
        src={LeftArrowIcon}
        role="button"
        onClick={() => !prevDisabled && onRouteChange(currPage - 1)}
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
        onClick={() => !nextDisabled && onRouteChange(currPage + 1)}
        disabled={nextDisabled}
      />
    </PaginatorContainer>
  );
};
