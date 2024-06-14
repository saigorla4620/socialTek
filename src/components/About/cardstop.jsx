import React from 'react';
import './aboutus.css'

const CardsTop = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center' style={{marginTop:'1px'}}>
      <div className='card-group gap-5 text-center d-flex flex-wrap justify-content-center'>
        <div className='cardc p-5 border border-1  rounded text-center my-3'>
          <div className='card-body' style={{}}>
            <h4 className='card-title' style={{fontSize:'24px',marginBottom:'10px',fontWeight:'900'}}><i className="bi bi-book mx-1" style={{color:'gray',fontWeight:'170'}}></i> New Classes</h4>
            <p className="premove"  style={{color:'gray'}}>In the history of <br/>modern astronomy, <br/>there is probably no one greater leap <br/>forward.</p>
          </div>
        </div>
        <div className='cardc p-5 border border-1 border-red rounded my-3'>
          {/* <img src="https://i0.wp.com/socialtek.in/wp-content/uploads/2020/04/about-team2-3.jpg?fit=362%2C420&ssl=1" className='card-img' alt="Wayne Thompson" /> */}
          <div className='card-body'>
            <h4 className='card-title ' style={{fontSize:'24px',marginBottom:'10px',fontWeight:'900'}}><i className="bi bi-trophy mx-1" style={{color:'gray',fontWeight:'170'}}></i> Top Courses</h4>
            <p className="premove" style={{color:'gray'}}>In the history of <br/>modern astronomy, <br/>there is probably no one greater leap <br/>forward.</p>
          </div>
        </div>
        <div className='cardc p-5 border border-1 border-red rounded my-3'>
          {/* <img src="https://i0.wp.com/socialtek.in/wp-content/uploads/2020/05/about-team-03@2x.jpg?fit=724%2C840&ssl=1" className='card-img' style={{height:'420px'}} alt="Isaiah Schmidt" /> */}
          <div className='card-body '>
            <h4 className='card-title' style={{fontSize:'24px',marginBottom:'10px',fontWeight:'900'}}><i className="bi bi-laptop mx-1"style={{color:'gray',fontWeight:'170'}}></i> Full E-Books</h4>
            <p className="premove"  style={{color:'gray'}}>In the history of <br/>modern astronomy, <br/>there is probably no one greater leap <br/>forward.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsTop;
