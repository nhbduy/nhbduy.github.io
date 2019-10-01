import React, { Component } from 'react';
import Content01Header from './Content01_Header.js';
import Content02Experience from './Content02_Experience.js';
import Content03Education from './Content03_Education.js';
import Content04Skills from './Content04_Skills.js';
import Content05Interests from './Content05_Interests.js';
import Content06Certifications from './Content06_Certifications.js';

class ContentMain extends Component {
  render() {
    return (
      <div className='container-fluid p-0'>
        <Content01Header id='about' />
        <hr className='m-0' />
        <Content02Experience id='experience' />
        <hr className='m-0' />
        <Content03Education id='education' />
        <hr className='m-0' />
        <Content04Skills id='skills' />
        <hr className='m-0' />
        <Content05Interests id='interests' />
        <hr className='m-0' />
        {/* <Content06Certifications id="awards" /> */}
      </div>
    );
  }
}

export default ContentMain;
