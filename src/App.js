import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 



import './App.css';
import { Switch,Route} from 'react-router-dom';

import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import  Cart from './components/Cart';
import Details from './components/Details';


function App() {
  return (
    <React.Fragment>
    
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart"   component={Cart} />
      <Route  component={Default}/>
      
    </Switch>

    
    </React.Fragment>

      
  );
}

export default App;
