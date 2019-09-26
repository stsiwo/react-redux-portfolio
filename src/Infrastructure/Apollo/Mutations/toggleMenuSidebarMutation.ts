import gql from "graphql-tag";

export const TOGGLE_MENU_SIDEBAR_MUTATION = gql`
  mutation ToggleMenuSidebar {
    toggleMenuSidebar @client
  }
`;

