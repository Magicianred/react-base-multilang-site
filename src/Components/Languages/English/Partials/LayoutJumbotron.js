import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

/**
 * Functional Component for showing the layout of the page.
 * @component
 * @example
 * return (
 *   <LayoutJumbotron>{React.children}</LayoutJumbotron>
 * )
 */
const LayoutJumbotron = (props) => {
    return (
        <Container fluid id="layout-jumbotron" className="layout">
            <Header />
            <div className="page" role="main">
                {props.children}
            </div>
            <Footer />
        </Container>
    );
}

export default LayoutJumbotron;
