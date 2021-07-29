import './UserInfoModal.css';
import urls from '../urls';
import { useState } from 'react';

function UserInfoModalComponent(props) {
  //state
  const [moveDown, setMoveDown] = useState(false);
  const [inputPoint, setInputPoint] = useState(0);

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

  const tryChargePoint = async function(userId, point) {
    fetch(urls.change_point, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          userId: userId,
          changeData: {
            point: point
          }
        }
      )
    })
    .then((res) => {
      return res.json();
    })
    .then((res_json) => {
      if(res_json.isSuccess){
        props.setUserInfo(res_json.userInfo);
      }
      else{
      }
    })
    .catch((res) => {
      console.log(res);
    })
    
  }

  const onClickChargeBtn = async (e) => {
    //props.setIsLoading(true);
    console.log(props.userInfo, parseInt(inputPoint));
    await tryChargePoint(props.userInfo.userId, parseInt(inputPoint));
    e.target.value = 0;
    setInputPoint(0);
    //
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
          <input value={inputPoint} type="number" onChange={(e) => {setInputPoint(e.target.value)}}></input>
          <button onClick={onClickChargeBtn}>충전</button>
        </div>
        <div className="user-info-modal-layer">
        </div>
      </div>
    );
  }
  else{
    return false;
  }
}

export default UserInfoModalComponent;