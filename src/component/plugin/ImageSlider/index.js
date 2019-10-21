import React, { Suspense } from 'react';

import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import './style.css';

const AwesomeSlider = React.lazy(() => import('react-awesome-slider'));

const ImageSlider = ({ list = [] }) => {
  // const startupScreen = (
  //   <div>
  //     <img
  //       src='https://media3.giphy.com/media/26tPgy93ssTeTTSqA/source.gif'
  //       alt='loader'
  //     />
  //   </div>
  // );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AwesomeSlider
        bullets={false}
        transitionDelay={100}
        // startupScreen={startupScreen}
        cssModule={AwesomeSliderStyles}>
        {list.map(item => (
          <div key={item.id} data-src={item.link} />
        ))}
      </AwesomeSlider>
    </Suspense>
  );
};

export default ImageSlider;
