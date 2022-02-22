import { gql } from "../../utils/useGraphQL";

const InfoFragment = gql`
  fragment InfoFragment on Info {
    count
    pages
    next
    prev
  }
`;

export interface InfoType {
  count: number;
  pages: number;
  next?: number;
  prev?: number;
}

export default InfoFragment;
