import { useQuery } from "@apollo/react-hooks";
import { GET_SIGNUP_FORM_MODAL_STATUS_QUERY } from "../../../../Infrastructure/Apollo/Queries/getSignupFormModalStatusQuery";

export const useSignupFormModalQuery: () => boolean  = () => {

  const { data: { isSignupFormModalOpen } } = useQuery(GET_SIGNUP_FORM_MODAL_STATUS_QUERY);

  return isSignupFormModalOpen;
}
