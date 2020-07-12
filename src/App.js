import React from 'react';
import Formulario from './Formulario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="btn-group">
        <Link className="btn btn-secondary" to="/">Inicio</Link>
        <Link className="btn btn-secondary" to="/contato/ ">contato</Link>
      </div>

      <div className="App">
        <Switch>
          <Route path="/contato/">
            <Formulario />
          </Route>
          <Route path="/">
            <h1>Inicio</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
