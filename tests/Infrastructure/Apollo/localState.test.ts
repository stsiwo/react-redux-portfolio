import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import fetch from 'cross-fetch';
import { DefaultStateType } from '../../../src/Infrastructure/Apollo/defaultState';
import { GET_MENUSIDEBAR_STATUS_QUERY } from '../../../src/Infrastructure/Apollo/Queries/getMenuSidebarStatusQuery';


test("ls.1.1: ", async () => {

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:8080/',
    fetch: fetch,
  })

  const client = new ApolloClient({
    cache,
    link,
    resolvers: {},

  });

  cache.writeData({
    data: {
      isMenuSidebarOpen: false,
      isSignupFormModalOpen: false,
    },
  });

  const GET_MENUSIDEBAR_STATUS = gql`
    {
      isMenuSidebarOpen @client
    }
  `;

  const result = await client.cache.readQuery({
    query: GET_MENUSIDEBAR_STATUS,
  });

  expect(result).toStrictEqual({ isMenuSidebarOpen: false });

});

test("ls.1.2: ", async () => {

  // local state sld (this is optional)
  // don't need to define local state type at all
  const typeDefs = gql`
  extend type Query {
    isMenuSidebarOpen: Boolean!
    isSignupFormModalOpen: Boolean!
  }

  extend type Mutation {
    toggleMenuSidebar: Boolean
  }
`;

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:8080/',
    fetch: fetch,
  })

  const client = new ApolloClient({
    cache,
    link,
    resolvers: {
      Mutation: {
        toggleMenuSidebar: (_root, variables, { cache, getCacheKey }) => {
          const { isMenuSidebarOpen } = cache.readQuery({ query: GET_MENUSIDEBAR_STATUS_QUERY });
          const data = {
            isMenuSidebarOpen: !isMenuSidebarOpen
          }
          cache.writeQuery({ query: GET_MENUSIDEBAR_STATUS_QUERY, data });
          return data;
        },
      },
    },
  });

  cache.writeData({
    data: {
      isMenuSidebarOpen: false,
      isSignupFormModalOpen: false,
    },
  });

  const TOGGLE_TODO = gql`
  mutation ToggleMenuSidebar {
    toggleMenuSidebar @client
  }
`;

  const result = await client.mutate({
    mutation: TOGGLE_TODO,
  });

  expect(result.data.toggleMenuSidebar).toStrictEqual({ isMenuSidebarOpen: true });

});
