import './AccountModal.css';
import axios from 'axios';

function AccountModalComponent(props) {
  const tryLogin = function() {
    return axios.get('');
  }
  return (
    <div className="account-modal" style={{ display: props.isLoginBtnClick ? 'block' : 'none' }}>
      <div className="account-modal-content">
        <div className="account-modal-content-header">
          <h2>Login</h2>
        </div>
        <form className="account-modal-content-form">
          <div>
            <label>ID : </label>
            <input type="text"></input>
          </div>
          <div>
            <label>PWD : </label>
            <input type="password"></input>
          </div>
        </form>
        <button onClick={() => {
          tryLogin()
          .then((res) => {
            console.log(res);
            props.setIsLoginBtnClick(!props.isLoginBtnClick);
            props.setIsLoggedIn(true);
          })
        }}> 로그인 </button>
      </div>
      <div className="account-modal-layer">
      </div>
    </div>
  );
}

export default AccountModalComponent;
