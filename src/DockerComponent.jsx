import './Docker.css';
import AccountInfoModalComponent from './AccountInfoModalComponent';
import { useState } from 'react';
import { useEffect } from 'react';

function DockerComponent(props) {

  const [isAccountInfoShown, setIsAccountInfoShown] = useState(false);
  const [accountInfoMoveUp, setAccountInfoMoveUp] = useState(true);


  return (
    <div className="docker">
      <div className="docker-content">
        <img src={process.env.PUBLIC_URL + '/user-icon.png'} onClick={() => { setIsAccountInfoShown(true); setAccountInfoMoveUp(true); }}/>
        <img src={process.env.PUBLIC_URL + '/cart-icon.png'}/>
        <img src={process.env.PUBLIC_URL + '/favorite-icon.png'}/>
      </div>
      <AccountInfoModalComponent moveUp={accountInfoMoveUp} isShown={isAccountInfoShown} setIsShown={setIsAccountInfoShown} setMoveUp={setAccountInfoMoveUp}></AccountInfoModalComponent>
    </div>
  );
}

export default DockerComponent;
