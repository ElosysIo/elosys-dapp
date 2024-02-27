import React from 'react'
import Navbar from '../../components/navbar'
import Link from 'next/link'

const Verifyphrases = () => {
    return (
        <>
            <Navbar />
            <section className="secret-recovery">
            <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
                <div className="custom-container">
                    <div className="secret-recover-div">
                        <div className="upper-heading ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z" fill="#5F5F5F" />
                                <path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="#5F5F5F" />
                            </svg>
                            <h6>Verify your mnemonic phrases</h6>
                        </div>
                        <div className="bottom-content">
                            <p className="para">
                            Please select each words to ensure its correctness.
                            </p>
                            <div className="phrase-content">
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                                <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>  <button className="single-phrase" >
                                    <span>1.</span>
                                    <p>first</p>
                                </button>
                            </div>
                            <div className="twice-btn">
                            <Link href="/banner" className="w-100">
                               <button className='btn-verify done-btn w-100'>Ok, i’m Done</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Verifyphrases
