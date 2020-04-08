import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../Languages/Turkish/Pages/Home';
import About from '../Languages/Turkish/Pages/About';
import Classes from '../Languages/Turkish/Pages/Classes';
import NotFound from '../Languages/Turkish/Pages/NotFound';

/**
 * Functional Component for handle routes to About Section.
 * 
 * @component
 * @example
 * return (
 *   <TurkishSection />
 * )
 */
const TurkishSection = withRouter(props =>
    <>
        <Route exact path={`${props.match.url}`} component={Home} />
        <Route exact path={`${props.match.url}/hakkında`} component={About} />
        <Route exact path={`${props.match.url}/sınıflar`} component={Classes} />
        
        {/* <Route path="*" component={NotFound} /> */}
    </>
);

export default TurkishSection;