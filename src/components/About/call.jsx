import React from 'react'
import './aboutus.css'
const Call = () => {
    return (
        <section className="ftco-intro py-5 " style={{marginTop:'70px'}}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10  justify-content-space-around">
                        <div className="row g-lg-5 callt align-items-center">
                            <div className="col-md-7 text-lg-right question">
                                <h1 className="mb-0" style={{fontWeight:'1400'}}>Have a Question?</h1>
                                <p>Call Us 1 (800) 216 20 20</p>
                            </div>
                            <div className="col-md-5 border-left d-flex align-items-center callr">
                                <form className="subscribe-form">
                                    <div className="form-group d-flex align-items-center">
                                        <button className='btn btn border border-1 rounded-pill p-3  '>Request Call Back</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Call
