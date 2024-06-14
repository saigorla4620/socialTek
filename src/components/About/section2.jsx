import React from 'react'
import './aboutus.css'
const Section2 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card mb-3" style={{ maxWidth: "1000px" }} >
        <div className="row g-0">
          <div className="imga col-md-4">
            <img src='https://preview.colorlib.com/theme/academia/images/about.jpg.webp' className="img rounded-start imgsec" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body mx-5">
              <h1 className="card-title benefits fw-5" style={{ fontSize: '50px', fontWeight: 'bold' }}>
                Benefits About Online Learning Expertise</h1>
              <div className="cards ">
                <div className="card-body">
                  <h4>Online Courses</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-body">
                  <h4>Earn A Certificates</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
              <div className="cards">

                <div className="card-body">
                  <h4>Learn with Expert</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section2
