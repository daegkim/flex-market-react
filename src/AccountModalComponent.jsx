import './AccountModal.css';
import { useState } from 'react';
import urls from './urls';
import axios from 'axios';

function AccountModalComponent(props) {
  //state
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
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
      <div className="account-modal-content">
        <div className="account-modal-content-header">
          <h2>Login</h2>
        </div>
        <form className="account-modal-content-form">
          <div>
            <label>ID : </label>
            <input type="text" value={userId} onChange={handleUserId}></input>
          </div>
          <div>
            <label>PWD : </label>
            <input type="password" value={userPwd} onChange={handleUserPwd}></input>
          </div>
        </form>
        <button onClick={(e) => {
          tryLogin(userId, userPwd)
          .then((res) => {
            return res.json();
          })
          .then((res_json) => {
            if(res_json.isSuccess){
              props.setIsLoginBtnClick(!props.isLoginBtnClick);
              props.setIsLoggedIn(true);
              setUserId('');
              setUserPwd('');
            }
          })
          .catch((res) => {
            console.log(res);
          })
        }}> 로그인 </button>
      </div>
      <div className="account-modal-layer">
      </div>
    </div>
  );
}

export default AccountModalComponent;
