import Home from './components/Home/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Blogs from './components/Blogs/Blogs';
import ContactMe from './components/ContactMe/ContactMe';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
