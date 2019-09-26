import * as React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_MENUSIDEBAR_STATUS_QUERY } from '../../../../Infrastructure/Apollo/Queries/getMenuSidebarStatusQuery';
import { useMenuSidebarQuery } from '../../../Base/Hooks/Queries/useMenuSidebarQuery';
import MenuCloseIcon from './MenuCloseIcon/MenuCloseIcon';


const Menu: React.FunctionComponent<{}> = (props: {}) => {

  const isMenuSidebarOpen: boolean = useMenuSidebarQuery();

  let headerCss = "header-menu-ul";
  if (isMenuSidebarOpen) headerCss += " header-menu-ul-open";

  return (
    <ul className={headerCss}>
      <MenuCloseIcon />
      <li className="header-menu-li">
        <Link className="header-menu-li-link" to="./" >item1</Link>
      </li>
      <li className="header-menu-li">
        <Link className="header-menu-li-link" to="./" >item2</Link>
      </li>
      <li className="header-menu-li">
        <Link className="header-menu-li-link" to="./" >item3</Link>
      </li>
      <li className="header-menu-li">
        <Link className="header-menu-li-link" to="./" >item4</Link>
      </li>
    </ul>
  );
}

export default Menu;
