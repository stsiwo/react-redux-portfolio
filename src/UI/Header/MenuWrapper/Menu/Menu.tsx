import * as React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_MENUSIDEBAR_STATUS_QUERY } from '../../../../Infrastructure/Apollo/Queries/getMenuSidebarStatusQuery';
import { useMenuSidebarQuery } from '../../../Base/Hooks/Queries/useMenuSidebarQuery';
import MenuCloseIcon from './MenuCloseIcon/MenuCloseIcon';
import { useLoginQuery } from '../../../Base/Hooks/Queries/useLoginQuery';
import { useToggleSignupFormModalMutation } from '../../../Base/Hooks/Mutations/useToggleSignupFormModalMutation';
import { useToggleLoginFormModalMutation } from '../../../Base/Hooks/Mutations/useToggleLoginFormModalMutation';


const Menu: React.FunctionComponent<{}> = (props: {}) => {

  // menu side bar
  const isMenuSidebarOpen: boolean = useMenuSidebarQuery();

  let headerCss = "header-menu-ul";
  if (isMenuSidebarOpen) headerCss += " header-menu-ul-open";

  // login
  const isLogin: boolean = useLoginQuery();

  // sign up form
  const toggleSignupFormModal = useToggleSignupFormModalMutation();

  const handleToggleSignupFormModal: React.EventHandler<React.MouseEvent<HTMLLIElement>> = (e) => {
    toggleSignupFormModal();
  }

  // login form 
  const toggleLoginFormModal = useToggleLoginFormModalMutation();

  const handleToggleLoginFormModal: React.EventHandler<React.MouseEvent<HTMLLIElement>> = (e) => {
    toggleLoginFormModal();
  }

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
      {(!isLogin && 
        <React.Fragment>
          <li className="header-menu-li" onClick={handleToggleSignupFormModal}>
            <div>Signup</div>
          </li>
          <li className="header-menu-li" onClick={handleToggleLoginFormModal}>
            <div>Login</div>
          </li>
        </React.Fragment>
      )}
      {(isLogin &&
        <li className="header-menu-li">
          <div>Logout</div>
        </li>
      )}
    </ul>
  );
}

export default Menu;
