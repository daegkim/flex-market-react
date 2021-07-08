import './Docker.css';
import UserInfoModalComponent from './UserInfoModalComponent';
import { useState } from 'react';

function DockerComponent(props) {

  const [isUserInfoShown, setIsUserInfoShown] = useState(false);
  const [userInfoMoveUp, setuserInfoMoveUp] = useState(false);


  return (
    <div className="docker">
      <div className="docker-content">
        <img src={process.env.PUBLIC_URL + '/user-icon.png'} onClick={() => { setIsUserInfoShown(true); setuserInfoMoveUp(true); }}/>
        <img src={process.env.PUBLIC_URL + '/cart-icon.png'}/>
        <img src={process.env.PUBLIC_URL + '/favorite-icon.png'}/>
      </div>
      <UserInfoModalComponent
      userInfo={props.userInfo}
      moveUp={userInfoMoveUp}
      isShown={isUserInfoShown}
      setIsShown={setIsUserInfoShown}
      setMoveUp={setuserInfoMoveUp}></UserInfoModalComponent>
    </div>
  );
}

export default DockerComponent;
