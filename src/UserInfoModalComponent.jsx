import './UserInfoModal.css';
import { useState } from 'react';

function UserInfoModalComponent(props) {
  //state
  const [moveDown, setMoveDown] = useState(false);

  //custom method
  const makeMoveDown = () => {
    if(moveDown) {
      setMoveDown(false);
      props.setIsShown(false);
    }

    if(props.moveUp){
      props.setMoveUp(false);
    }
  }

  //return
  if(props.isShown){
    return (
      <div className="user-info-modal">
        <div className={"user-info-modal-content " + (moveDown ? "user-info-modal-content-animation-down " : "") + (props.moveUp ? "user-info-modal-content-animation-up " : "")}
        onAnimationEnd={makeMoveDown}>
          <img src={process.env.PUBLIC_URL + '/down-arrow-icon.png'}
          onClick={() => { setMoveDown(true); }}/>
          <p>{props.userInfo.userName}님 환영합니다.</p>
          <p>현재 Point : {props.userInfo.point}P</p>
          <button>충전</button>
        </div>
        <div className="user-info-modal-layer">
        </div>
      </div>
    );
  }
  else{
    return (
      <div></div>
    )
  }
}

export default UserInfoModalComponent;