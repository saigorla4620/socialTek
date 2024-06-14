import React from 'react'
import './style.css'
const Plans = () => {
    return (
        <>
            <div className='container plans text-center my-5'>
                <h1 className='fs-5 heading1' style={{ color: '#C741FC' }}>THE BOT YOUR CUSTOMERS LOVE TO ENGAGE !!</h1>
                <h1 className='heading2' style={{ fontSize: '50px', fontWeight: 'bolder' }}>No Hidden Charges! Choose Your <br /> Plan.</h1>
            </div>
            <div className="my-5 py-5">
                <div className="row justify-content-center gap-2">
                    <div className="card-plan p-4 text-white col-12 col-md col-lg" style={{ background: '#782FEF', maxWidth: '24rem',borderRadius:'20px' }}>
                        <div className="card-body text-center">
                            <p className="card-title">Basic</p>
                            <p>One bot</p>
                            <h1 className='price'>FREE</h1>
                            <div className="pricing-features">
                                <h6 className='feature'>Lead Generation Bot (or) Any Data Collection Bot</h6>
                                <h6 className='feature'>Number of Bots : 1</h6>
                                <h6 className='feature'>No Advanced Customization</h6>
                                <h6 className='feature'>1000 Chat Messages/Month</h6>
                            </div>
                            <button type="button" className="btn"><span className="button-content">Get Started</span></button>
                        </div>
                    </div>
                    <div className="card-plan p-4 text-white col-12  col-md col-lg" style={{ background: '#92C747', maxWidth: '24rem',borderRadius:'20px' }}>
                        <div className="card-body text-center">
                            <p className="card-title">Startup Pack</p>
                            <p>Upto 5 bots</p>
                            <h1 className='price'>INR 1500 /m</h1>
                            <div className="pricing-features">
                                <h6 className='feature'>Lead Generation Bot (or) Any Data Collection Bot</h6>
                                <h6 className='feature'>Number of Bots : 1</h6>
                                <h6 className='feature'>No Advanced Customization</h6>
                                <h6 className='feature'>1000 Chat Messages/Month</h6>
                            </div>
                            <button type="button" className="btn"><span className="button-content">Upgrade Plan</span></button>
                        </div>
                    </div>
                    <div className="card-plan p-4 text-white col-12 col-md col-lg" style={{ background: '#FF379D', maxWidth: '24rem',borderRadius:'20px' }}>
                        <div className="card-body text-center">
                            <p className="card-title">Premium</p>
                            <p>Up to 50 Bots</p>
                            <h1 className='price'>INR 5000 /m</h1>
                            <div className="pricing-features">
                                <h6 className='feature'>Lead Generation Bot (or) Any Data Collection Bot</h6>
                                <h6 className='feature'>Number of Bots : 1</h6>
                                <h6 className='feature'>No Advanced Customization</h6>
                                <h6 className='feature'>1000 Chat Messages/Month</h6>
                            </div>
                            <button type="button" className="btn"><span className="button-content">Upgrade Plan</span></button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Plans