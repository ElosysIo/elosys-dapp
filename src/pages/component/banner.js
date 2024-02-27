import React, { useState } from 'react'
import Badges from '../../components/badges'
import Navbar from '@/components/navbar'

const Banner = () => {
  const [showbadges, setShowBadges] = useState(false)
  return (
    <>
    <Navbar />
      <section className="main-banner">
        <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
        <div className="custom-container">
          <div className="encrypion-asset-table">
            <div className="top-box">
              <div className="left-text">
                <p>Private Balance</p>
                <h6>$182,664.47</h6>
              </div>
              <dv className="right-btns">
                <a href="#" className='btn-encrypt'>Encrypt</a>
                <a href="#" className='btn-decrypt'>Decrypt</a>
              </dv>
            </div>
            <h6 className='main-title'>My PRIVATE Assets</h6>
            <div className="inner-table">
              <div className="single-row">
                <div className="left-text">
                  <div className="main-img">
                    <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid coin-img' />
                  </div>
                  <h6>DOP_ETH</h6>
                </div>
                <div className="right-text">
                  <h6>1.25 ETH</h6>

                </div>
              </div>
              <div className="single-row">
                <div className="left-text">
                  <div className="main-img">
                    <img src="\assets\crypto-icons\usdt.svg" alt="img" className='img-fluid coin-img' />
                  </div>
                  <h6>DOP_USDT</h6>
                </div>
                <div className="right-text">
                  <h6>1.25 USDT</h6>

                </div>
              </div>
              <div className="single-row">
                <div className="left-text">
                  <div className="main-img">
                    <img src="\assets\crypto-icons\bnb.svg" alt="img" className='img-fluid coin-img' />
                  </div>
                  <h6>DOP_BNB</h6>
                </div>
                <div className="right-text">
                  <h6>1.25 BNB</h6>

                </div>
              </div>
              <div className="single-row">
                <div className="left-text">
                  <div className="main-img">
                    <img src="\assets\crypto-icons\shib.svg" alt="img" className='img-fluid coin-img' />
                  </div>
                  <h6>DOP_SHIB</h6>
                </div>
                <div className="right-text">
                  <h6>1.25 SHIB</h6>

                </div>
              </div>
              <div className="single-row">
                <div className="left-text">
                  <div className="main-img">
                    <img src="\assets\crypto-icons\doge.svg" alt="img" className='img-fluid coin-img' />
                  </div>
                  <h6>DOP_DAI</h6>
                </div>
                <div className="right-text">
                  <h6>1.25 DAI</h6>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Banner
