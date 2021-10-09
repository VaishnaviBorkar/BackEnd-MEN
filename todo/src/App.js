
import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/edit" component={Edit} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
