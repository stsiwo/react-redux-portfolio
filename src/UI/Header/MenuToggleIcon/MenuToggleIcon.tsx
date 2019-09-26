import * as React from 'react';
import './MenuToggleIcon.scss';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useResponsiveComponent } from '../../Base/Hooks/ResponsiveComponentHook';
import { TOGGLE_MENU_SIDEBAR_MUTATION } from '../../../Infrastructure/Apollo/Mutations/toggleMenuSidebarMutation';
import { useToggleMenuSidebarMutation } from '../../Base/Hooks/Mutations/useToggleMuneSidebarMutation';

const MenuToggleIcon: React.FunctionComponent<{}> = (props: {}) => {

  const toggleMenuSidebar = useToggleMenuSidebarMutation();

  const handleToggleMenuSidebar: React.EventHandler<React.MouseEvent<HTMLElement>> = (e) => {
    toggleMenuSidebar();
  }

  return (
    <i className="regular-icon header-menu-toggle-icon" onClick={handleToggleMenuSidebar}>
      <div className="">MenuToggleIcon</div>
    </i>
  );
}

export default MenuToggleIcon;
