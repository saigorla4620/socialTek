import React from 'react'
import './App.css'
import Navbar from '../Home/Navbar'
import Footer_comp from '../Home/Footer'
import { Link } from 'react-router-dom'
const OurServices = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid  aboutus'>
        <section className='banner'>
          <div className='container banner2'>
            <div className='row justify-content-center  align-items-center'>
              <div className='col-lg-12 banner-right text-right'>
                <h1 className='text-white abus' style={{ fontSize: '42px' }}>Services</h1>
                <p className='text-white' style={{ fontSize: '14px', marginTop: '20px', marginBottom: '20px' }}>In the history of modern time, there is probably no one greater leap forward than the building.</p>
                <div className="nav-link col-lg-12">
                  <span className='box'>
                    <Link href="" className='text-white anchor' to="/socialtek">Home</Link>
                    <i className="bi bi-arrow-right text-light mx-2" ></i>
                    <Link href="" className='text-white anchor' to="/services">Services</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="row text-center rows " style={{ marginTop: "150px", marginBottom: "110px" }}>
        <h1 className='fs-1 fw-bold ' >Konicy Has <br />Availability Across The Northeast.</h1>
        <p className='fs-4 fw-medium '>Enjoy fast internet, your favorite TV shows and digital phone service with <br />confidence. Because it's a 100% fiber-optic network, Fios delivers more reliable <br />service that's less susceptible to inclement weather.</p>
      </div>

      <div className="services" id='div'>
        <div className="div1 row align-items-center justify-content-center col-12 col-md-6 " >
          <div className="content col-md-6">
            <h1 className='text-center text-white'>Take a Look at  <br />Our Coverage Map.</h1>
          </div>
          <div className="list col-12 col-md-3 text-white">
            <div className="card-body" style={{ width: '200px' }}>
              <i className="bi bi-circle"></i> Albany, NY <br />
              <i className="bi bi-circle"></i>Newport News, <br />
              <i className="bi bi-circle"></i>Arlington, VA <br />
              <i className="bi bi-circle"></i> Washington, DC
            </div>
          </div>
          <div className="list col-12 col-md-3 text-white">
            <div className="card-body" style={{ width: '200px', }}>
              <i className="bi bi-circle"></i> District Columbia, DC <br />
              <i className="bi bi-circle"></i>Newport News, VA <br />
              <i className="bi bi-circle"></i>Massachusetts, <br />
              <i className="bi bi-circle"></i> West Virginia, WV
            </div>
          </div>
        </div>
      </div>
      <div className="service-items row align-items-center my-5" style={{ height: '500px', gap: '150px', margin: '0 100px' }} >

        <div className="high service-item  col-md" style={{ width: "300px", margin: "0 50px" }}><h3>High Speed Internet</h3>
          <p className='mt-4 '>Get a fast connection with Verizon High Speed Internet. It’s DSL, so you get a dedicated connection to your home from our central office for reliable performance. Getting Verizon High Speed Internet is easy.</p>
        </div>
        <div className="protoca service-item col-md" style={{ width: "300px", margin: "0 50px" }}><h3>Internet Protocol TV</h3>
          <p className='mt-4 '>Get a fast connection with Verizon High Speed Internet. It’s DSL, so you get a dedicated connection to your home from our central office for reliable performance. Getting Verizon High Speed Internet is easy.</p>
        </div>

      </div>
      <div className=" " style={{ height: '500px' }} id='social'>
        <div className='social row  align-items-center  justify-content-center ' style={{ gap: '50px', margin: "0 50px", height: '400px' }}>
          <div className="high col-md" style={{ width: "450px" }}>
            <p className='text-white fs-3 fw-bold text-center'>20,000+ Client <br />
              Be one of them today!</p>
          </div>
          <div className="protocal col-md" style={{ width: "450px" }}>
            <button id='btn' >Order Online</button>
          </div>

        </div>
      </div>
      <div className="" style={{ height: '350px' }} id='high'>
        <div className='row social align-items-center justify-content-center' style={{ gap: '50px', height: '350px', margin: '0 40px' }}>
          <div className="text-white col-md"  >
            <h2 className='fs-2 text-center'>Create Cool Websites</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nulla illum aliquid </p>
          </div>
          <div className="col-md">
            <div className="span-item">
              <span><input type="mail" placeholder='Enter Mail' className='inp' ></input>
                <button id='but'>subscribe</button></span>
            </div>
          </div>
        </div>
      </div>
      <Footer_comp />
    </>

  )
}

export default OurServices