import { useMutation, MutationTuple } from "@apollo/react-hooks";
import { TOGGLE_LOGIN_FORM_MODAL_MUTATION } from "../../../../Infrastructure/Apollo/Mutations/toggleLoginFormModalMutation";

export const useToggleLoginFormModalMutation = () => {

  const [toggleLoginFormModal]: MutationTuple<any, any> = useMutation(TOGGLE_LOGIN_FORM_MODAL_MUTATION);

  return toggleLoginFormModal;
}
