import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sanitizeHtml from 'sanitize-html';

/**
 * HomeMessage Model definition
 * @class HomeMessage
 * @property {number} id
 * @property {string} title
 * @property {string} text
 * @property {string} imagesrc
 * @property {string} link
 */
class HomeMessage {

    /**
     * @constructor
     * @param {*} id 
     * @param {*} title 
     * @param {*} text 
     * @param {*} imagesrc 
     * @param {*} link 
     */
    constructor(id, title, text, imagesrc, link = undefined) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.imagesrc = imagesrc;
        this.link = link;
    }

    /**
     * Display of a HomeMessage class model
     * @example
     * return (
     *  <Carousel.Item key={id}>
     *      <img 
     *          className="d-block w-100" 
     *          src={imagesrc} 
     *          alt={title} />
     *      <Carousel.Caption> 
     *          <h3>{title}</h3> 
     *          {text} 
     *      </Carousel.Caption>
     *  </Carousel.Item>
     * )
     */
    toDisplay = () => (
        <Carousel.Item key={this.id}>
            <img
                className="d-block w-100"
                src={this.imagesrc}
                alt={this.title}
            />
            <Carousel.Caption className="carousel-caption">
                <h3>{this.title}</h3>
                <p dangerouslySetInnerHTML={{__html: 
                    sanitizeHtml(this.text, {
                        allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a' ],
                        allowedAttributes: {
                            'a': [ 'href' ]
                        }})}} />
                {this.link ?
                    <p>
                        <a target="_blank" rel="noopener noreferer" href="https://magicianred.altervista.org/gigs/php-simple-app/" className="btn-default btn-lg btn btn-primary">
                            More...</a>
                    </p> : null }
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default HomeMessage;