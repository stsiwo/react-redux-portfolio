import { Resolvers } from "apollo-client";
import { GET_MENUSIDEBAR_STATUS_QUERY } from "../Queries/getMenuSidebarStatusQuery";

// refer to Resolvers from 'apollo-client';
export declare type ToggleMenuSidebarResolverType = {
  toggleMenuSidebar: (rootValue?: any, args?: any, context?: any, info?: any) => any;
}

export const toggleMenuSidebarResolver: ToggleMenuSidebarResolverType = { 
  toggleMenuSidebar: (_root, variables, { cache, getCacheKey }) => {
    const { isMenuSidebarOpen } = cache.readQuery({ query: GET_MENUSIDEBAR_STATUS_QUERY });
    const data = {
      isMenuSidebarOpen: !isMenuSidebarOpen
    }
    cache.writeQuery({ query: GET_MENUSIDEBAR_STATUS_QUERY, data });
    return data;
  },
}
