import React from 'react';
import sanitizeHtml from 'sanitize-html';

/**
 * Paragraph Model definition
 * @class Paragraph
 * @param {*} id 
 * @param {*} text 
 */
class Paragraph {

    /**
     * @constructor
     * @param {*} id
     * @param {*} text
     */
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    /**
     * Display of a Paragraph class model
     * @example
     **  <div class="paragraph" key={id}>
     *      {text}
     *   </div>
     * )
     */
    toDisplay = () => (
        <div className="paragraph" key={this.id} dangerouslySetInnerHTML={{__html: 
            sanitizeHtml(this.text, {
                allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a' ],
                allowedAttributes: {
                    'a': [ 'href' ]
                }})}} />
    );
}

export default Paragraph;