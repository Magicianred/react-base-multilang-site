import React from 'react';

const publicUrl = process.env.PUBLIC_URL;

const LanguagesSwitch = () => {
    return (
        <div className="langs_switch_box">
            <a className="btn btn-small btn-dark" id="it_link" href={`${publicUrl}/#/it/`}>it</a>
            <a className="btn btn-small btn-dark" id="tr_link" href={`${publicUrl}/#/tr/`}>tr</a>
            <a className="btn btn-small btn-dark" id="es_link" href={`${publicUrl}/#/es/`}>es</a>
            <a className="btn btn-small btn-dark" id="ge_link" href={`${publicUrl}/#/de/`}>de</a>
            <a className="btn btn-small btn-dark" id="en_link" href={`${publicUrl}/#/en/`}>en</a>
        </div>
    );
}

export default LanguagesSwitch;