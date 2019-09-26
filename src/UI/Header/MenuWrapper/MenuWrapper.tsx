import * as React from 'react';
import { useMenuSidebarQuery } from '../../Base/Hooks/Queries/useMenuSidebarQuery';
import Menu from './Menu/Menu';
import './MenuWrapper.scss';


const MenuWrapper: React.FunctionComponent<{}> = (props: {}) => {

  const isMenuSidebarOpen: boolean = useMenuSidebarQuery();

  let headerWrapperCss = "header-menu-wrapper";
  if (isMenuSidebarOpen) headerWrapperCss += " header-menu-wrapper-open";

  return (
    <div className={headerWrapperCss}>
      <Menu />
    </div>
  );
}

export default MenuWrapper;
