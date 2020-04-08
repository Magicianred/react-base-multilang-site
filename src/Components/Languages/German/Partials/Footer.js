import React from 'react';
import Container from 'react-bootstrap/Container';

const appName = process.env.REACT_APP_NAME;
const appVersion = process.env.REACT_APP_VERSION;

/**
 * Functional Component for showing the footer of the site
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const Footer = () => {
    return (
        <footer id="footer" className="bg-dark">
            <Container fluid>
                <p>
                    Dies ist die Fußzeile von <i><a href="https://github.com/Magicianred/react-base-info-site">
                            {appName}</a></i> Ausführung <b>{appVersion}</b>
                </p>
                <p>Realisiert von <a rel="noopener noreferrer" target="_blank" href="https://magicianred.github.io/">magicianred</a></p>
            </Container>
        </footer>
    )
}

export default Footer;