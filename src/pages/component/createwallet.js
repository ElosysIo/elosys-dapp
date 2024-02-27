import Navbar from "../../components/primaryNavbar";
import Link from "next/link";
import React, { useState } from "react";

const Createwallet = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");







  return (
    <>
      <Navbar />
      <section className="createwallet">
        <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
        <div className="custom-container">
          {/* <h6 className="main-upper-new-heading">Create Wallet</h6> */}
          <div className="innerimport">
            <div className="importheader">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.56994 18.82C9.37994 18.82 9.18994 18.75 9.03994 18.6L2.96994 12.53C2.67994 12.24 2.67994 11.76 2.96994 11.47L9.03994 5.4C9.32994 5.11 9.80994 5.11 10.0999 5.4C10.3899 5.69 10.3899 6.17 10.0999 6.46L4.55994 12L10.0999 17.54C10.3899 17.83 10.3899 18.31 10.0999 18.6C9.95994 18.75 9.75994 18.82 9.56994 18.82Z"
                    fill="#5F5F5F"
                  />
                  <path
                    d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </Link>
              <p className="importhead">Set a Wallet Password</p>
            </div>
            <form className="w-100">
              <div className="importbody">
                <div className="material-textfield">
                  <label>New password</label>
                  <div className="option-field">
                    <input
                      type="password"
                      placeholder="Enter new password"
                    />
                    <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.7082 7.62506C15.7832 4.60006 12.9665 2.8584 9.99984 2.8584C8.5165 2.8584 7.07484 3.29173 5.75817 4.10007C4.4415 4.91673 3.25817 6.1084 2.2915 7.62506C1.45817 8.9334 1.45817 11.0584 2.2915 12.3667C4.2165 15.4001 7.03317 17.1334 9.99984 17.1334C11.4832 17.1334 12.9248 16.7001 14.2415 15.8917C15.5582 15.0751 16.7415 13.8834 17.7082 12.3667C18.5415 11.0667 18.5415 8.9334 17.7082 7.62506ZM9.99984 13.3667C8.13317 13.3667 6.63317 11.8584 6.63317 10.0001C6.63317 8.14173 8.13317 6.6334 9.99984 6.6334C11.8665 6.6334 13.3665 8.14173 13.3665 10.0001C13.3665 11.8584 11.8665 13.3667 9.99984 13.3667Z" fill="white" />
                      <path d="M10 7.6167C8.69167 7.6167 7.625 8.68337 7.625 10C7.625 11.3084 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3084 12.3833 10C12.3833 8.6917 11.3083 7.6167 10 7.6167Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="material-textfield">
                  <label>Confirm new password</label>
                  <div className="option-field">
                    <input
                      type="password"
                      placeholder="Confirm new password"
                    />
                    <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.7082 7.62506C15.7832 4.60006 12.9665 2.8584 9.99984 2.8584C8.5165 2.8584 7.07484 3.29173 5.75817 4.10007C4.4415 4.91673 3.25817 6.1084 2.2915 7.62506C1.45817 8.9334 1.45817 11.0584 2.2915 12.3667C4.2165 15.4001 7.03317 17.1334 9.99984 17.1334C11.4832 17.1334 12.9248 16.7001 14.2415 15.8917C15.5582 15.0751 16.7415 13.8834 17.7082 12.3667C18.5415 11.0667 18.5415 8.9334 17.7082 7.62506ZM9.99984 13.3667C8.13317 13.3667 6.63317 11.8584 6.63317 10.0001C6.63317 8.14173 8.13317 6.6334 9.99984 6.6334C11.8665 6.6334 13.3665 8.14173 13.3665 10.0001C13.3665 11.8584 11.8665 13.3667 9.99984 13.3667Z" fill="white" />
                      <path d="M10 7.6167C8.69167 7.6167 7.625 8.68337 7.625 10C7.625 11.3084 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3084 12.3833 10C12.3833 8.6917 11.3083 7.6167 10 7.6167Z" fill="white" />
                    </svg>
                  </div>

                </div>
                <Link href="/secretrecoveryphrase">
                  <button type="submit" className="common-btntwo">
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Createwallet;
