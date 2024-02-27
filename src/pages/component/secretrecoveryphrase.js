import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/navbar'

const Secretrecoveryphrase = () => {
    return (
        <>
            <Navbar />
            <section className="secret-recovery">
            <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
                <div className="custom-container">
                    <div className="secret-recover-div">
                        <div className="upper-heading">
                            {/* <Link href="/create">  <img src="\assets\import-assets\arrow-left.svg" alt="img" className='img-fluid' /></Link> */}
                            <h6>Secret Recovery Phrase</h6>
                        </div>
                        <div className="bottom-content">
                            <p className="para">
                                The secret recovery phrase allows you to easily backup and restore your personal wallet. Be sure to keep it in a safe place. <br /> <br />
                                On the next screen you&apos;ll be asked to enter the words in the correct order to verify the secret phrase.
                            </p>
                            <div className="phrase-content">
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>
                                <div className="single-phrase">
                                    <span>1.</span>
                                    <p>first</p>
                                </div>

                            </div>
                            <div className="bottom-para">
                                <p>Warning: Do not share your secret phrase with anyone. Anyone who has your secret phrase can control your assets!</p>
                            </div>
                            <div className="twice-btn">
                                <button className='btn-skip'>
                                    <p className="copy_data click___One justify-content-center;">
                                        Copy Phrase
                                        <span className="gsvsvcvst"></span> <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.72 23.25H7.21997C3.06997 23.25 1.21997 21.4 1.21997 17.25V12.75C1.21997 8.6 3.06997 6.75 7.21997 6.75H11.72C15.87 6.75 17.72 8.6 17.72 12.75V17.25C17.72 21.4 15.87 23.25 11.72 23.25ZM7.21997 8.25C3.89997 8.25 2.71997 9.43 2.71997 12.75V17.25C2.71997 20.57 3.89997 21.75 7.21997 21.75H11.72C15.04 21.75 16.22 20.57 16.22 17.25V12.75C16.22 9.43 15.04 8.25 11.72 8.25H7.21997Z" fill="#292D32" />
                                            <path d="M18.12 14.25H16.97C16.56 14.25 16.22 13.91 16.22 13.5V12.75C16.22 9.43 15.04 8.25 11.72 8.25H10.97C10.56 8.25 10.22 7.91 10.22 7.5V6.35C10.22 3.17 11.64 1.75 14.82 1.75H18.12C21.3 1.75 22.72 3.17 22.72 6.35V9.65C22.72 12.83 21.3 14.25 18.12 14.25ZM17.72 12.75H18.12C20.47 12.75 21.22 12 21.22 9.65V6.35C21.22 4 20.47 3.25 18.12 3.25H14.82C12.47 3.25 11.72 4 11.72 6.35V6.75C15.87 6.75 17.72 8.6 17.72 12.75Z" fill="#292D32" />
                                        </svg>
                                    </p>
                                </button>
                                <Link className='w-100' href="/verifyphrases"><button className='btn-verify w-100'>Verify</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Secretrecoveryphrase
