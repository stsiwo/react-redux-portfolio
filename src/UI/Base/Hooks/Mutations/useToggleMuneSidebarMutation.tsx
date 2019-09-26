import { useMutation, MutationTuple } from "@apollo/react-hooks";
import { TOGGLE_MENU_SIDEBAR_MUTATION } from "../../../../Infrastructure/Apollo/Mutations/toggleMenuSidebarMutation";

export const useToggleMenuSidebarMutation = () => {

  const [toggleMenuSidebar]: MutationTuple<any, any> = useMutation(TOGGLE_MENU_SIDEBAR_MUTATION);

  return toggleMenuSidebar;
}
