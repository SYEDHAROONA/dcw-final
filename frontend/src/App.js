import logo from './logo.svg';
import './App.css';
import { Button,Navbar,Nav,Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >INVENTORY ระบบแจ้งซ่อม</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">แจ้งซ่อม</Nav.Link>
      <Nav.Link href="#features">รายการแจ้งซ่อม</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
    </div>
  );
}

export default App;
