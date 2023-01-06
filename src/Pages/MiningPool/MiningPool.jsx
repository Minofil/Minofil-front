import React, { useState, useRef, useEffect } from 'react'
import './MiningPool.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '@mui/material/Slider';
import useFetch from '../../hooks/useFetch';



const MiningPool = () => {
  const [value, setValue] = useState(600);
  const [value2, setValue2] = useState(32);


  const numberOfSector = value * 1024 / value2




  const totalNetworkStoragePower = useFetch(`http://localhost:5000/space/network_storage`)
  const reward = useFetch(`http://localhost:5000/space/rewards`)
  const costOfSector = useFetch(`http://localhost:5000/space/cost_per_sector`)
  const messageFee = useFetch(`http://localhost:5000/space/message_fee`)
  const gasUsed = useFetch(`http://localhost:5000/space/gas_used`)
  const profit = useFetch(`http://localhost:5000/space/profits`)

  const yearlyProfit = value * 1024 / 32 * profit.data;

  const monthlyProfit = yearlyProfit / 12;
  const dailyProfit = yearlyProfit / 365;
  const weeklyProfit = yearlyProfit / 52;

  const sector = costOfSector.data;

  const costOfSealing = costOfSector.data * 32 + messageFee.data * value

  const estimatedCollateral = costOfSector.data * 32 * value


  const handleChange = (e) => {
    setValue(e.target.value)

    if (e.target.value > 10000) {
      setValue(10000)
    }
    if (e.target.value < 1) {
      setValue(1)
    }
  }

  const onClickHandler = (event) => {
    const number = event.target.value;
    setValue2(parseInt(number,10))
  }



  return (
    <div id='pages' className="miningSection py-8 px-2 pb-24">
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
            <span><p className='mining-info mb-4'>Estimated total size:</p></span>
            <span className='pool-values '>{value}TB</span>
          </div>
          <Col>
            <Slider
              sx={{ height: 16 }}
              defaultValue={value}
              valueLabelDisplay="auto"
              min={1}
              max={10000}
              value={value}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row>
          <Col className='sector'>

            <input
              type="text"
              min={50}
              max={10000}
              maxLength={4}
              className='cal-1 '
              placeholder='160'
              value = {numberOfSector}
              onChange={handleChange} />

            <p className='cal-text d-flex align-items-center px-3' >Sector of</p>
            <select name="" id="ddlViewBy" onClick={onClickHandler} className='cal-1 '>
              <option value={32} id='one'>32 Gib</option>
              <option value={64}id='two'>64 Gib</option>
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
                  <p className='pool-values '>{totalNetworkStoragePower.data} EiB</p>
                  <p className='pool-text '>Including your storage</p>
                </div>
              </Col>
              <Col md="auto">
                <div>
                  <h1 className='pool-title mt-4 '>24h Mining Rewards</h1>
                  <p className='pool-values '>{reward.data} FIL</p>
                  <p className='pool-text '>calculate on average</p>
                </div>
              </Col>
              <Col md="auto">
                <div>
                  <h1 className='pool-title mt-4 '>Current sector pledge</h1>
                  <p className='pool-values '>{sector} FIL</p>
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
                  <p className='pool-values '>{estimatedCollateral.toFixed(2)} FIL</p>
                  <p className='pool-text '>Filecoin to lock</p>
                </div>
              </Col >
              <Col md="auto">
                <div>
                  <h1 className='pool-title mt-4 '>Cost of sealing</h1>
                  <p className='pool-values '>{costOfSealing.toFixed(2)} FIL</p>
                  <p className='pool-text '>calculate on average</p>
                </div>
              </Col>
              <Col md="auto">
                <div>
                  <h1 className='pool-title mt-4 '>Gas Used for sealing</h1>
                  <p className='pool-values '>{gasUsed.data} FIL</p>
                  <p className='pool-text '>/32GB</p>
                </div>
              </Col>

            </Row>

            <Row className='justify-evenly'>
              <Col md="auto" className='grid justify-items-start'>
                <div >
                  <h1 className='pool-title mt-4'>Daily profits</h1>
                  <p className='pool-values '>{dailyProfit.toFixed(3)} FIL</p>
                  <p className='pool-text '>Filecoin to lock</p>
                </div>
              </Col>
              <Col md="auto">
                <div>
                  <h1 className='pool-title mt-4 '>Weekly profits</h1>
                  <p className='pool-values '>{weeklyProfit.toFixed(3)} FIL</p>
                  <p className='pool-text '>Filecoin to lock</p>
                </div>
              </Col>
              <Col md="auto">
                <div>
                  <h1 className='pool-title mt-4 '>Monthly profits</h1>
                  <p className='pool-values '>{monthlyProfit.toFixed(3)} FIL</p>
                  <p className='pool-text '>Filecoin to lock</p>
                </div>
              </Col>

            </Row>

          </Col>
        </Row>
      </Container >
    </div>

  )
}

export default MiningPool