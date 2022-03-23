import React from 'react';
import {Navbar,Nav,Container } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">INVENTORY ระบบแจ้งซ่อม</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">แจ้งซ่อม</Nav.Link>
      <Nav.Link href="/service">รายการแจ้งซ่อม</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default MyNavbar;