import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from '../../img/icons1.png'
import icon2 from '../../img/icons2.png'
import icon3 from '../../img/icons3.png'
import {Image } from 'react-bootstrap';

const About = () => {
  return (
    <div id='about' className='aboutSection'>
    <Container className='pb-24' >
      <Row className="justify-content-md-center ">

        <Col md="auto" className='pt-14' >
          <h1 className='about-welcome'>
            What we propose to help <br /> you evoluate in Filecoin<br /> univers
          </h1>
          <p className='about-text'>Filecomining offers you a range of completely free services to allow<br /> you to learn and master mining on the Blockchain Filecoin platform.</p>
        </Col>

      </Row>
      <Row className="justify-content-md-center px-3">

        <Col md="auto" className='about-items px-4 my-2 mr-4'>
          <Image className='about-icons' src={icon1} alt="icon1" />
          <h2 className='items-heading'>Learning</h2>
          <p className='items-text'>
            Find a set of tutorials, courses and teaching materials to learn how to use the Blockchain Filecoin and especially its mining function.
          </p>
        </Col>
        <Col md="auto" className='about-items px-4 my-2 mr-4'>
          <Image className='about-icons' src={icon2} alt="icon1" />
          <h2 className='items-heading'>Embed analytics</h2>
          <p className='items-text'>
          You can find a set of analytical data accessible in real time on the Filecoin platform. Transaction data, storage data and also network efficiency data.
          </p>
        </Col>
        <Col md="auto" className='about-items px-4 my-2 mr-4'>
          <Image className='about-icons' src={icon3} alt="icon1" />
          <h2 className='items-heading'>Turnkey Solution</h2>
          <p className='items-text'>
          We offer you turnkey mining solutions. Preconfigured and optimized hardware or software for filecoin mining.
          </p>
        </Col>

      </Row>
    </Container >
  </div>
  )
}

export default About