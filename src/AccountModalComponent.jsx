import './AccountModal.css';
import { useState } from 'react';
import urls from './urls';
import axios from 'axios';

function AccountModalComponent(props) {
  //state
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [isCorrectPwd, setIsCorrectPwd] = useState(true);
  const [shakeStart, setShakeStart] = useState(false);
  const handleUserId = ({target: { value }}) => {
    setUserId(value);
  }
  const handleUserPwd = ({target: { value }}) => {
    setUserPwd(value);
  }

  //custom method
  const tryLogin = function(userId, userPwd) {
    console.log(userId, userPwd);
    return fetch(urls.login, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId: userId, userPwd: userPwd})
    });
  }

  //return
  return (
    <div className="account-modal" style={{ display: props.isLoginBtnClick ? 'block' : 'none' }}>
      <div className={"account-modal-content " + (shakeStart ? "account-modal-content-animation" : "")}
        onAnimationEnd={() => {
          console.log('hello');
          setShakeStart(false);
        }}
      >
        <div className="account-modal-content-header">
          <h2>Login</h2>
        </div>
        <form className="account-modal-content-form" onSubmit={(e) => {
          e.preventDefault();
          tryLogin(userId, userPwd)
          .then((res) => {
            return res.json();
          })
          .then((res_json) => {
            if(res_json.isSuccess){
              props.setIsLoginBtnClick(!props.isLoginBtnClick);
              props.setIsLoggedIn(true);
              setIsCorrectPwd(true);
              setUserId('');
              setUserPwd('');
            }
            else{
              setIsCorrectPwd(false);
              setShakeStart(true);
            }
          })
          .catch((res) => {
            console.log(res);
          })
        }}>
          <div>
            <label>ID : </label>
            <input type="text" value={userId} onChange={handleUserId}></input>
          </div>
          <div>
            <label>PWD : </label>
            <input type="password" value={userPwd} onChange={handleUserPwd}></input>
          </div>
          <p className="account-modal-wrong-pwd" style={{ display: isCorrectPwd ? 'none' : 'inline-block' }}> wrong password </p>
          <div>
            <button type="submit"> 로그인 </button>
          </div>
        </form>
      </div>
      <div className="account-modal-layer">
      </div>
    </div>
  );
}

export default AccountModalComponent;
