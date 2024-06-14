import React from 'react'

const Map = () => {
  return (
    <>
    <div className='map' style={{padding:"100px",width:"100%"}}>
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2759050259633!2d78.40058967462932!3d17.494337999716354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91250044b665%3A0xb7e3966f79f87bca!2ssocial%20prachar!5e0!3m2!1sen!2sin!4v1717580246034!5m2!1sen!2sin"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

    </div>
    </>
  )
}

export default Map
