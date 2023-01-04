import React from 'react'
import './Testimonies.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vector from '../../img/Vector.png'
import vector1 from '../../img/Vector1.png'
import person1 from '../../img/001_img_person_1.png'
import person2 from '../../img/002_img_person_2.png'
import {Image } from 'react-bootstrap';

const Testimonies = () => {
  return (
    <div id='blog' className='testimonies-section'>
    <Container>
      <Row className='justify-content-md-center pb-28 pt-10 '>
        <Col sm="auto" className='mr-96'><h1>Trusted by the best <br/>partners</h1></Col>
        <Col sm="auto" className='d-flex justify-content-end'>
          <button className='btn1-testimony pl-8'><img src={vector} alt="arrow" /></button>
          <button className='btn2-testimony'><img src={vector1} alt="arrow" /></button>
        </Col>
      </Row>

      <Row className="justify-content-md-center mx-3">
        <Col sm="auto" className='testimonials my-4 mr-8'>
          <Image src={person1} className="person-img" alt="person1" />
          <p className='testimonials-text pt-2' >A team of professionals dedicated to the task. Throughout the<br/> implementation of our Filecoin nodes, the team gave us<br/> complete technical support. The project was launched in a short <br/>time and we will be happy to continue our collaboration with<br/> them.</p>

          <h1 className='testimonials-name'>Alex Bern</h1>
          <p className='testimonials-title'>CEO by PixelPerfect</p>
        </Col>
        <Col sm="auto" className='testimonials my-4 mr-8'>
          <Image src={person2} className="person-img" alt="person1" />
          <p className='testimonials-text pt-2' >“Ut enim ad minima veniam, quis nostrum exercitationem ullam<br /> corporis suscipit laboriosam, nisi ut aliquid ex ea commodi<br />  consequatur? Quis autem vel eum iure reprehenderit qui in ea  voluptate<br /> velit esse quam nihil molestiae consequatur, vel illum.” </p>

          <h1 className='testimonials-name'>Alex Bern</h1>
          <p className='testimonials-title'>CEO by NOX</p>
        </Col>

      </Row>
    </Container>
  </div>
    )
}

export default Testimonies