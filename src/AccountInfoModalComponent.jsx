import './AccountInfoModal.css';
import { useState } from 'react';

function AccountInfoModalComponent(props) {
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
      <div className="account-info-modal">
        <div className={"account-info-modal-content " + (moveDown ? "account-info-modal-content-animation-down " : "") + (props.moveUp ? "account-info-modal-content-animation-up " : "")}
        onAnimationEnd={makeMoveDown}>
          <img src={process.env.PUBLIC_URL + '/down-arrow-icon.png'}
          onClick={() => { setMoveDown(true); }}/>
          <p>김대근 님 환영합니다.</p>
          <p>현재 Point : 30000P</p>
          <button>충전</button>
          <p>주소 : 경기도 고양시 일산서구 킨텍스로 240</p>
          <p>연락처 : 010-5058-3995</p>
        </div>
        <div className="account-info-modal-layer">
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

export default AccountInfoModalComponent;