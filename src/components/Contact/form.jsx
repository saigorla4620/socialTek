import React from 'react'

const Form = () => {
  
  return (
   <>
   <div className='cont '>
     <div className='address'>
      <h1 style={{fontSize:"35px"}}>Feel Free To Contact <br></br> Us.</h1>
      <p>Utenim ad minim veniam quis nostrud exercitation llamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duisute irure dolor in reprehenderit.</p>
      <div style={{display:"flex"}}>
        <i className='bi bi-geo-alt'></i>
        <p>221B Baker Street, P. O Box 3<br></br>
        Park Road, USA - 215431</p>
        </div>
        <div  style={{display:"flex"}}>
        <i className='bi bi-chat-right-text'></i>
        <p>info@yourdomain.com <br></br>
        Send us your query anytime!</p>
        </div>
        <div  style={{display:"flex"}}>
        <i className='bi bi-headphones'></i>
        <p>+110.818.8074<br></br>
        Mon to Fri 9am to 6 pm</p>
        </div>
        
     </div>
     <div className='form-contact'>
      
      <h1 style={{fontSize:"35px"}}>Hello! We’ve Been Expecting You.</h1>
      <div className='contact-box'>
        <form action="">
        <input type="text" placeholder='Your Name' className='input-field' /><br></br>
        <input type="text" placeholder='Your Email' className='input-field'/><br></br>
        <input type="text" placeholder='Subject' className='input-field'/><br></br>
        <textarea type="text" className='textarea-field input-field' placeholder='Your Message' ></textarea><br></br>
        <button className='btn'>Send Message</button>
        </form>

      </div>
     
    
   
      </div>
  </div>
  </>
  )
}

export default Form
