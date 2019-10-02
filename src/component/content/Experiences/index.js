import React, { Component } from 'react';

import data from './data';

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
              className={cn([
                'resume-item d-flex flex-column flex-md-row',
                index === data.length - 1 ? ' mb-5' : ''
              ])}>
              <div className='resume-content mr-auto'>
                <h3 className='mb-0'>{item.title}</h3>
                <div className='subheading mb-3'>{item.company}</div>
                {item.projects.map(p => (
                  <div key={p.name}>
                    <p>{p.name}</p>
                    <p>{p.description}</p>
                    <code>{p.technology}</code>
                    {p.responsibilities.map(r => (
                      <div key={r}>
                        <p>{r}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className='resume-date text-md-right'>
                <span className='text-primary'>{item.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Experiences;
