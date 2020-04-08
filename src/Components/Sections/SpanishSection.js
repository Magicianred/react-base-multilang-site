import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../Languages/Spanish/Pages/Home';
import About from '../Languages/Spanish/Pages/About';
import Classes from '../Languages/Spanish/Pages/Classes';
import NotFound from '../Languages/Spanish/Pages/NotFound';

/**
 * Functional Component for handle routes to About Section.
 * 
 * @component
 * @example
 * return (
 *   <SpanishSection />
 * )
 */
const SpanishSection = withRouter(props =>
    <>
        <Route exact path={`${props.match.url}`} component={Home} />
        <Route exact path={`${props.match.url}/sobremi`} component={About} />
        <Route exact path={`${props.match.url}/clases`} component={Classes} />
        
        {/* <Route path="*" component={NotFound} /> */}
    </>
);

export default SpanishSection;