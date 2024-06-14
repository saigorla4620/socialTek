import React from 'react'
import './style.css'
const Testimonials = () => {
    return (
        <div>
            <div className='courousel-bg  d-flex align-items-center justify-content-center'>
                <div className='overlay'></div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner text-white text-center">
                        <div className="carousel-item active my-5" data-bs-interval="1000">
                        <img src="./src/assets/about-team2.webp" className="img-about" alt="..." width={120} height={120}/>
                            <h5 className="name fw-bolder">Shiva</h5>
                            <div className="position">Senior Developer,Gap</div>
                            <div className="comments my-3">"SocialTek delivers impressive quality results at cost-effective prices and consistently meets deadlines. They are also transperant and proactive in their communication."</div>
                        </div>
                        <div className="carousel-item my-5" data-bs-interval="1000">
                        <img src="./src/assets/about-team1.webp" className="img-about" alt="..." width={120} height={120}/>
                            <h5 className="name fw-bolder">David</h5>
                            <div className="position">CEO,HclTech Pvt ltd</div>
                            <div className="comments my-3">"They really dug deep to understand our industry and Customrneeds. They are truly engaged and always up for the New Challenge"</div>
                        </div>
                        <div className="carousel-item my-5" data-bs-interval="1000">
                        <img src="./src/assets/about-team3.webp" className="img-about" alt="..." width={120} height={120}/>
                            <h5 className="name fw-bolder">Steve Harrington</h5>
                            <div className="position">CEO,Overthink Pvt ltd</div>
                            <div className="comments my-3">SocialTek helped us in Doubling our Sales of our IT Products with Innovative AI Technologies, We are very happy to associate with SocialTek</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testimonials