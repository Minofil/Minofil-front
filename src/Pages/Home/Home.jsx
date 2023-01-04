import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './../../components/NavBar/NavBar'
import About from './../About/About'
import Help from '../Help/Help';
import MiningPool from './../MiningPool/MiningPool'
import Testimonies from '../Testimonies/Testimonies';
import Footer from '../../components/Footer/Footer';
import clientLogo from '../../img/clientslogos.png'
import illustration from '../../img/001_illustration.png'
import Stats from '../Stats/Stats';

const Home = () => {

  return (
    <>
      <Navbar />
      {/* welcome bar */}
      <div id='home' className='section-home pt-10'>
        <Container className='py-10'>
          <Row>
            <Col className='slide-right py-10 pl-10 '>
              <h1 className='textheader'>Your Filecoin mining <br />dedicated platform</h1>
              <p className='textWelcome'>Minofil it’s your filecoin dedicated mining platform. You will <br />find on this site tutorials,coures , information on mining <br />materials, a profit simulator for filecoinmining and many<br /> other tools to allow you to integrate the world of ipfs.
              </p>
              <div className='welcomeButton'>
                <button className='btn1'>Learn More</button>
                <button className='btn2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="32px" height="32px">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                  Discover Filecoin</button>
              </div>
            </Col>
            <Col className='pt-20'>
            <Col className='animate-bounce'>
              <img src={illustration} alt="illustration" className='img' />
            </Col>
            </Col>
          </Row>
        </Container>

<div>
        <img className='clientLogo' src={clientLogo} alt="clientlogo" />
      </div>
      </div>

      {/* about us */}
      <About/>

      {/* mining pool page */}
      <MiningPool />

      {/* help success */}
      <Help/>

      {/* testimonies page */}
      <Testimonies/>

      {/* stats */}
      <Stats/>

      {/* footer */}
      <Footer />
    </>
  )
}

export default Home