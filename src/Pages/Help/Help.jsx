import React from 'react'
import './Help.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Help = () => {
  return (
    <div id='elements' className='help-section py-20'>
        <Container>
          <Row className="justify-content-md-center ">

            <Col md="auto" >
              <h1 className='mining-welcome pb-4'> Want to learn more about <br/>storage providers ?</h1>
            </Col>
          </Row>

          <Row className="justify-content-md-center px-3">

            <Col md="auto" className='help-items my-2 mr-8'>
              <p className='help-date'>03 January 2022</p>
              <h2 className='help-heading'>How the filecoin network work</h2>
              <p className='help-text'>
              FIlecoin is a peer-to-peer network that<br/> stores files, with built-in economic<br/> incentives to ensures...
              </p>
              <button className='btn-net mr-2'>Read more</button>
            </Col>
            <Col md="auto" className='help-items my-2 mr-8'>
              <p className='help-date'>03 January 2022</p>
              <h2 className='help-heading'>Learn more about storage provider</h2>
              <p className='help-text'>
              Storage providers in the Filecoin<br/> network are in charge of storing, <br/>providing content and issuing...
              </p>
              <button className='btn-net mr-2'>Read more</button>

            </Col>
            <Col md="auto" className='help-items my-2 mr-8'>
              <p className='help-date'>03 January 2022</p>
              <h2 className='help-heading'>How storage provider earn in filecoin network</h2>
              <p className='help-text'>
              In Filecoin, providers earn different <br/>types of rewards by contributing to<br/> the network.
              </p>
              <button className='btn-net mr-2'>Read more</button>
            </Col>

          </Row>
          <Row className='justify-content-md-center py-8 '>
            <Col md="auto">
              <button className='btn-learn py-3'>Learn more</button>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Help