import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'
import About from './Components/Home/About/About';
import Contact from './Components/Home/Contact/Contact';
import Project from './Components/Home/Projects/Project';
import Resume from './Components/Home/Resume/Resume';
import Blog from './Components/Home/Blog/Blog';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path='/About'>
          <About></About>
        </Route>
        <Route path='/Contact'>
          <Contact></Contact>
        </Route>
        <Route path='/Projects'>
          <Project></Project>
        </Route>
        <Route path='/Resume'>
          <Resume></Resume>
        </Route>
        <Route path='/Blog'>
          <Blog></Blog>
        </Route>
        
      </Switch>
    </Router>
     
  
  );
}

export default App;
