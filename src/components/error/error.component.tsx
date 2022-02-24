import React from "react";
import translations from "../../constants/translations";
import ErrorIcon from "../../assets/error.svg";
import {
  ErrorText,
  ErrorImg,
  ErrorMessage,
  ErrorContainer,
  ErrorTitleContainer,
} from "./error.styled";

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps): React.ReactElement => {
  return (
    <ErrorContainer>
      <ErrorTitleContainer>
        <ErrorImg src={ErrorIcon} alt="" />
        <ErrorText>
          <b>{translations.error.title}</b>
        </ErrorText>
      </ErrorTitleContainer>
      {!!message && <ErrorMessage>{message}</ErrorMessage>}
    </ErrorContainer>
  );
};

export default Error;
