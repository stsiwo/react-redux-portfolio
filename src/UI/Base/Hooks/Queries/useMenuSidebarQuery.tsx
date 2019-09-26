import { useQuery } from "@apollo/react-hooks";
import { GET_MENUSIDEBAR_STATUS_QUERY } from "../../../../Infrastructure/Apollo/Queries/getMenuSidebarStatusQuery";

export const useMenuSidebarQuery: () => boolean  = () => {

  const { data: { isMenuSidebarOpen } } = useQuery(GET_MENUSIDEBAR_STATUS_QUERY);

  return isMenuSidebarOpen;
}
