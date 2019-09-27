import { useQuery } from "@apollo/react-hooks";
import { GET_LOGIN_STATUS_QUERY } from "../../../../Infrastructure/Apollo/Queries/getLoginStatusQuery";

export const useLoginQuery: () => boolean  = () => {

  const { data: { isLoginOpen } } = useQuery(GET_LOGIN_STATUS_QUERY);

  return isLoginOpen;
}
