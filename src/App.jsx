import { useState } from 'react';
import './App.css';
import Auth from './components/auth/Auth';

function App() {

  const [ sessionToken, setSessionToken] = useState('Sample Token');

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken)
  }

  return (
    <div className="App">
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
