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
import HomeMessage from '../../../../Models/HomeMessage';

/* START LOCAL FILE */
// import Paragraph from '../../../../Models/Paragraph';
// import pageData from './../../data/pages/home.md'; 
// import data from './../../data/home_messages.json';
/* END LOCAL FILE */

const publicUrl = process.env.PUBLIC_URL;

/**
 * Component for showing the Home page.
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstItem: undefined,
            items: [],
            homeMessageJson: undefined,
            mdText: undefined,
            hasError: false,
        };
    }        

    componentDidMount() {
        const items = [];
        let homeMessageJson = '';
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/languages/italian/home_messages.json`)
                .then((result) => {
                    homeMessageJson = JSON.stringify(result.data, null, 2);
                    result.data.map((item, index) => items.push(new HomeMessage(index, item.title, item.text, item.imagesrc, item.link)));
                    const firstItem = items.shift();
                    this.setState({ firstItem, items, homeMessageJson });
            });
        let mdText = undefined;
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/languages/italian/pages/home.md`)
                .then((result) => {
                    mdText = result.data;
                    this.setState({ mdText });
            });
    }

    /* START LOCAL FILE */
    // componentDidMount() {
    //     const items = [];
    //     let homeMessageJson = '';
    //     homeMessageJson = JSON.stringify(data, null, 2);
    //     data.map((item, index) => items.push(new HomeMessage(index, item.title, item.text, item.imagesrc, item.link)));
    //     const firstItem = items.shift();
    //     this.setState({ firstItem, items, homeMessageJson });
    // }

    // componentWillMount() {
    //     fetch(pageData).then((response) => response.text()).then((text) => {
    //       this.setState({ mdText: text })
    //     })
    // }
    /* END LOCAL FILE */

    static getDerivedStateFromError(error) {       
        return { hasError: true };  
    }    

    render() {
        const { firstItem, items, homeMessageJson, mdText, hasError } = this.state;
        return (
            <Layout>
                {hasError ? <h1>Something went wrong.</h1> : null}
                <Jumbotron>
                    <Container>
                        {firstItem ?
                            <>
                                <h1 className="display-4">{firstItem.title}</h1>
                                <p className="lead" dangerouslySetInnerHTML={{ __html:
                                    sanitizeHtml(firstItem.text, {
                                        allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a' ],
                                        allowedAttributes: {
                                            'a': [ 'href' ]
                                        }})}} />
                                {firstItem.link ? 
                                    <p>
                                        <Button target="_blank" rel="noopener noreferrer" href={firstItem.link} className="btn-default btn-lg">More...</Button>
                                    </p>
                                    : null }
                            </>
                            : 
                            <>
                                <h1 className="display-4">Pagina Principale</h1>
                                <p className="lead">Questa è la pagina principale</p>
                                <ReactMarkdown source={mdText} />
                            </> }
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        {items && items.length > 0 ?
                            items.map((item, index) =>
                                <Col key={index} md={4}>
                                    <h3>{item.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.text, {
                                            allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a' ],
                                            allowedAttributes: {
                                            'a': [ 'href' ]
                                            }})}} />
                                    {item.link ? 
                                        <p>
                                            <Button target="_blank" rel="noopener noreferrer" href={item.link} className="btn-default btn-lg">More...</Button>
                                        </p>
                                        : null }
                                </Col>
                                ) : null }
                    </Row>
                </Container>
                <Container id="content_main">
                    <ReactMarkdown source={mdText} />
                </Container>
                <Container className="file_contents">
                    <span>file: /data/languages/italian/pages/home.md</span>
                    <SyntaxHighlighter language={'markdown'} style={coy}>
                        {mdText}
                    </SyntaxHighlighter>
                </Container>
                <Container className="file_contents">
                    <span>file: /data/languages/italian/home_messages.json</span>
                    <SyntaxHighlighter language={'json'} style={coy}>
                        {homeMessageJson}
                    </SyntaxHighlighter>
                </Container>
            </Layout>
        );
    }
}

export default Home;