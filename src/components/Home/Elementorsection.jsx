import React, { useEffect, useRef } from 'react'
import './style.css'
const Elementorsection = () => {
    return (
        <>
            <div className='container'>
                <div className='elementor-section row gap-5'>
                    <div className="eimg col-12 col-md col-lg-5 col-xl-5 mb-4 mb-md-0">
                        <img src="https://vdigtech.com/wp-content/uploads/2024/03/about_home01-TELVHCF.jpg" alt="About Us Image"  />
                    </div>
                    <div className="econtent col-12 col-md col-lg-6 col-xl-6">
                        <div className="heading d-flex align-items-center mb-2">
                            <span className='arrow me-2'>&#8640;</span>
                            <h3 className='ml-2' style={{fontWeight:'bolder',color:'#C741FC'}}>Why Choose Us</h3>
                        </div>
                        <div className="title mb-4 ">
                            <h1 className='mb-4'>Establish Your Business’s Online Presence🥇</h1>
                            <p className='fs-5'>Improve your business website’s online presence with the unique integration of digital marketing features. Show up your online strength to achieve your virtual goal.</p>
                        </div>
                        <div>
                            <div className="elementor-item d-flex align-items-center gap-2 mb-4" >
                                <div className="elementoricon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle" style={{ width: '30px', height: '30px' }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill='#C741FC'></path>
                                    </svg>
                                </div>
                                <div className="text">
                                    <h1 className="h5">White-Hat SEO Technique</h1>
                                </div>
                            </div>
                            <div className="elementor-item d-flex align-items-center gap-2 mb-3" >
                                <div className="elementoricon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle" style={{ width: '30px', height: '30px' }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill='#C741FC'></path>
                                    </svg>
                                </div>
                                <div className="text">
                                    <h1 className="h5">Social Media Marketing & Advertisement</h1>
                                </div>
                            </div>
                            <div className="elementor-item d-flex align-items-center gap-2 mb-3" >
                                <div className="elementoricon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle" style={{ width: '30px', height: '30px' }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill='#C741FC'></path>
                                    </svg>
                                </div>
                                <div className="text">
                                    <h1 className="h5">Organic Content Strategy</h1>
                                </div>
                            </div>
                            <div className="elementor-item d-flex align-items-center gap-2 mb-3" >
                                <div className="elementoricon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle" style={{ width: '30px', height: '30px' }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill='#C741FC'></path>
                                    </svg>
                                </div>
                                <div className="text">
                                    <h1 className="h5">Real Time Report</h1>
                                </div>
                            </div>
                            <div className="elementor-item d-flex align-items-center gap-2 mb-3">
                                <div className="elementoricon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle" style={{ width: '30px', height: '30px' }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill='#C741FC'></path>
                                    </svg>
                                </div>
                                <div className="text">
                                    <h1 className="h5">Analytics and Market Research</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Elementorsection