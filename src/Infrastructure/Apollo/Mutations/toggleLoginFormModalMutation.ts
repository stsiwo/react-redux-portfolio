import gql from "graphql-tag";

export const TOGGLE_LOGIN_FORM_MODAL_MUTATION = gql`
  mutation ToggleLoginFormModal {
    toggleLoginFormModal @client
  }
`;

