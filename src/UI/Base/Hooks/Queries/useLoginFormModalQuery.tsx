import { useQuery } from "@apollo/react-hooks";
import { GET_LOGIN_FORM_MODAL_STATUS_QUERY } from "../../../../Infrastructure/Apollo/Queries/getLoginFormModalStatusQuery";

export const useLoginFormModalQuery: () => boolean  = () => {

  const { data: { isLoginFormModalOpen } } = useQuery(GET_LOGIN_FORM_MODAL_STATUS_QUERY);

  return isLoginFormModalOpen;
}
