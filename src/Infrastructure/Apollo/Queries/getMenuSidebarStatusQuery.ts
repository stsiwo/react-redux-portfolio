import gql from "graphql-tag";

export const GET_MENUSIDEBAR_STATUS_QUERY = gql`
    {
      isMenuSidebarOpen @client
    }
  `;
