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
                    Questo è il pié di pagina di <i><a href="https://github.com/Magicianred/react-base-info-site">
                            {appName}</a></i> versione <b>{appVersion}</b>
                </p>
                <p>Realizzato da <a rel="noopener noreferrer" target="_blank" href="https://magicianred.github.io/">magicianred</a></p>
            </Container>
        </footer>
    )
}

export default Footer;