import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tellus-scope.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "BKbvg1giLqKrKp0wkvXgF5en1kQvg6wKA7Z0efFhPKV2G83vH41SGh47CvtM1q5R",
  },
});

export default client;
