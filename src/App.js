import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NavBar title="TextUtils"/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter Text here..."/>
    </>
  );
}

export default App;
