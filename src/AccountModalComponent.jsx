import './AccountModal.css';

function AccountModalComponent(props) {

  return (
    <div className="account-modal" style={{ display: props.isLoginBtnClick ? 'block' : 'none' }}>
      <div className="account-modal-content">
        <h2>Login</h2>
        <form>
          <input></input>
        </form>
        <button onClick={() => {props.setIsLoginBtnClick(!props.isLoginBtnClick); props.setIsLoggedIn(true);}}> 로그인 </button>
      </div>
      <div className="account-modal-layer">

      </div>
    </div>
  );
}

export default AccountModalComponent;
