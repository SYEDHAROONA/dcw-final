import './App.css';
import Home from './Home';
import Service from './Service'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  </BrowserRouter>,
  <br />
    </div>
  );
}

export default App;
