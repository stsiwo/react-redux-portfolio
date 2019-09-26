import * as React from 'react';
import './MenuCloseIcon.scss';
import { useToggleMenuSidebarMutation } from '../../../../Base/Hooks/Mutations/useToggleMuneSidebarMutation';


const MenuCloseIcon: React.FunctionComponent<{}> = (props: {}) => {

  const toggleMenuSidebar = useToggleMenuSidebarMutation();

  const handleToggleMenuSidebar: React.EventHandler<React.MouseEvent<HTMLElement>> = (e) => {
    toggleMenuSidebar();
  }

  return (
    <i className="regular-icon header-menu-close-icon" onClick={handleToggleMenuSidebar}>
      &#10006;
    </i>
  );
}

export default MenuCloseIcon;

