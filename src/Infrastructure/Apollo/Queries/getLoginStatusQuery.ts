import gql from "graphql-tag";

export const GET_LOGIN_STATUS_QUERY = gql`
    {
      isLogin @client
    }
  `;
