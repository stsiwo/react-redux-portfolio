import { Resolvers } from "apollo-client";
import { GET_SIGNUP_FORM_MODAL_STATUS_QUERY } from "../Queries/getSignupFormModalStatusQuery";

// refer to Resolvers from 'apollo-client';
export declare type ToggleSignupFormModalResolverType = {
  toggleSignupFormModal: (rootValue?: any, args?: any, context?: any, info?: any) => any;
}

export const toggleSignupFormModalResolver: ToggleSignupFormModalResolverType = { 
  toggleSignupFormModal: (_root, variables, { cache, getCacheKey }) => {
    const { isSignupFormModalOpen } = cache.readQuery({ query: GET_SIGNUP_FORM_MODAL_STATUS_QUERY });
    const data = {
      isSignupFormModalOpen: !isSignupFormModalOpen
    }
    cache.writeQuery({ query: GET_SIGNUP_FORM_MODAL_STATUS_QUERY, data });
    return data;
  },
}
