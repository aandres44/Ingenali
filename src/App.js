import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './Components/Nav/Navbar';
import { Main } from './Components/Main';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
