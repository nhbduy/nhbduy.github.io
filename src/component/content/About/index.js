import React from 'react';

import data from './data';

const SPACE_DOM = <span>&nbsp;</span>;

const About = () => {
  const {
    firstName,
    lastName,
    address,
    phone,
    email,
    descr01,
    descr02,
    descr03,
    profiles: { portfolio, github, stackoverflow, codepen, linkedin, twitter }
  } = data;

  return (
    <section className='resume-section p-3 p-lg-5 d-flex d-column' id='about'>
      <div className='my-auto'>
        <h1 className='mb-0'>
          {firstName}
          {SPACE_DOM}
          <span className='text-primary'>{lastName}</span>
        </h1>
        <div className='subheading mb-5'>
          {address}
          {SPACE_DOM}-{SPACE_DOM}
          {phone}
          {SPACE_DOM}-{SPACE_DOM}
          <a href='mailto:name@email.com'>{email}</a>
        </div>
        <p className='mb-5 pt-2 pr-5 pb-2 pr-5 portfolio'>
          [~/nhbduy/_DEV]$ npm run{SPACE_DOM}
          <a href={portfolio} target='_blank' rel='noopener noreferrer'>
            view-my-portfolio
          </a>
          |
        </p>
        <p className='lead'>{descr01}</p>
        <p className='lead'>{descr02}</p>
        <p className='lead mb-5'>{descr03}</p>
        <div className='social-icons'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github' />
          </a>
          <a href={stackoverflow} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-stack-overflow' />
          </a>
          <a href={codepen} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-codepen'></i>
          </a>
          <a href={linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin-in' />
          </a>
          <a href={twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
