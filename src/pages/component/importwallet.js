import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/navbar'

const Importwallet = () => {
    return (
        <>
            <Navbar />
            <section className="importwallet">
            <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
                <div className="theme-container">
                    <div className="innerimport">
                        <div className="importheader">
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.56994 18.82C9.37994 18.82 9.18994 18.75 9.03994 18.6L2.96994 12.53C2.67994 12.24 2.67994 11.76 2.96994 11.47L9.03994 5.4C9.32994 5.11 9.80994 5.11 10.0999 5.4C10.3899 5.69 10.3899 6.17 10.0999 6.46L4.55994 12L10.0999 17.54C10.3899 17.83 10.3899 18.31 10.0999 18.6C9.95994 18.75 9.75994 18.82 9.56994 18.82Z" fill="#5F5F5F" />
                                    <path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="#5F5F5F" />
                                </svg>
                            </Link>
                            <p className="importhead">Import your wallet with mnemonic phrase</p>
                        </div>
                        <div className="importbody w-100">
                            <div className="material-textfield">
                                <label>Secret Phrase or Private Key</label>
                                <input placeholder="Secret Phrase or Private Key" type="password" />

                            </div>
                            <div className="form-check radiocheck-btnn">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label importhead" for="flexCheckDefault">
                                    Show account mnemonic
                                </label>
                            </div>


                            <div className="material-textfield">
                                <label>New password</label>
                                <div className="option-field">
                                    <input placeholder="Enter new password" type="password" />
                                    <svg className='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.7082 7.625C15.7832 4.6 12.9665 2.85833 9.99984 2.85833C8.5165 2.85833 7.07484 3.29167 5.75817 4.1C4.4415 4.91667 3.25817 6.10833 2.2915 7.625C1.45817 8.93333 1.45817 11.0583 2.2915 12.3667C4.2165 15.4 7.03317 17.1333 9.99984 17.1333C11.4832 17.1333 12.9248 16.7 14.2415 15.8917C15.5582 15.075 16.7415 13.8833 17.7082 12.3667C18.5415 11.0667 18.5415 8.93333 17.7082 7.625ZM9.99984 13.3667C8.13317 13.3667 6.63317 11.8583 6.63317 10C6.63317 8.14167 8.13317 6.63333 9.99984 6.63333C11.8665 6.63333 13.3665 8.14167 13.3665 10C13.3665 11.8583 11.8665 13.3667 9.99984 13.3667Z" fill="#5F5F5F" />
                                        <path d="M10 7.61667C8.69167 7.61667 7.625 8.68334 7.625 10C7.625 11.3083 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3083 12.3833 10C12.3833 8.69167 11.3083 7.61667 10 7.61667Z" fill="#5F5F5F" />
                                    </svg>
                                </div>


                            </div>
                            <div className="material-textfield">
                                <label>Confirm new password</label>
                                <div className="option-field">
                                    <input placeholder="Confirm new password" type='password' />
                                    <svg className='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.7082 7.625C15.7832 4.6 12.9665 2.85833 9.99984 2.85833C8.5165 2.85833 7.07484 3.29167 5.75817 4.1C4.4415 4.91667 3.25817 6.10833 2.2915 7.625C1.45817 8.93333 1.45817 11.0583 2.2915 12.3667C4.2165 15.4 7.03317 17.1333 9.99984 17.1333C11.4832 17.1333 12.9248 16.7 14.2415 15.8917C15.5582 15.075 16.7415 13.8833 17.7082 12.3667C18.5415 11.0667 18.5415 8.93333 17.7082 7.625ZM9.99984 13.3667C8.13317 13.3667 6.63317 11.8583 6.63317 10C6.63317 8.14167 8.13317 6.63333 9.99984 6.63333C11.8665 6.63333 13.3665 8.14167 13.3665 10C13.3665 11.8583 11.8665 13.3667 9.99984 13.3667Z" fill="#5F5F5F" />
                                        <path d="M10 7.61667C8.69167 7.61667 7.625 8.68334 7.625 10C7.625 11.3083 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3083 12.3833 10C12.3833 8.69167 11.3083 7.61667 10 7.61667Z" fill="#5F5F5F" />
                                    </svg>
                                </div>
                            </div>
                           <Link href="/unlockwallet"> <button className="common-btntwo">Submit</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Importwallet
