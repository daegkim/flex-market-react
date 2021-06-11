import './App.css';
import HeaderComponent from './HeaderComponent';
import ProductComponent from './ProductComponent';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetailComponent from './ProductDetailComponent';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryId, setCategoryId] = useState("001");

  useEffect(() => {
    setCategoryId(categoryId);
  }, [categoryId]);

  return (
    <BrowserRouter>
      <div className="app">
        <HeaderComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCategoryId={setCategoryId}></HeaderComponent>
        <Switch>
          <Route path="/" exact>
            <ProductComponent categoryId={categoryId}></ProductComponent>
          </Route>
          <Route path="/product/:productId" component={ ProductDetailComponent } exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
