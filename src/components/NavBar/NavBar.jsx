import React from 'react'
import './NavBar.css'
import logo from './../../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
       <Navbar collapseOnSelect expand="lg" sticky='top' bg='white'>
      <Container>
        <Navbar.Brand href="#home">
        <Image src={logo} 
        className="text-center" 
        width="170px" 
        height="50px" 
        alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='justify-content-end ' />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>

          <Nav className='justify-content-end links'>
            <Nav.Link href='#home' className=' transition hover:bg-sky-400 rounded-md'>Home</Nav.Link>
            <Nav.Link href='#about' className='transition active:border-sky-500 hover:bg-sky-400 rounded-md'>Solutions</Nav.Link>
            <Nav.Link href='#pages' className='transition hover:bg-sky-400 rounded-md'>Pages</Nav.Link>
            <Nav.Link href='#elements' className='transition hover:bg-sky-400 rounded-md'>Elements</Nav.Link>
            <Nav.Link href='#blog' className='transition hover:bg-sky-400 rounded-md'>Blog</Nav.Link>
            <Nav.Link href='#footer' className='transition hover:bg-sky-400 rounded-md'>Contacts</Nav.Link>
          </Nav>
          <button className='NavButton ml-3'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32px" height="32px">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>Watch the demo</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}

export default NavBar