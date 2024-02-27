import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from '../../components/navbar';
import Encrypt from '../../components/encrypt';
import Send from '../../components/send';
import Decrypt from '../../components/decrypt';

const Transaction = () => {
    return (
        <>
            <Navbar />
            <section className="transaction-section">
            <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
                <div className="custom-container">
                    <div className="transaction-parent">
                        <Tabs
                            defaultActiveKey="encrypt"
                            id="uncontrolled-tab-example"
                            className='transaction-tab'
                        >
                            <Tab eventKey="encrypt" title="Encrypt">
                                <Encrypt />
                            </Tab>
                            <Tab eventKey="decrypt" title="Decrypt" >
                                <Decrypt />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Transaction
