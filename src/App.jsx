import React from "react";
import "./App.css";
import {CartProvider} from './context/cartContext';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <CartProvider>
      <div className="App">
        <NavBar />
        <Switch>
              {/* <Route exact path={["/"]} component={ItemListContainer} /> */}
              <Route exact path={["/", "/category/:id"]} component={ItemListContainer} />
              <Route exact path="/product/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart}/>
        </Switch>
     </div>
     </CartProvider>
    </Router>
  );
}

export default App;