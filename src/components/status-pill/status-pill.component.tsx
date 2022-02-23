import React from "react";
import { StatusType } from "../../graphql/fragments/list-character.fragment";
import { AlivePill, DeadPill, UnknownPill } from "./status-pill.styled";

interface PillProps {
  status: StatusType;
}

const StatusPill = ({ status }: PillProps): React.ReactElement => {
  switch (status) {
    case "Alive":
      return <AlivePill>{status}</AlivePill>;
    case "Dead":
      return <DeadPill>{status}</DeadPill>;
    default:
      return <UnknownPill>{status}</UnknownPill>;
  }
};

export default StatusPill;
