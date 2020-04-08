import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Layout from '../Partials/LayoutJumbotron';
import Course from '../../../../Models/Course';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

/* START LOCAL FILE */
// import Paragraph from '../../../../Models/Paragraph';
// import pageData from './../../data/pages/classes.md'; 
// import data from './../../data/classes.json';
/* END LOCAL FILE */

const publicUrl = process.env.PUBLIC_URL;

/**
 * Component for showing the Classes page.
 * 
 * @component
 * @example
 * return (
 *   <Classes />
 * )
 */
class Classes extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            classes: [],
            currentClassId: undefined,
            classesJson: undefined,
            mdText: undefined,
            hasError: false,
        };
    }

    componentDidMount() {
        const items = [];
        let classesJson = '';
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/languages/turkish/classes.json`)
                .then((result) => {
                    classesJson = JSON.stringify(result.data, null, 2);
                    result.data.map((item, index) => items.push(new Course(index, item.title, item.text, item.datestart, item.dateend, item.imagesrc)));
                    let currentClassId = undefined;
                    if (items && items.length > 0) currentClassId = items[0].id;
                    this.setState({ classes: items, classesJson, currentClassId });
            });
        let mdText = undefined;
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/languages/turkish/pages/classes.md`)
                .then((result) => {
                    mdText = result.data;
                    this.setState({ mdText });
            });
    }

    /* START LOCAL FILE */
    // componentDidMount() {
    //     const items = [];
    //     let classesJson = '';
    //     classesJson = JSON.stringify(data, null, 2);
    //     data.map((item, index) => items.push(new Course(index, item.title, item.text, item.datestart, item.dateend, item.imagesrc)));
    //     this.setState({ classes: items, classesJson });
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

    onShowClass = (classId) => {
        this.setState({ currentClassId: classId });
    }

    render() {
        const { classes, classesJson, mdText, currentClassId, hasError } = this.state;
        return (
            <Layout>
                {hasError ? <h1>Something went wrong.</h1> : null}
                <Jumbotron>
                    <Container>
                        <h1 className="display-4">Sınıflar Sayfası</h1>
                        <p className="lead">Bu sınıflar sayfası</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <Jumbotron className="page whoare">
                                <ReactMarkdown source={mdText} />
                                {classes && classes.length > 0 ?
                                    <ListGroup>
                                    {classes.map((course, index) =>
                                        <ListGroup.Item key={index} action onClick={() => this.onShowClass(course.id)}>
                                        {course.title} 
                                        <Badge className="badge-list-group" variant="secondary">show details</Badge>
                                        </ListGroup.Item>)}
                                        </ListGroup> : null}
                            </Jumbotron>
                        </Col>
                        <Col sm={4}>
                            {classes && classes.length > 0 ?
                                classes.map(course => (course.id === currentClassId) ?
                                    course.toDisplay() : null) 
                                : null}
                        </Col>
                    </Row>
                </Container>
                <Container className="file_contents">
                    <span>file: /data/languages/turkish/pages/classes.md</span>
                    <SyntaxHighlighter language={'markdown'} style={coy}>
                        {mdText}
                    </SyntaxHighlighter>
                </Container>
                <Container className="file_contents">
                    <span>file: /data/languages/turkish/classes.json</span>
                    <SyntaxHighlighter language={'json'} style={coy}>
                        {classesJson}
                    </SyntaxHighlighter>
                </Container>
            </Layout>
        );
    }
}

export default Classes;