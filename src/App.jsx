import './App.css';
import HeaderComponent from './Header/HeaderComponent';
import ProductComponent from './Content/ProductComponent';
import ProductDetailComponent from './Content/ProductDetailComponent';
import DockerComponent from './Footer/DockerComponent';
import LoadingComponent from './LoadingModalComponent';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  //state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryId, setCategoryId] = useState("001");
  const [userInfo, setUserInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  //useEffect
  useEffect(() => {
    setCategoryId(categoryId);
  }, [categoryId]);

  return (
    <BrowserRouter>
      <div className="app">
        <HeaderComponent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCategoryId={setCategoryId}
        setUserInfo={setUserInfo}></HeaderComponent>

        <Switch>
          <Route path="/" exact>
            <ProductComponent categoryId={categoryId}></ProductComponent>
          </Route>
          {/* Route를 통해서 화면을 렌더링하는 방법은 아래를 사용하자.*/}
          <Route path="/product/:productId" render={() => <ProductDetailComponent setUserInfo={setUserInfo}></ProductDetailComponent>} exact></Route>
        </Switch>

        <DockerComponent userInfo={userInfo} setIsLoading={setIsLoading} setUserInfo={setUserInfo}></DockerComponent>

        <LoadingComponent isLoading={isLoading} setIsLoading={setIsLoading}></LoadingComponent>
      </div>
    </BrowserRouter>
  );
}

export default App;
