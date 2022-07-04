import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { Route, Switch } from "react-router-dom";
import Details from "./components/itemDetails/Details";
function App() {
  return (
    <>
      <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/product/:id' component={Details} />
    </Switch>
    </>
  );
}

export default App;
