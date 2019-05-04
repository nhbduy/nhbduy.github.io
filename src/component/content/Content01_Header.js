import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content01_Header extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex d-column"
        id={this.props.id}>
        <div className="my-auto">
          <h1 className="mb-0">
            {this.props.firstName}
            <span className="text-primary">{this.props.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {this.props.address} · {this.props.phone} ·
            <a href="mailto:name@email.com">{this.props.email}</a>
          </div>
          <p className="lead mb-5">{this.props.descr}</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

Content01_Header.defaultProps = {
  firstName: 'Duy',
  lastName: 'NGUYEN',
  address: 'HCMC, Vietnam',
  phone: '(+84) 969 543 105',
  email: 'duy3105@gmail.com',
  descr:
    'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.'
};

Content01_Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  descr: PropTypes.string
};

export default Content01_Header;
