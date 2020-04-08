import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../../../logo.svg';

import LanguagesSwitch from '../../../Partials/LanguagesSwitch';

const publicUrl = process.env.PUBLIC_URL;

/**
 * Functional Component for showing the header of the site. 
 * @component
 * @param {string} title Title of the site
 * @example
 * const sitename = 'my site name'
 * return (
 *   <Header title={sitename} />
 * )
 */
const Header = ({ title }) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" role="navigation">
                <Navbar.Brand as="a" href={`${publicUrl}/#/`}>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt={`${title} logo`}
                    /> react-base-multilang-site</Navbar.Brand>
                <Navbar.Toggle aria-controls="site-navbar-nav" />
                <Navbar.Collapse id="site-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link id="home_link" href={`${publicUrl}/#/en/`}>Home</Nav.Link>
                        <Nav.Link id="about_link" href={`${publicUrl}/#/en/about`}>About Me</Nav.Link>
                        <Nav.Link id="classes_link" href={`${publicUrl}/#/en/classes`}>Classes</Nav.Link>
                    </Nav>
                    <LanguagesSwitch />
                    <Form inline target="_blank" method="get" action="http://www.google.com/search">
                        <input type="hidden"  name="sitesearch" value="magicianred.altervista.org" />
                        <InputGroup>
                            <FormControl type="text" name="q" placeholder="Search" />
                            <InputGroup.Append>
                                <Button type="submit" variant="outline-secondary"><small>Search on Google</small></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

Header.propTypes = {
    /**
     * Title of the site
     */
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Default Site title'
}

export default Header;