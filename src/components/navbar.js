import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Modal } from "react-bootstrap";



const Navbar = () => {

  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showwallet, setShowWallet] = useState(false);
  const handleClosewallet = () => setShowWallet(false);



  return (

    <>

      <section className="main-navbar">
        <div className="custom-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0">
              <Link href="/" className="navbar-brand">
                <img src="\logo.svg" alt="logo" className="logo" />
              </Link>
              <button onClick={handleShow} className="navbar-toggler" type="button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_48_777)">
                    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_777">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <div className="collapse navbar-collapse navbar-dnone-in-mobile" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link href="/banner" className={router.pathname === '/component/banner' ? "nav-link active" : "nav-link"} aria-current="page">Dashboard</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={router.pathname === '/component/transaction' ? "nav-link active" : "nav-link"} href="/transaction">Transaction</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={router.pathname === '/component/history' ? "nav-link active" : "nav-link"} href="/history">History</Link>
                  </li>
                </ul>
                <div className="right-content">
                  <a onClick={() => setShowWallet(true)} className="btn-connect"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.3752 3.29159V6.45825H11.1252V3.29159C11.1252 3.06659 10.9252 2.95825 10.7918 2.95825C10.7502 2.95825 10.7085 2.96659 10.6668 2.98325L4.0585 5.47492C3.61683 5.64159 3.3335 6.05825 3.3335 6.53325V7.09159C2.57516 7.65825 2.0835 8.56659 2.0835 9.59159V6.53325C2.0835 5.54159 2.69183 4.65825 3.61683 4.30825L10.2335 1.80825C10.4168 1.74159 10.6085 1.70825 10.7918 1.70825C11.6252 1.70825 12.3752 2.38325 12.3752 3.29159Z" fill="#002A12" />
                    <path d="M17.9169 12.0834V12.9167C17.9169 13.1417 17.7419 13.3251 17.5086 13.3334H16.2919C15.8502 13.3334 15.4502 13.0084 15.4169 12.5751C15.3919 12.3167 15.4919 12.0751 15.6586 11.9084C15.8086 11.7501 16.0169 11.6667 16.2419 11.6667H17.5002C17.7419 11.6751 17.9169 11.8584 17.9169 12.0834Z" fill="#002A12" />
                    <path d="M16.2335 10.7916H17.0835C17.5418 10.7916 17.9168 10.4166 17.9168 9.95825V9.59159C17.9168 7.86659 16.5085 6.45825 14.7835 6.45825H5.21683C4.5085 6.45825 3.8585 6.69159 3.3335 7.09159C2.57516 7.65825 2.0835 8.56659 2.0835 9.59159V15.1999C2.0835 16.9249 3.49183 18.3333 5.21683 18.3333H14.7835C16.5085 18.3333 17.9168 16.9249 17.9168 15.1999V15.0416C17.9168 14.5833 17.5418 14.2083 17.0835 14.2083H16.3585C15.5585 14.2083 14.7918 13.7166 14.5835 12.9416C14.4085 12.3083 14.6168 11.6999 15.0335 11.2916C15.3418 10.9749 15.7668 10.7916 16.2335 10.7916ZM11.6668 10.6249H5.8335C5.49183 10.6249 5.2085 10.3416 5.2085 9.99992C5.2085 9.65825 5.49183 9.37492 5.8335 9.37492H11.6668C12.0085 9.37492 12.2918 9.65825 12.2918 9.99992C12.2918 10.3416 12.0085 10.6249 11.6668 10.6249Z" fill="#002A12" />
                  </svg> Connect Wallet</a>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <Offcanvas placement="end" className="mobile-menu-offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <Link href="/"> <img src="\logo.svg" alt="logo" className="logo" /></Link> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="upper-link">
            <ul>
              <li class="nav-item">
                <Link href="/banner" className={router.pathname === '/component/banner' ? "nav-link active" : "nav-link"} aria-current="page">Account</Link>
              </li>
              <li class="nav-item">
                <Link className={router.pathname === '/component/transaction' ? "nav-link active" : "nav-link"} href="/transaction">Transaction</Link>
              </li>
              <li class="nav-item">
                <Link className={router.pathname === '/component/history' ? "nav-link active" : "nav-link"} href="/history">History</Link>
              </li>
            </ul>
          </div>
          <a onClick={() => setShowWallet(true)} className="btn-connect"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.3752 3.29159V6.45825H11.1252V3.29159C11.1252 3.06659 10.9252 2.95825 10.7918 2.95825C10.7502 2.95825 10.7085 2.96659 10.6668 2.98325L4.0585 5.47492C3.61683 5.64159 3.3335 6.05825 3.3335 6.53325V7.09159C2.57516 7.65825 2.0835 8.56659 2.0835 9.59159V6.53325C2.0835 5.54159 2.69183 4.65825 3.61683 4.30825L10.2335 1.80825C10.4168 1.74159 10.6085 1.70825 10.7918 1.70825C11.6252 1.70825 12.3752 2.38325 12.3752 3.29159Z" fill="#002A12" />
            <path d="M17.9169 12.0834V12.9167C17.9169 13.1417 17.7419 13.3251 17.5086 13.3334H16.2919C15.8502 13.3334 15.4502 13.0084 15.4169 12.5751C15.3919 12.3167 15.4919 12.0751 15.6586 11.9084C15.8086 11.7501 16.0169 11.6667 16.2419 11.6667H17.5002C17.7419 11.6751 17.9169 11.8584 17.9169 12.0834Z" fill="#002A12" />
            <path d="M16.2335 10.7916H17.0835C17.5418 10.7916 17.9168 10.4166 17.9168 9.95825V9.59159C17.9168 7.86659 16.5085 6.45825 14.7835 6.45825H5.21683C4.5085 6.45825 3.8585 6.69159 3.3335 7.09159C2.57516 7.65825 2.0835 8.56659 2.0835 9.59159V15.1999C2.0835 16.9249 3.49183 18.3333 5.21683 18.3333H14.7835C16.5085 18.3333 17.9168 16.9249 17.9168 15.1999V15.0416C17.9168 14.5833 17.5418 14.2083 17.0835 14.2083H16.3585C15.5585 14.2083 14.7918 13.7166 14.5835 12.9416C14.4085 12.3083 14.6168 11.6999 15.0335 11.2916C15.3418 10.9749 15.7668 10.7916 16.2335 10.7916ZM11.6668 10.6249H5.8335C5.49183 10.6249 5.2085 10.3416 5.2085 9.99992C5.2085 9.65825 5.49183 9.37492 5.8335 9.37492H11.6668C12.0085 9.37492 12.2918 9.65825 12.2918 9.99992C12.2918 10.3416 12.0085 10.6249 11.6668 10.6249Z" fill="#002A12" />
          </svg> Connect Wallet</a>


        </Offcanvas.Body>
      </Offcanvas>


      <Modal className='connect-wallet-modal common-modal-style' show={showwallet} onHide={handleClosewallet} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="twice-btn-wallet">
            <a className='btn-metamask' >
              <img src="\assets\metamask.svg" alt="img" className="img-fluid" />
              Metamask</a>
            <a className='btn-trustwallet'>
              <img src="\assets\trustwallet.svg" alt="img" className="img-fluid" />
              WalletConnect
            </a>

          </div>
        </Modal.Body>
      </Modal>



    </>
  );
};

export default Navbar;
