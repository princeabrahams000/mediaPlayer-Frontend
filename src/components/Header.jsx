import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-transparent border border-secondary">
    <Container>
      <Navbar.Brand href="#home">
      <FontAwesomeIcon icon={faVideo} fade style={{color: "#74C0FC",}} size='2x' />
        <span className='text-primary m-3 fs-4'>Media Player</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header