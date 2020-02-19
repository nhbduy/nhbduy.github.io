import React from 'react';

const Skills = () => {
  return (
    <section
      className='resume-section p-3 p-lg-5 d-flex flex-column'
      id='skills'>
      <div className='my-auto'>
        <h2 className='mb-5'>Skills</h2>
        <div className='subheading mb-3'>Programming Languages &amp; Tools</div>
        <ul className='list-inline dev-icons'>
          <li className='list-inline-item' title='HTML5'>
            <i className='fab fa-html5' />
          </li>
          <li className='list-inline-item' title='CSS3'>
            <i className='fab fa-css3-alt' />
          </li>
          <li className='list-inline-item' title='Javascript'>
            <i className='fab fa-js-square' />
          </li>
          <li className='list-inline-item' title='Node JS'>
            <i className='fab fa-node' />
          </li>
          <li className='list-inline-item' title='React JS'>
            <i className='fab fa-react' />
          </li>
          <li className='list-inline-item' title='Bootstrap'>
            <i className='fab fa-bootstrap' />
          </li>
          <li className='list-inline-item' title='SASS'>
            <i className='fab fa-sass' />
          </li>
          <li className='list-inline-item' title='Node Package Manager'>
            <i className='fab fa-npm' />
          </li>
          <li className='list-inline-item' title='YARN'>
            <i className='fab fa-yarn' />
          </li>
          <li className='list-inline-item' title='Git'>
            <i className='fab fa-git' />
          </li>
          <li className='list-inline-item' title='Docker'>
            <i className='fab fa-docker' />
          </li>
          <li className='list-inline-item' title='Figma'>
            <i className='fab fa-figma' />
          </li>
          <li className='list-inline-item' title='Slack'>
            <i className='fab fa-slack' />
          </li>
          <li className='list-inline-item' title='JIRA'>
            <i className='fab fa-jira' />
          </li>
          <li className='list-inline-item' title='Trello'>
            <i className='fab fa-trello' />
          </li>
          <li className='list-inline-item' title='Windows'>
            <i className='fab fa-windows' />
          </li>
          <li className='list-inline-item' title='Linux'>
            <i className='fab fa-linux' />
          </li>
        </ul>
        <div className='subheading mb-3'>Workflow</div>
        <ul className='fa-ul mb-0'>
          <li>
            <i className='fa-li fa fa-check' />
            Mobile-First, Responsive Design
          </li>
          <li>
            <i className='fa-li fa fa-check' />
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i className='fa-li fa fa-check' />
            Optimization (Code Splitting, Tree Shaking, PWA)
          </li>
          <li>
            <i className='fa-li fa fa-check' />
            Cross Functional Teams
          </li>
          <li>
            <i className='fa-li fa fa-check' />
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
