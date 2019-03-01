import React, { Component } from 'react';
import Content01_Header from './Content01_Header.js';
import Content02_Experience from './Content02_Experience.js';
import Content03_Education from './Content03_Education.js';
import Content04_Skills from './Content04_Skills.js';
import Content05_Interests from './Content05_Interests.js';
import Content06_Certifications from './Content06_Certifications.js';

class ContentMain extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Content01_Header id="about" firstName="Duy" lastName="NGUYEN" />
                <hr className="m-0" />
                <Content02_Experience/>
                <hr className="m-0" />
                <Content03_Education/>
                <hr className="m-0" />
                <Content04_Skills/>
                <hr className="m-0" />
                <Content05_Interests/>
                <hr className="m-0" />
                <Content06_Certifications/>
            </div>
        );
    }
}

export default ContentMain;