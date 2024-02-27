import React from 'react'
import { Accordion } from 'react-bootstrap'

const Sendinghistory = () => {
    return (
        <>
            <section className="encrypting-history common-box-style">
                <div className="main-heading">
                    <h6>Sending HISTORY</h6>
                    <a href="#" className='btn-refresh'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14.6668 8.00001C14.6668 11.68 11.6802 14.6667 8.00016 14.6667C4.32016 14.6667 2.0735 10.96 2.0735 10.96M2.0735 10.96H5.08683M2.0735 10.96V14.2933M1.3335 8.00001C1.3335 4.32001 4.2935 1.33334 8.00016 1.33334C12.4468 1.33334 14.6668 5.04001 14.6668 5.04001M14.6668 5.04001V1.70668M14.6668 5.04001H11.7068" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>Refresh</a>
                </div>
                <div className="historytable">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className="tblheader">
                                        <p className="tblhead">id</p>
                                        <div className="arrows">
                                            <img src="\assets\upperarrow.svg" alt="innerarrow" className="innerarrow dark" />
                                            <img src="\assets\lowerarrow.svg" alt="innerarrow" className="innerarrow dark" />



                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="tblheader">
                                        <p className="tblhead">Assets</p>
                                        <div className="arrows">
                                            <img src="\assets\upperarrow.svg" alt="innerarrow" className="innerarrow dark" />
                                            <img src="\assets\lowerarrow.svg" alt="innerarrow" className="innerarrow dark" />

                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="tblheader">
                                        <p className="tblhead">Time</p>
                                        <div className="arrows">
                                            <img src="\assets\upperarrow.svg" alt="innerarrow" className="innerarrow dark" />
                                            <img src="\assets\lowerarrow.svg" alt="innerarrow" className="innerarrow dark" />

                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="tblheader">
                                        <p className="tblhead">Amount</p>
                                        <div className="arrows">
                                            <img src="\assets\upperarrow.svg" alt="innerarrow" className="innerarrow dark" />
                                            <img src="\assets\lowerarrow.svg" alt="innerarrow" className="innerarrow dark" />

                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="tblheader">
                                        <p className="tblhead">TRX hash</p>
                                        <div className="arrows">
                                            <img src="\assets\upperarrow.svg" alt="innerarrow" className="innerarrow dark" />
                                            <img src="\assets\lowerarrow.svg" alt="innerarrow" className="innerarrow dark" />

                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="tblheader">
                                        <p className="tblhead">Status</p>
                                        <div className="arrows">
                                            <img src="\assets\upperarrow.svg" alt="innerarrow" className="innerarrow dark" />
                                            <img src="\assets\lowerarrow.svg" alt="innerarrow" className="innerarrow dark" />

                                        </div>
                                    </div>
                                </th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="tbltd">
                                        <p className="serial">1</p>
                                    </div>
                                </td>

                                <td>
                                    <div className="tbltd">
                                        <p className="darktext">token name</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="tbltd">
                                        <p className="darktext">12/10/2023</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="tbltd">
                                        <p className="darktext">0.00</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="tbltd">
                                        <p className="darktext"> ydcycdydc
                                            <a target="_blank" href=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M6.66696 3.33334H5.46696C4.72022 3.33334 4.34658 3.33334 4.06136 3.47866C3.81048 3.60649 3.60665 3.81032 3.47882 4.0612C3.3335 4.34642 3.3335 4.72007 3.3335 5.4668V10.5335C3.3335 11.2802 3.3335 11.6534 3.47882 11.9386C3.60665 12.1895 3.81048 12.3937 4.06136 12.5215C4.3463 12.6667 4.71949 12.6667 5.46477 12.6667H10.5356C11.2808 12.6667 11.6535 12.6667 11.9384 12.5215C12.1893 12.3937 12.3938 12.1893 12.5216 11.9384C12.6668 11.6535 12.6668 11.2807 12.6668 10.5354V9.33334M13.3335 6.00001V2.66667M13.3335 2.66667H10.0002M13.3335 2.66667L8.66683 7.33334" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </a></p>
                                    </div>
                                </td>
                                <td>
                                    <div className="tbltd">
                                        <button className="statusbtn green">
                                            <img src="\assets\tick-circle.svg" alt="tick" />
                                            Success
                                        </button>
                                    </div>
                                </td>

                            </tr>



                        </tbody>
                    </table>
                </div>
                {/* mobileview */}
                <div className="accordionmobile d-none">
                    <h6 className="acchead">Chain</h6>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ethereum</Accordion.Header>
                            <Accordion.Body>

                                <div className="accinner">
                                    <p className="accinnerpara">id</p>
                                    <h6 className="accinnerhead">1</h6>
                                </div>
                                <div className="accinner">
                                    <p className="accinnerpara">Assets</p>
                                    <h6 className="accinnerhead">token</h6>
                                </div>
                                <div className="accinner">
                                    <p className="accinnerpara">Date</p>
                                    <h6 className="accinnerhead">12/10/2023</h6>
                                </div>
                                <div className="accinner">
                                    <p className="accinnerpara">Amount</p>
                                    <h6 className="accinnerhead">0.00 </h6>
                                </div>
                                <div className="accinner">
                                    <p className="accinnerpara">Status</p>
                                    <div className="tbltd">
                                        <button className="statusbtn green">
                                            <img src="\assets\tick-circle.svg" alt="tick" />
                                            Success</button>
                                    </div>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </section>
        </>
    )
}

export default Sendinghistory
