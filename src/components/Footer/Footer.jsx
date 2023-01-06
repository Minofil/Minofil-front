import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import logo from './../../img/logo.png'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'


const Footer = () => {
    return (
        <div id='contact' className='footer'>
            <Container>
                <Row className='footer-row1 py-6'>
                    <Col sm={6}>
                        <img src={logo} alt="logo" width="150px" height="48.98px" />
                    </Col>
                    <Col >
                        <h1 className='footer-title'>About</h1>
                        <a href='/' className='footer-text'><li>Home</li></a>
                        <a href='/' className='footer-text'><li>About Us</li></a>
                        <a href='/' className='footer-text'><li>Services</li></a>
                        <a href='/' className='footer-text'><li>Solutions</li></a>
                    </Col>
                    <Col >
                        <h1 className='footer-title'>Information</h1>
                        <a href='/' className='footer-text'><li>Contacts</li></a>
                        <a href='/' className='footer-text'><li>Our team</li></a>
                        <a href='/' className='footer-text'><li>Blog</li></a>
                        <a href='/' className='footer-text'><li>FAQ</li></a>
                    </Col>
                    <Col >
                        <h1 className='footer-title'>Service</h1>
                        <a href='/' className='footer-text'><li>Pages</li></a>
                        <a href='/' className='footer-text'><li>Elements</li></a>
                        <a href='/' className='footer-text'><li>Site map</li></a>
                        <a href='/' className='footer-text'><li>Pricing</li></a>
                        <a href='/' className='footer-text'><li>FAQ</li></a>
                    </Col>
                </Row>

                <Row className='footer-row1 py-8 my-8'>
                    <Col>
                        <h1 className='footer-title'>Contacts</h1>
                        <div className='flex'>
                            <div >
                            <p className='footer-text'>+1 601-201-5580</p>
                            </div>
                            <div>
                            <p className='footer-text px-3'>1642 Washington Avenue, Jackson, MS, 39201</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <button className='footer-text flex'><b>ensome@info.co.us</b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                            </button>
                            
                            <button className='footer-text flex ml-10'><b>Driving derections</b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>

                    </Col>
                    <Col>
                    <h1 className='footer-title d-flex justify-content-end pr-40'>Social</h1>
                    <Col  className='d-flex justify-content-end'>
                        <BsFacebook size={19} color='#2D9CDB' className='mx-2'/>
                        <BsTwitter size={19} color='#2D9CDB' className='mx-2'/>
                        <BsLinkedin size={19} color='#2D9CDB' className='mx-2'/>
                        <BsYoutube size={19} color='#2D9CDB' className='mx-2'/>
                        <BsDribbble size={19} color='#2D9CDB' className='mx-2'/>
                        <BsBehance size={19} color='#2D9CDB' className='mx-2'/>
                        
                    </Col>
                    </Col>
                </Row>
                <Row className='py-4'>
                    <Col>
                    <div className='flex'>
                            <button className='footer-last flex'>Privacy policy <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg></button>
                            
                            <button className='footer-last flex ml-10'>Terms of us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <p className='footer-last2'>© 2022 Ensome. All Rights Reserved.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}


export default Footer