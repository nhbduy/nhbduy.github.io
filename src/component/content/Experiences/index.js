import React, { Component } from 'react';

import data from './data';

import './style.css';

const cn = require('classnames');

class Experiences extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex flex-column'
        id='experiences'>
        <div className='my-auto'>
          <h2 className='mb-5'>Experiences</h2>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={cn(index !== data.length - 1 ? ' mb-5' : '')}>
              <div className='resume-item d-flex flex-column flex-md-row'>
                <div className='resume-content mr-auto'>
                  <h3 className='mb-0'>{item.title}</h3>
                  <div className='subheading mb-3'>{item.company}</div>
                </div>
                <div className='resume-date text-md-right'>
                  <span className='text-primary'>{item.timeline}</span>
                </div>
              </div>
              <div className='resume-item d-flex flex-column flex-md-row'>
                {item.projects.map(p => (
                  <div key={p.name}>
                    <p>{p.name}</p>
                    <p>{p.description}</p>
                    <code>{p.technology}</code>
                    <ul className='p-0 pt-3'>
                      {p.responsibilities.map(r => (
                        <li key={r}>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Experiences;
