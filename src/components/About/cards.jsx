
import React from 'react';
import './aboutus.css'
const Cards = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center ' style={{marginTop:'70px'}}>
      <h1 className='text-center ' style={{ fontSize: '50px', fontWeight: 'bold',marginBottom:'20px' }}>Meet Our Creative <br />Powerhouse</h1>
      <div className='card-group gap-5 text-center d-flex flex-wrap justify-content-center'>
        <div className='cardc '>
          <img src="https://i0.wp.com/socialtek.in/wp-content/uploads/2020/04/about-team1-3.jpg?w=362&ssl=1" className='card-img' style={{height:'400px'}} alt="Arthur Douglas" />
          <div className='card-body' style={{}}>
            <h4 className='card-title' style={{fontSize:'24px',marginBottom:'10px'}}>Arthur Douglas</h4>
            <p className="pcard" style={{color:'gray'}}>Head of Marketing</p>
          </div>
        </div>
        <div className='cardc '>
          <img src="https://i0.wp.com/socialtek.in/wp-content/uploads/2020/04/about-team2-3.jpg?fit=362%2C420&ssl=1" className='card-img' style={{height:'400px'}} alt="Wayne Thompson" />
          <div className='card-body'>
            <h4 className='card-title'  style={{fontSize:'24px',marginBottom:'10px'}}>Wayne Thompson</h4>
            <p className='pcard' style={{color:'gray'}}>On Site Manager</p>
          </div>
        </div>
        <div className='cardc '>
          <img src="https://i0.wp.com/socialtek.in/wp-content/uploads/2020/05/about-team-03@2x.jpg?w=724&ssl=1" className='card-img' id='imgs3' style={{height:'400px'}} alt="Isaiah Schmidt" />
          <div className='card-body'>
            <h4 className='card-title'  style={{fontSize:'24px',marginBottom:'10px'}}>Isaiah Schmidt</h4>
            <p className='text-wraning pcard' style={{color:'gray'}}>Customer Relationship Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
