import gql from "graphql-tag";

export const TOGGLE_SIGNUP_FORM_MODAL_MUTATION = gql`
  mutation ToggleSignupFormModal {
    toggleSignupFormModal @client
  }
`;

