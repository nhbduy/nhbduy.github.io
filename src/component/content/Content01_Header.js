import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SPACE_DOM = <span>&nbsp;</span>;

class Content01_Header extends Component {
  render() {
    const {
      id,
      firstName,
      lastName,
      address,
      phone,
      email,
      descr01,
      descr02,
      descr03,
      profiles: { github, stackoverflow, linkedin, twitter }
    } = this.props;

    return (
      <section className='resume-section p-3 p-lg-5 d-flex d-column' id={id}>
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
  }
}

Content01_Header.defaultProps = {
  firstName: 'Hoang-Bao-Duy',
  lastName: 'NGUYEN',
  address: 'HCMC, Vietnam',
  phone: '(+84) 969 543 105',
  email: 'duy3105@gmail.com',
  descr01:
    'I have many interests in web, mobile and the Internet of Things (IoT) field.',
  descr02:
    'I always learn new skills and new technologies which are attractive to me, especially the Internet, the World Wide Web and the Multimedia.',
  descr03:
    'My professional experiences includes web development and some small scale mobile application developement.',
  profiles: {
    github: 'https://github.com/nhbduy',
    stackoverflow: 'https://stackoverflow.com/users/5666489/nhbduy',
    linkedin: 'https://www.linkedin.com/in/nhbduy',
    twitter: 'https://twitter.com/nhbduy75'
  }
};

Content01_Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  descr01: PropTypes.string,
  descr02: PropTypes.string,
  descr03: PropTypes.string
};

export default Content01_Header;
