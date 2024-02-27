import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const Send = () => {
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
            <section className="encrypt send common-box-style">
                <div className="main-heading">
                    <h6>Send</h6>
                </div>
                <div class="material-textfield">
                    <input placeholder="Enter DOP account address" type="text" />
                    <label>DOP Account</label>
                </div>
                <div class="material-textfield">
                    <input placeholder="Enter amount" type="text" />
                    <label>Amount</label>
                    <a onClick={() => { setShow(true) }} className='access-token-btn'> <img src="\assets\question-mark-icon-dark.svg" alt="img" className='img-fluid noneinlight-theme' /> <img src="\assets\question-mark-icon-light.svg" alt="img" className='img-fluid d-none showinlight-theme' /> Select Asset <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M13.3897 8H10.3083H7.53356C7.05874 8 6.82134 8.57374 7.15767 8.91007L9.71971 11.4721C10.1302 11.8826 10.7979 11.8826 11.2085 11.4721L12.1828 10.4977L13.7705 8.91007C14.1019 8.57374 13.8645 8 13.3897 8Z" fill="white" />
                    </svg></a>
                </div>
                <a href="#" className='btn-encrypt common-box-style'>Send</a>
            </section>


            <Modal className='selectnetwork-modal common-modal-style' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select Encrypted Asset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="material-textfield mt-3">
                        <input placeholder="Search..." type="text" className='search-field' />
                        <label>Search asset</label>
                        <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#A6A6A6" />
                            <path d="M16.5 17.0625C16.3575 17.0625 16.215 17.01 16.1025 16.8975L14.6025 15.3975C14.385 15.18 14.385 14.82 14.6025 14.6025C14.82 14.385 15.18 14.385 15.3975 14.6025L16.8975 16.1025C17.115 16.32 17.115 16.68 16.8975 16.8975C16.785 17.01 16.6425 17.0625 16.5 17.0625Z" fill="#A6A6A6" />
                        </svg>
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
                            <p>Amount</p>
                            <h6>0.25741 DOP_ETH</h6>
                        </div>
                        <div className="inner-text">
                            <p>DOP Address</p>
                            <h6>0x957f318bef3b...d691957y</h6>
                        </div>
                    </div>
                    <div className="total-value">
                        <div className="inner-text">
                            <p>Total</p>
                            <h6>0.5874 ETH</h6>
                        </div>
                    </div>
                    <div className="twice-btn">
                        <button onClick={handleClose2} className='btn-cancel'>Cancel</button>
                        <button className='btn-confirm common-box-style'>Confirm</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='successsssss-modal common-modal-style' show={show3} onHide={handleClose3} centered>
                <Modal.Body>
                    <div className="inner-content">
                    <img src="\assets\checkmark-dark.svg" alt="img" className='img-fluid noneinlight-theme' />
                        <img src="\assets\checkmark-light.svg" alt="img" className='img-fluid d-none showinlight-theme' />
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

export default Send
