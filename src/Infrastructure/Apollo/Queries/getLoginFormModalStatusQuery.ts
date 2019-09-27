import gql from "graphql-tag";

export const GET_LOGIN_FORM_MODAL_STATUS_QUERY = gql`
    {
      isLoginFormModalOpen @client
    }
  `;
