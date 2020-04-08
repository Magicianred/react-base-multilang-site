import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EnglishSection from './EnglishSection';
import SpanishSection from './SpanishSection';
import GermanSection from './GermanSection';
import ItalianSection from './ItalianSection';
import TurkishSection from './TurkishSection';
import Error from '../Languages/English/Pages/Error';
import NotFound from '../Languages/English/Pages/Error';

/**
 * Functional Component for handle routes of sites.
 * 
 * @component
 * @example
 * return (
 *   <SiteRoutes />
 * )
 */
const SiteRoutes = () =>
    <Switch>
        <Route path={`/en`} component={EnglishSection} />
        <Route path={`/es`} component={SpanishSection} />
        <Route path={`/de`} component={GermanSection} />
        <Route path={`/it`} component={ItalianSection} />
        <Route path={`/tr`} component={TurkishSection} />
        <Route path={`/`} component={EnglishSection} />
        { /* default language */ }
        <Route exact path="/error" component={Error} />
        
        <Route path="*" component={NotFound} />
    </Switch>

export default SiteRoutes;