import * as React from 'react';
import './Content.scss';
import { useResponsiveComponent } from '../Base/Hooks/ResponsiveComponentHook';
import { useCssGlobalContext } from '../Base/Context/CssGlobalContext/CssGlobalContext';
import { Route } from 'react-router-dom';
import Home from './Home/Home';


const Content: React.FunctionComponent<{}> = (props: {}) => {

  return (
    <section className="content-wrapper">
      <Route path="/" exact component={Home} /> 
    </section>
  );
}

export default Content;

