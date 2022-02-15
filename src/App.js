import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <React.Fragment>
      <Router>
        <NavBar title="TextUtils" />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter Text here..." />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
