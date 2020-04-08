import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SiteRoutes from './Sections/SiteRoutes';
import './App.scss';

/**
 * Title of the site
 */
const publicUrl = process.env.PUBLIC_URL;

/**
 * This fuction startup the application
 * @function App
 */
function App() {
  return (
    <Router basename={publicUrl}>
        <SiteRoutes />
    </Router>
  );
}

export default App;
