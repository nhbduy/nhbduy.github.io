import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from './data';

library.add(fas, fab);

const Skills = () => {
  return (
    <section className='resume-section p-3 p-lg-5 d-flex flex-column' id='skills'>
      <div className='my-auto'>
        <h2 className='mb-5'>Skills</h2>
        <div className='subheading mb-3'>Programming Languages &amp; Tools</div>
        <ul className='list-inline dev-icons'>
          {data.skills.map(({ title, type, name }, index) => (
            <li key={index} className='list-inline-item' title={title}>
              <FontAwesomeIcon icon={[type, name]} />
            </li>
          ))}
        </ul>
        <div className='subheading mb-3'>Workflow</div>
        <ul className='fa-ul mb-0'>
          {data.workflow.map(({ content }, index) => (
            <li key={index} className='d-flex align-items-center'>
              <FontAwesomeIcon className='fa-li fa' icon={['fa', 'check']} />
              {content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
