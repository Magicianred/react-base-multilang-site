import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import sanitizeHtml from 'sanitize-html';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Layout from './../Partials/LayoutJumbotron';

/* START LOCAL FILE */
// import Paragraph from '../../../../Models/Paragraph';
// import pageData from './../../data/pages/about.md'; 
/* END LOCAL FILE */

const publicUrl = process.env.PUBLIC_URL;

/**
 * Component for showing the About Page page.
 * 
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mdText: undefined,
            hasError: false,
        };
    }        

    componentDidMount() {
        let mdText = undefined;
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/languages/english/pages/about.md`)
                .then((result) => {
                    mdText = result.data;
                    this.setState({ mdText });
            });
    }

    /* START LOCAL FILE */
    // componentWillMount() {
    //     fetch(pageData).then((response) => response.text()).then((text) => {
    //       this.setState({ mdText: text })
    //     })
    // }
    /* END LOCAL FILE */

    render() {
        const { mdText, hasError } = this.state;
        return (
            <Layout>
                {hasError ? <h1>Something went wrong.</h1> : null}
                <Jumbotron>
                    <Container>
                        <h1 className="display-4">About page</h1>
                        <p className="lead">This is the about page</p>
                    </Container>
                </Jumbotron>
                <Container id="content_main">
                    <ReactMarkdown source={mdText} />
                </Container>
                <Container className="file_contents">
                    <span>file: /data/languages/english/pages/about.md</span>
                    <SyntaxHighlighter language={'markdown'} style={coy}>
                        {mdText}
                    </SyntaxHighlighter>
                </Container>
            </Layout>
        );
    }
}

export default About;