import * as React from 'react';
import './MenuCloseIcon.scss';
import { useToggleMenuSidebarMutation } from '../../../../Base/Hooks/Mutations/useToggleMuneSidebarMutation';
import { useCssGlobalContext } from '../../../../Base/Context/CssGlobalContext/CssGlobalContext';
import { useResponsiveComponent } from '../../../../Base/Hooks/ResponsiveComponentHook';


const MenuCloseIcon: React.FunctionComponent<{}> = (props: {}) => {

  const toggleMenuSidebar = useToggleMenuSidebarMutation();

  const handleToggleMenuSidebar: React.EventHandler<React.MouseEvent<HTMLElement>> = (e) => {
    toggleMenuSidebar();
  }

  const globalCss = useCssGlobalContext();
  const currentScreenWidth = useResponsiveComponent();

  return (
    currentScreenWidth < globalCss.laptopSize && (
    <i className="regular-icon header-menu-close-icon" onClick={handleToggleMenuSidebar}>
      &#10006;
    </i>
    )
  );
}

export default MenuCloseIcon;

