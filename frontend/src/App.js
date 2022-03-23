import './App.css';
import Home from './Home';
import Service from './Service'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import LoginPage from './LoginPage';
function App() {
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
