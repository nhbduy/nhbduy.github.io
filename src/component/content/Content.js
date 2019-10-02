import React, { Component } from 'react';

import About from './About';
import Experiences from './Experiences';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
// import Certifications from './Certifications';

class Content extends Component {
  render() {
    return (
      <div className='container-fluid p-0'>
        <About id='about' />
        <hr className='m-0' />

        <Experiences id='experiences' />
        <hr className='m-0' />

        <Education id='education' />
        <hr className='m-0' />

        <Skills id='skills' />
        <hr className='m-0' />

        <Interests id='interests' />
        {/* <hr className='m-0' /> */}

        {/* <Certifications id="awards" /> */}
      </div>
    );
  }
}

export default Content;
