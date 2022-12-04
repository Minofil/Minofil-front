import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import ProgressBar from 'react-bootstrap/ProgressBar';
import clientLogo from '../../img/clientslogos.png'
import illustration from '../../img/001_illustration.png'
import icon1 from '../../img/icons1.png'
import icon2 from '../../img/icons2.png'
import icon3 from '../../img/icons3.png'
import vector from '../../img/Vector.png'
import vector1 from '../../img/Vector1.png'
import person1 from '../../img/001_img_person_1.png'
import person2 from '../../img/002_img_person_2.png'
import { Image } from 'react-bootstrap';
const Home = () => {
  return (
    <>
      <Navbar />
      {/* welcome bar */}
      <div className='section-home py-10'>
        <Container className='py-10'>
          <Row>
            <Col className='py-10 pl-10'>
              <h1 className='textheader'>Your Filecoin mining <br />dedicated platform</h1>
              <p className='textWelcome'>Minofil it’s your filecoin dedicated mining platform. You will <br />find on this site tutorials,coures , information on mining <br />materials, a profit simulator for filecoinmining and many<br /> other tools to allow you to integrate the world of ipfs.
              </p>
              <div className='welcomeButton'>
                <button className='btn1'>Learn More</button>
                <button className='btn2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32px" height="32px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                  Discover Filecoin</button>
              </div>
            </Col>
            <Col className=''>
              <img src={illustration} alt="illustration" className='img' />
            </Col>
          </Row>
        </Container>


      </div>
      <div>
        <img className='clientLogo' src={clientLogo} alt="clientlogo" />
      </div>

      {/* about us */}

      <div className='aboutSection'>
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

            <Col md="auto" className='about-items my-2 mr-4'>
              <Image className='about-icons' src={icon1} alt="icon1" />
              <h2 className='items-heading'>Learning</h2>
              <p className='items-text'>
                Find a set of tutorials, courses and teaching materials to learn how to use the Blockchain Filecoin and especially its mining function.
              </p>
            </Col>
            <Col md="auto" className='about-items my-2 mr-4'>
              <Image className='about-icons' src={icon2} alt="icon1" />
              <h2 className='items-heading'>Learning</h2>
              <p className='items-text'>
                Find a set of tutorials, courses and teaching materials to learn how to use the Blockchain Filecoin and especially its mining function.
              </p>
            </Col>
            <Col md="auto" className='about-items my-2 mr-4'>
              <Image className='about-icons' src={icon3} alt="icon1" />
              <h2 className='items-heading'>Learning</h2>
              <p className='items-text'>
                Find a set of tutorials, courses and teaching materials to learn how to use the Blockchain Filecoin and especially its mining function.
              </p>
            </Col>

          </Row>
        </Container >
      </div>

      {/* mining pool page */}
      <div className="miningSection py-8 px-2 pb-24">
        <Container >
          <Row className="justify-content-md-center ">

            <Col md="auto" >
              <h1 className='mining-welcome'>
                Mining profits simulator
              </h1>
              <p className='mining-text'>Use this calculator to estimate how much you can earn from mining the file<br /> cryptocurrency (FIL) on the FIlecoin Network. Input the hard disk space that<br /> you would like to dedicate, and the calculator will give you an overview of your<br /> estimated earnings and suggested hardware.</p>
            </Col>

          </Row>

          <Row className=" welcomeButton justify-content-md-center">
        
        <Col md="auto">
        <button className='btn-estimator1 mx-12'>Simple estimator</button>
        </Col>
        <Col md="auto" className=''>
        <button className='btn-estimator2 mx-12'>Advanced estimator</button>
        </Col>
       
      </Row>
         

          <Row className='pt-24'>
            <div className='flex'>
              <span><p className='mining-info mb-4'>Estimated total size :</p></span>
              <span className='pool-values '>3TB</span>
            </div>
            <Col>
              <ProgressBar now={60} label={`${60}%`} visuallyHidden />
            </Col>
          </Row>

          <Row>
            <Col className='flex'>
              <button className='cal-1 mt-6 mb-12'>
                160
              </button>
              <p className='cal-text d-flex align-items-center px-3' >HDD of</p>
              <select name="" id="cars" className='cal-1 mt-6 mb-12'>
                <option value="">128GB</option>
              </select>
            </Col>
          </Row>


          <Row>
            <h1 className='mining-info mb-4'>Network :</h1>
            <Col className='mining-div'>
              <Row className='justify-evenly '>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4'>Total Network Power</h1>
                    <p className='pool-values '>18.908 EiB</p>
                    <p className='pool-text '>Including your storage</p>
                  </div>
                </Col>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4 '>24h Mining Rewards</h1>
                    <p className='pool-values '>0.0136 FIL</p>
                    <p className='pool-text '>calculate on average</p>
                  </div>
                </Col>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4 '>Current sector pledge</h1>
                    <p className='pool-values '>0.1976 FIL</p>
                    <p className='pool-text '>/32GB</p>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>

          <Row>
            <h1 className='mining-info mt-4 mb-4'>Results : </h1>
            <Col className='mining-div'>
              <Row className='justify-evenly'>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4'>Estimated Collateral</h1>
                    <p className='pool-values '>19.3 FIL</p>
                    <p className='pool-text '>Filecoin to lock</p>
                  </div>
                </Col >
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4 '>Cost of sealing</h1>
                    <p className='pool-values '>0.0136 FIL</p>
                    <p className='pool-text '>calculate on average</p>
                  </div>
                </Col>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4 '>Gas Used for sealing</h1>
                    <p className='pool-values '>0.1976 FIL</p>
                    <p className='pool-text '>/32GB</p>
                  </div>
                </Col>

              </Row>

              <Row className='justify-evenly'>
                <Col md="auto" className='grid justify-items-start'>
                  <div >
                    <h1 className='pool-title mt-4'>Daily profits</h1>
                    <p className='pool-values '>19.3 FIL</p>
                    <p className='pool-text '>Filecoin to lock</p>
                  </div>
                </Col>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4 '>Weekly profits</h1>
                    <p className='pool-values '>135.1 FIL</p>
                    <p className='pool-text '>Filecoin to lock</p>
                  </div>
                </Col>
                <Col md="auto">
                  <div>
                    <h1 className='pool-title mt-4 '>Monthly profits</h1>
                    <p className='pool-values '>540.4 FIL</p>
                    <p className='pool-text '>Filecoin to lock</p>
                  </div>
                </Col>

              </Row>

            </Col>
          </Row>
        </Container >
      </div>

      {/* help success */}
      <div className='help-section py-20'>
        <Container>
          <Row className="justify-content-md-center ">

            <Col md="auto" >
              <h1 className='mining-welcome pb-4'> Glad to help your success</h1>
            </Col>
          </Row>

          <Row className="justify-content-md-center px-3">

            <Col md="auto" className='help-items my-2 mr-8'>
              <p className='help-date'>22 June 2020</p>
              <h2 className='help-heading'>Sed ut perspiciatis unde omnis at vero blanditils</h2>
              <p className='help-text'>
                At vero eos et accusamus et iusto odio <br />dignissimos ducimus qui blanditiis<br />praesentium voluptatum deleniti...
              </p>
              <button className='btn-net mr-2'>Proxy</button>
              <button className='btn-net mr-2'>VPN</button>
            </Col>
            <Col md="auto" className='help-items my-2 mr-8'>
              <p className='help-date'>22 June 2020</p>
              <h2 className='help-heading'>Sed ut perspiciatis unde omnis at vero blanditils</h2>
              <p className='help-text'>
                At vero eos et accusamus et iusto odio <br />dignissimos ducimus qui blanditiis<br />praesentium voluptatum deleniti...
              </p>
              <button className='btn-net mr-2'>Proxy</button>
              <button className='btn-net mr-2'>VPN</button>
            </Col>
            <Col md="auto" className='help-items my-2 mr-8'>
              <p className='help-date'>22 June 2020</p>
              <h2 className='help-heading'>Sed ut perspiciatis unde omnis at vero blanditils</h2>
              <p className='help-text'>
                At vero eos et accusamus et iusto odio <br />dignissimos ducimus qui blanditiis<br />praesentium voluptatum deleniti...
              </p>
              <button className='btn-net mr-2'>Proxy</button>
              <button className='btn-net mr-2'>VPN</button>
            </Col>

          </Row>
          <Row className='justify-content-md-center py-8 '>
            <Col md="auto">
              <button className='btn-learn py-3'>Learn more</button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* testimonies page */}
      <div className='testimonies-section'>
        <Container>
          <Row className='justify-content-md-center pb-28 pt-10 '>
            <Col sm="auto" className='mr-96'><h1>Trusted by the best<br /> in the business</h1></Col>
            <Col sm="auto" className='d-flex justify-content-end'>
              <button className='btn1-testimony pl-8'><img src={vector} alt="arrow" /></button>
              <button className='btn2-testimony'><img src={vector1} alt="arrow" /></button>
            </Col>
          </Row>

          <Row className="justify-content-md-center mx-3">
            <Col sm="auto" className='testimonials my-4 mr-8'>
              <Image src={person1} className="person-img" alt="person1" />
              <p className='testimonials-text' >“Ut enim ad minima veniam, quis nostrum exercitationem ullam<br /> corporis suscipit laboriosam, nisi ut aliquid ex ea commodi<br />  consequatur? Quis autem vel eum iure reprehenderit qui in ea  voluptate<br /> velit esse quam nihil molestiae consequatur, vel illum.” </p>

              <h1 className='testimonials-name'>Alex Bern</h1>
              <p className='testimonials-title'>CEO by PixelPerfect</p>
            </Col>
            <Col sm="auto" className='testimonials my-4 mr-8'>
              <Image src={person2} className="person-img" alt="person1" />
              <p className='testimonials-text' >“Ut enim ad minima veniam, quis nostrum exercitationem ullam<br /> corporis suscipit laboriosam, nisi ut aliquid ex ea commodi<br />  consequatur? Quis autem vel eum iure reprehenderit qui in ea  voluptate<br /> velit esse quam nihil molestiae consequatur, vel illum.” </p>

              <h1 className='testimonials-name'>Alex Bern</h1>
              <p className='testimonials-title'>CEO by NOX</p>
            </Col>

          </Row>
        </Container>
      </div>

      {/* stats */}
      <div className='stats-section d-flex align-items-center py-4'>

        <Container>
          <Row className='stats-elements'>
            <Col className='stats-items'>
              <h1 className='stats-value'>1830+</h1>
              <p className='stats-title'>Project executed</p>
            </Col>
            <Col className='stats-items'>
              <h1 className='stats-value'>220</h1>
              <p className='stats-title'>Data analytics</p>
            </Col>
            <Col className='stats-items'>
              <h1 className='stats-value'>390</h1>
              <p className='stats-title'>Data management</p>
            </Col>
            <Col className='stats-items'>
              <h1 className='stats-value'>834+</h1>
              <p className='stats-title'>Satisfied customers</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default Home