import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Favorite from './pages/Favorite'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'
import DetailMovie from './pages/DetailMovie'
import About from './pages/About';


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/favorites">
            <Favorite />
          </Route>
          <Route exact path="/create">
            <AddMovie />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/movies/:id">
            <DetailMovie />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
