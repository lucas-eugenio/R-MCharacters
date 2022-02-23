import { gql } from "../../utils/useGraphQL";

const InfoFragment = gql`
  fragment InfoFragment on Info {
    pages
    next
    prev
  }
`;

export interface InfoType {
  pages: number;
  next?: number;
  prev?: number;
}

export default InfoFragment;
