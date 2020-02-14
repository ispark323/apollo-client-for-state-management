import React from "react";
import ReactDOM from "react-dom";

import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./App";
import userSettings from "./userSettings";

const typeDefs = gql`
  type AppBarColorSetting {
    id: Int!
    name: String!
    setting: String!
  }

  type Query {
    appBarColorSetting: AppBarColorSetting!
  }

  type Mutation {
    updateAppBarColorSetting(setting: String!): AppBarColorSetting!
  }
`;

const resolvers = {
  Query: {
    appBarColorSetting: () => userSettings.appBarColorSetting
  },
  Mutation: {
    updateAppBarColorSetting: (_, { setting }) => {
      userSettings.appBarColorSetting.setting = setting;
      return userSettings.appBarColorSetting;
    }
  }
};

const client = new ApolloClient({
  cache: new InMemoryCache({
    freezeResults: true
  }),
  typeDefs,
  resolvers,
  assumeImmutableResults: true
});

const TogglesApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<TogglesApp />, document.getElementById("root"));
