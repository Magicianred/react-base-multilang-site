import React from 'react';
import sanitizeHtml from 'sanitize-html';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

/**
 * Course Model definition
 * @class Course
 * @property {number} id
 * @property {string} title
 * @property {string} text
 * @property {string} datestart
 * @property {string} dateend
 * @property {string} imagesrc
 */
class Course {

    /**
     * @constructor
     * @param {*} id 
     * @param {*} title 
     * @param {*} text 
     * @param {*} datestart 
     * @param {*} dateend
     * @param {*} imagesrc
     */
    constructor(id, title, text, datestart, dateend, imagesrc) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.datestart = datestart;
        this.dateend = dateend;
        this.imagesrc = imagesrc;
    }
    
    toDisplay = () => (
        <Card key={this.id} className="course">
            <Card.Img variant="top" src={this.imagesrc} />
            <Card.Body>
                <Card.Title className="p_title">{this.title}</Card.Title>
                <Card.Text className="p_text" dangerouslySetInnerHTML={{__html: 
                    sanitizeHtml(this.text, {
                        allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a' ],
                        allowedAttributes: {
                            'a': [ 'href' ]
                        }})}} />
                <dl>
                    <dt>Start:</dt>
                    <dd><Badge variant="primary" className="p_datestart">{this.datestart}</Badge></dd>
                    <dt>End:</dt>
                    <dd><Badge variant="secondary" className="p_dateend">{this.dateend}</Badge></dd>
                </dl>                    
            </Card.Body>
        </Card>
    );
}

export default Course;