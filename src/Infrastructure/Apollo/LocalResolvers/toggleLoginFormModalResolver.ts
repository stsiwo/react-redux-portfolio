import { Resolvers } from "apollo-client";
import { GET_LOGIN_FORM_MODAL_STATUS_QUERY } from "../Queries/getLoginFormModalStatusQuery";

// refer to Resolvers from 'apollo-client';
export declare type ToggleLoginFormModalResolverType = {
  toggleLoginFormModal: (rootValue?: any, args?: any, context?: any, info?: any) => any;
}

export const toggleLoginFormModalResolver: ToggleLoginFormModalResolverType = { 
  toggleLoginFormModal: (_root, variables, { cache, getCacheKey }) => {
    const { isLoginFormModalOpen } = cache.readQuery({ query: GET_LOGIN_FORM_MODAL_STATUS_QUERY });
    const data = {
      isLoginFormModalOpen: !isLoginFormModalOpen
    }
    cache.writeQuery({ query: GET_LOGIN_FORM_MODAL_STATUS_QUERY, data });
    return data;
  },
}
