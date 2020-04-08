import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../Languages/Italian/Pages/Home';
import About from '../Languages/Italian/Pages/About';
import Classes from '../Languages/Italian/Pages/Classes';
import NotFound from '../Languages/Italian/Pages/NotFound';

/**
 * Functional Component for handle routes to About Section.
 * 
 * @component
 * @example
 * return (
 *   <ItalianSection />
 * )
 */
const ItalianSection = withRouter(props =>
    <>
        <Route exact path={`${props.match.url}`} component={Home} />
        <Route exact path={`${props.match.url}/chisono`} component={About} />
        <Route exact path={`${props.match.url}/classi`} component={Classes} />
        
        {/* <Route path="*" component={NotFound} /> */}
    </>
);

export default ItalianSection;