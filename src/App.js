import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Reports from './pages/Reports';


function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/reports' component={Reports}/>
      <Route path='/products' component={Product}/>
        
    

    </Switch>
  </Router>
    </>
  );
}

export default App;
