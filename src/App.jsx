import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Body from "./components/body/Body"

const App = () => {
 const userId = useSelector((state) => state.user.currentUser._id);
 console.log(userId)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{!userId ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register" > 
         {!userId ? <Redirect to="/" /> : <Register />}
        </Route>
        <Body />
      </Switch>
    </Router>
  );
};

export default App;
