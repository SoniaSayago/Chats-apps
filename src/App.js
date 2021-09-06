import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Dashboard } from "./pages/Dashboard";

function App() {

  return (
    <>
      <main className="body d-flex align-items-start justify-content-center" style={{ maxWidth: "400px", minHeight: "100vh" }}>
        <div className="w-100">
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Dashboard' component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </main>
    </>

  );
}
export default App;

