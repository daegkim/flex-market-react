import './App.css';
import HeaderComponent from './HeaderComponent';
import ProductComponent from './ProductComponent';
import DockerComponent from './DockerComponent'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetailComponent from './ProductDetailComponent';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryId, setCategoryId] = useState("001");
  const [userInfo, setUserInfo] = useState({userId : "daegeun"})

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
          <Route path="/product/:productId" component={ ProductDetailComponent } exact></Route>
        </Switch>
        <DockerComponent userInfo={userInfo}></DockerComponent>
      </div>
    </BrowserRouter>
  );
}

export default App;
