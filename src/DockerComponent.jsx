import './Docker.css';
import { useState } from 'react';
import { useEffect } from 'react';

function DockerComponent(props) {

  return (
    <div className="docker">
      <div>
        <img src={process.env.PUBLIC_URL + '/user-icon.png'}/>
        <img src={process.env.PUBLIC_URL + '/cart-icon.png'}/>
        <img src={process.env.PUBLIC_URL + '/favorite-icon.png'}/>
      </div>
    </div>
  );
}

export default DockerComponent;
