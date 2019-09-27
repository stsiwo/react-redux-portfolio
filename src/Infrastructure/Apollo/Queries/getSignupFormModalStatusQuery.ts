import gql from "graphql-tag";

export const GET_SIGNUP_FORM_MODAL_STATUS_QUERY = gql`
    {
      isSignupFormModalOpen @client
    }
  `;
