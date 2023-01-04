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
            <a href='#home' className='navLink py-2 px-2'>Home</a>
            <a href='#about' className='navLink py-2 px-2'>Solutions</a>
            <a href='#pages' className='navLink py-2 px-2'>Pages</a>
            <a href='#elements' className='navLink py-2 px-2'>Elements</a>
            <a href='#blog' className='navLink py-2 px-2'>Blog</a>
            <a href='#footer' className='navLink py-2 px-2'>Contacts</a>
          </Nav>
          <button className='NavButton ml-3'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="32px" height="32px">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>Watch the demo</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}

export default NavBar