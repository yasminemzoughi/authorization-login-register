import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'
import "../NavBar/NavBar.css"

const NavBar = () => {
  return (
    <div>
      <Navbar className="my-nav" variant="dark" >
        <Container>
          <Navbar.Brand href="/">AUTH</Navbar.Brand>
          <Nav className="mx-auto">
          <Nav.Link className="nav-home" href="/">Home</Nav.Link>
           <span className='reg'><Nav.Link  className="nav-link" href="/Register">register</Nav.Link>
            <Nav.Link className="nav-link" href="/Login">Login</Nav.Link>
          </span> 
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
