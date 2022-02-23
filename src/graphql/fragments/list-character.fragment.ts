import { gql } from "../../utils/useGraphQL";

const ListCharacterFragment = gql`
  fragment ListCharacterFragment on Character {
    id
    name
    status
    image
  }
`;

export interface ListCharacterType {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  image: string;
}

export default ListCharacterFragment;
