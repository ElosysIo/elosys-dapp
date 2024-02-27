import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from '../../components/navbar';
import Encryptinghistory from '../../components/encryptinghistory';
import Sendinghistory from '../../components/sendinghistory';
import Decryptinghistory from '../../components/decryptinghistory';

const History = () => {
    return (
        <>
            <Navbar />
            <section className="history-section">
            <img src="\bg-imgs\banner-bg.svg" alt="img" className='img-fluid banner-bg' />
                <div className="custom-container">
                    <div className="parent-history">
                        <Tabs
                            defaultActiveKey="encrypthistory"
                            id="uncontrolled-tab-example"
                            className="history-tab"
                        >
                            <Tab eventKey="encrypthistory" title="Encrypting HISTORY">
                                <Encryptinghistory />
                            </Tab>
                            <Tab eventKey="decrypthistory" title="DECRYPTING HISTORY">
                                <Decryptinghistory />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}

export default History
