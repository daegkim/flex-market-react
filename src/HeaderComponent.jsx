import './Header.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import urls from './urls';
import { useEffect } from 'react';
import AccountModal from './AccountModalComponent';

function HeaderComponent(props) {
  const [category, setCategory] = useState([]);
  const [isLoginBtnClick, setIsLoginBtnClick] = useState(false);
  const btnAccountClick = (e) => {
    //props.setIsLoggedIn(!props.isLoggedIn);
    if(e.target.id === 'btnLogout'){
      props.setIsLoggedIn(!props.isLoggedIn);
    }
    if(e.target.id === 'btnLogin'){
      setIsLoginBtnClick(!isLoginBtnClick);
    }
  }
  const getCategory = () => {
    fetch(urls.category)
    .then((res) => { return res.json(); })
    .then((res_json) => { setCategory(res_json); });
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">
          <h1>Flex Market</h1>
        </Link>
      </div>
      <div className="header-account-btns">
        <button id="btnLogin" style={{ display: props.isLoggedIn ? 'none' : 'inline-block' }} onClick={btnAccountClick}>login</button>
        <button id='btnLogout' style={{ display: props.isLoggedIn ? 'inline-block' : 'none' }} onClick={btnAccountClick}>logout</button>
      </div>
      <div className="header-category">
        <table>
          <tbody>
            <tr>
              {
                category.map((value, index) => {
                  return (
                      <td key={value.categoryId} onClick={() => {props.setCategoryId(value.categoryId)}}> 
                        <Link to="/"> { value.categoryName } </Link>
                      </td>  
                  );
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
      <AccountModal isLoginBtnClick={isLoginBtnClick} setIsLoginBtnClick={setIsLoginBtnClick} setIsLoggedIn={props.setIsLoggedIn}></AccountModal>
    </div>
  );
}

export default HeaderComponent;
