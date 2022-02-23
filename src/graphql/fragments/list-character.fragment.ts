import { gql } from "../../utils/useGraphQL";

const ListCharacterFragment = gql`
  fragment ListCharacterFragment on Character {
    id
    name
    status
    image
  }
`;

export type StatusType = "Alive" | "Dead" | "unknown";

export interface ListCharacterType {
  id: string;
  name: string;
  status: StatusType;
  image: string;
}

export default ListCharacterFragment;
