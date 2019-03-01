import React, { Component } from 'react';
import Content01 from './Content01.js';
import Content02 from './Content02.js';
import Content03 from './Content03.js';
import Content04 from './Content04.js';
import Content05 from './Content05.js';
import Content06 from './Content06.js';

class ContentMain extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Content01 id="about" firstName="Duy" lastName="NGUYEN" />
                <hr className="m-0" />
                <Content02/>
                <hr className="m-0" />
                <Content03/>
                <hr className="m-0" />
                <Content04/>
                <hr className="m-0" />
                <Content05/>
                <hr className="m-0" />
                <Content06/>
            </div>
        );
    }
}

export default ContentMain;