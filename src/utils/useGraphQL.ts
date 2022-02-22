import {
  useQuery as ApolloUseQuery,
  gql as ApolloGQL,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

export const gql = ApolloGQL;

export const useQuery = ApolloUseQuery;

export const GraphQLClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const GraphQLProvider = ApolloProvider;
