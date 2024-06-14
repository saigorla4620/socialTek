import React from 'react'
import './style.css'
const Header = () => {
    return (
        <div className='home-banner ' >
            <div className="home-container row justify-content-center gap-5 flex-wrap">
                <div className="content text-white col-md-5 col-sm-12">
                    <h1 className='h1'>Decode the Future of <br />Digital Business</h1>
                    <p>Artificial Intelligence | Data Science | Bigdata | Cloud Computing</p>
                </div>
                <img src="https://img.freepik.com/premium-photo/illustration-man-sitting-desk-with-computer-laptop_988987-7907.jpg?w=740" alt="" className='header-img col-md-5 offset-md-1 col-sm-0 d-none d-md-block' width={450} height={300} />
            </div>
        </div>
    )
}

export default Header