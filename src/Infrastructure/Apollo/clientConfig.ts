import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { defaultState } from "./defaultState";
import { toggleMenuSidebarResolver } from "./LocalResolvers/toggleMenuSidebarResolver";
import { toggleSignupFormModalResolver } from "./LocalResolvers/toggleSignupFormModalResolver";
import { toggleLoginFormModalResolver } from "./LocalResolvers/toggleLoginFormModalResolver";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:8080/',
  fetch: fetch,
})

export const client = new ApolloClient({
  cache,
  link,
  resolvers: {
    Mutation: {
      ...toggleMenuSidebarResolver,
      ...toggleSignupFormModalResolver,
      ...toggleLoginFormModalResolver,
    }
  },
});

cache.writeData({
  data: defaultState,
});

