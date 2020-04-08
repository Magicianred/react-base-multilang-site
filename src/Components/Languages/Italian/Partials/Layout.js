import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

/**
 * Functional Component for showing the layout of the page.
 * @component
 * @example
 * return (
 *   <Layout>{React.children}</Layout>
 * )
 */
const Layout = (props) =>
    <Container fluid id="layout" className="layout">
        <Header />
        {props.children}
        <Footer />
    </Container>

export default Layout;