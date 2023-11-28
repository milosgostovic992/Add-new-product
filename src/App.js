import './App.css';
import Home from './Components/Home/Home';
import NewProduct from './Components/NewProduct/NewProduct';
import NavBar from './Components/navbar/Navbar'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
