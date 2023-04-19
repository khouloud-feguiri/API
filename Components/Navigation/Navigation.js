import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Users">Users</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
          <Nav.Link href="/Admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navigation