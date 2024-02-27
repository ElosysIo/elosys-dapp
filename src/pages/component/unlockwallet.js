import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/navbar'

const unlockwallet = () => {
    return (
        <>
            <Navbar />
            <section className="unlockwallet">
            <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
                <div className="custom-container">
                    <div className="innerimport">
                        <div className="importheader">
                            <p className="importhead">Type Password to unlock your wallet </p>
                        </div>
                        <form className="w-100">
                            <div className="importbody">
                                <div className="material-textfield">
                                <label>Password</label>
                                   <div className="option-field">
                                   <input placeholder="********" type="password" />
                                    <svg className='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.7084 7.625C15.7834 4.6 12.9667 2.85833 10 2.85833C8.51669 2.85833 7.07502 3.29166 5.75835 4.1C4.44169 4.91666 3.25835 6.10833 2.29169 7.625C1.45835 8.93333 1.45835 11.0583 2.29169 12.3667C4.21669 15.4 7.03335 17.1333 10 17.1333C11.4834 17.1333 12.925 16.7 14.2417 15.8917C15.5584 15.075 16.7417 13.8833 17.7084 12.3667C18.5417 11.0667 18.5417 8.93333 17.7084 7.625ZM10 13.3667C8.13335 13.3667 6.63335 11.8583 6.63335 10C6.63335 8.14166 8.13335 6.63333 10 6.63333C11.8667 6.63333 13.3667 8.14166 13.3667 10C13.3667 11.8583 11.8667 13.3667 10 13.3667Z" fill="#5F5F5F" />
                                        <path d="M10 7.61667C8.69167 7.61667 7.625 8.68334 7.625 10C7.625 11.3083 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3083 12.3833 10C12.3833 8.69167 11.3083 7.61667 10 7.61667Z" fill="#5F5F5F" />
                                    </svg>
                                   </div>
                                </div>
                                <Link href='/reset'>
                                    <p className='common-clr forgot-text'>Forgot Password?</p>
                                </Link>

                               <Link href="/banner"> <button type='submit' className="common-btntwo">Unlock</button></Link>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default unlockwallet
