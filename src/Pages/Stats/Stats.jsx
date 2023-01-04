import React from 'react'
import './Stats.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stats = () => {
  return (
    <div className='stats-section d-flex align-items-center py-4'>

        <Container>
          <Row className='stats-elements'>
            <Col className='stats-items'>
              <h1 className='stats-value'>10+</h1>
              <p className='stats-title'>Node deployed</p>
            </Col>
            <Col className='stats-items'>
              <h1 className='stats-value'>12M</h1>
              <p className='stats-title'>Data analytics</p>
            </Col>
            <Col className='stats-items'>
              <h1 className='stats-value'>390M</h1>
              <p className='stats-title'>Data management</p>
            </Col>
            <Col className='stats-items'>
              <h1 className='stats-value'>5+</h1>
              <p className='stats-title'>Satisfied customers</p>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Stats