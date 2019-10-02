import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex flex-column'
        id='education'>
        <div className='my-auto'>
          <h2 className='mb-5'>Education</h2>
          <div className='resume-item d-flex flex-column flex-md-row mb-5'>
            <div className='resume-content mr-auto'>
              <h3 className='mb-0'>University Paris-Est Marne-la-Vallée</h3>
              <div className='subheading mb-3'>
                Master's degree, Information Technology
              </div>
              <div>Systems and Services for the Internet of Things</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>2015 - 2016</span>
            </div>
          </div>
          <div className='resume-item d-flex flex-column flex-md-row mb-5'>
            <div className='resume-content mr-auto'>
              <h3 className='mb-0'>Paris-Dauphine University</h3>
              <div className='subheading mb-3'>
                Master's degree, Business Infomatics
              </div>
              <div>Information System Management</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>2014 - 2015</span>
            </div>
          </div>
          <div className='resume-item d-flex flex-column flex-md-row'>
            <div className='resume-content mr-auto'>
              <h3 className='mb-0'>HCMC University of Sciences</h3>
              <div className='subheading mb-3'>
                Bachelor's degree, Information Technology
              </div>
              <div>Computer Science</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>2019 - 2013</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
