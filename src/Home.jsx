import React from 'react';
import {Link} from 'react-router-dom'
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common
      header="Grow your business with"
      button='Get Started'
      imgsrc='https://picsum.photos/1200/800'
      visit='/about'
      />
    </>
  );
};

export default Home;
