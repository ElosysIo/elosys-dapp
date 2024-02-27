import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const Encrypt = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => {
        setShow3(false)
    };
    return (
        <>
            <section className="encrypt">
                <div className="common-box-style">
                    <div className="inner-new-box">
                        <div className="upper-content">
                            <h4>0.00</h4>
                            <div className="token-value" onClick={() => { setShow(true) }}>
                                <img src="\assets\eth-icon.svg" alt="img" className='img-fluid' />
                                <h6>ETH</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <path d="M11.4021 5.11548H7.29462H3.59589C2.96295 5.11548 2.64648 5.99115 3.09481 6.50447L6.51004 10.4148C7.05727 11.0413 7.94733 11.0413 8.49456 10.4148L9.7934 8.92766L11.9098 6.50447C12.3515 5.99115 12.0351 5.11548 11.4021 5.11548Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="bottom-price">
                            <h6><span>Balance:</span> 3,814.8411 <a href="#">MAX</a></h6>
                        </div>
                    </div>
                </div>
                <div className="btn-encrypt">
                    <a href="#" className='active'>Encrypt</a>
                </div>

            </section>


            <Modal className='selectnetwork-modal common-modal-style' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select Asset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="material-textfield mt-3">
                        <div className="option-field">
                            <input placeholder="Search..." type="text" className='search-field' />
                            <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#A6A6A6" />
                                <path d="M16.5 17.0625C16.3575 17.0625 16.215 17.01 16.1025 16.8975L14.6025 15.3975C14.385 15.18 14.385 14.82 14.6025 14.6025C14.82 14.385 15.18 14.385 15.3975 14.6025L16.8975 16.1025C17.115 16.32 17.115 16.68 16.8975 16.8975C16.785 17.01 16.6425 17.0625 16.5 17.0625Z" fill="#A6A6A6" />
                            </svg>
                        </div>
                    </div>
                    <div className="select-chain">
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                        <div className="inner-chain" >
                            <div className='forflex'>
                                <img src="\assets\crypto-icons\eth.svg" alt="img" className='img-fluid' />
                                ETH
                            </div>
                            0.00
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* transaction summary modal here..................... */}
            <Modal className='summary-modal common-modal-style' show={show2} onHide={handleClose2} centered>
                <Modal.Header >
                    <Modal.Title>
                        <h6>Transaction Summary</h6>
                        <p>Please confirm your transaction details</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="bottom-content">
                        <div className="inner-text">
                            <p>Chain</p>
                            <h6>Ethereum</h6>
                        </div>
                        <div className="inner-text">
                            <p>Asset</p>
                            <h6>ETH</h6>
                        </div>
                        <div className="inner-text">
                            <p>Recipient Address</p>
                            <h6>0x957f318bef3b...d691957y</h6>
                        </div>
                        <div className="inner-text">
                            <p>Platform Fee</p>
                            <h6>$26.000</h6>
                        </div>
                        <div className="inner-text">
                            <p>Amount</p>
                            <h6>0.5874 ETH</h6>
                        </div>
                    </div>
                    <div className="twice-btn">
                        <button onClick={handleClose2} className='btn-cancel'>Cancel</button>
                        <button className='btn-confirm common-box-style' onClick={() => {
                            setShow3(true);
                            handleClose2();
                        }}>Confirm</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='successsssss-modal common-modal-style' show={show3} onHide={handleClose3} centered>
                <Modal.Body>
                    <div className="inner-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <g clip-path="url(#clip0_5_4968)">
                                <circle cx="25" cy="25" r="25" fill="#61D290" />
                                <path d="M34.5638 16.7221L21.6929 29.4723L15.434 23.2887C14.5586 22.4238 13.1392 22.4238 12.2637 23.2887C11.3883 24.1537 11.3883 25.556 12.2637 26.4209L20.1098 34.1726C20.9861 35.0383 22.4072 35.0374 23.2823 34.1705L37.7384 19.85C38.6127 18.984 38.6108 17.5817 37.7341 16.7179C36.8575 15.8541 35.4381 15.856 34.5638 16.7221Z" fill="#002A12" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_4968">
                                    <rect width="50" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h6 className='main-head'>Successfully Encrypted</h6>
                        <div className="inline-text">
                            <div className="tpmodalmainimg">
                                <img src="\assets\eth-big.svg" alt="img" className='img-fluid tpmodalinnerimg' />
                            </div>
                            <h4>0.00 <h6>ETH</h6></h4>
                        </div>
                        <p className='para'>Check transaction history for more information.</p>
                    </div>
                    <div className="twice-btns" style={{ gap: '20px' }}>
                        <button className='btn-closee'>Close</button>
                        <button className='btn-explorer'> transaction History </button>
                    </div>
                </Modal.Body>

            </Modal>





        </>
    )
}

export default Encrypt
