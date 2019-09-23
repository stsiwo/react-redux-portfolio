import * as React from 'react';
import './Header.scss';
import { useResponsiveComponent } from '../Base/Hooks/ResponsiveComponentHook';
import MenuToggleIcon from './MenuToggleIcon/MenuToggleIcon';
import MenuWrapper from './MenuWrapper/MenuWrapper';
import Menu from './MenuWrapper/Menu/Menu';
import { useCssGlobalContext } from '../Base/Context/CssGlobalContext/CssGlobalContext';


const Header: React.FunctionComponent<{}> = (props: {}) => {

  const currentScreenWidth = useResponsiveComponent();
  const cssGlobal = useCssGlobalContext();

  const renderMenuSidebar = () => {
    return (
      <React.Fragment>
        <MenuToggleIcon />
        <MenuWrapper />
      </React.Fragment>
    );
  }

  const renderHorizontalMenu = () => {
    return (
      <Menu />
    );
  }

  return (
    <header className="header-wrapper">
      <h1 className="header-title">title</h1>
      {(currentScreenWidth < cssGlobal.laptopSize && renderMenuSidebar())}
      {(currentScreenWidth >= cssGlobal.laptopSize && renderHorizontalMenu())}
    </header>
  );
}

export default Header;
