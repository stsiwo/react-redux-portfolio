import { useMutation, MutationTuple } from "@apollo/react-hooks";
import { TOGGLE_SIGNUP_FORM_MODAL_MUTATION } from "../../../../Infrastructure/Apollo/Mutations/toggleSignupFormModalMutation";

export const useToggleSignupFormModalMutation = () => {

  const [toggleSignupFormModal]: MutationTuple<any, any> = useMutation(TOGGLE_SIGNUP_FORM_MODAL_MUTATION);

  return toggleSignupFormModal;
}
