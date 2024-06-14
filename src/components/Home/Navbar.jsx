import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import './style.css'
const Navbar = () => {
    const [expand, setExpand] = useState(false)
    const handleToggle = () => {
        setExpand(!expand)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black fixed-top py-3">
                <div className="container">
                    <img src="https://socialtek.in/wp-content/uploads/2020/05/SocialTek_Logo_Web.png" width={'180px'} height={'56px'} />
                    <button className="navbar-toggler text-white border border-white" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-center ${expand && 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 me-3 fs-5 text-center">
                            <li className="nav-item  mx-3" >
                                <Link className="nav-link active text-white" aria-current="page" to='/socialtek' href="#"  style={{color:'#C741FC'}}>Home</Link>
                            </li>
                            <li className="nav-item mx-3" >
                                <Link className="nav-link text-white" to='/about' href='#'>About Us</Link>
                            </li>
                            <li className="nav-item mx-3 ">
                                <Link className="nav-link text-white" to="/services" href="#">Services</Link>
                            </li>
                            <li className="nav-item mx-3 ">
                                <Link className="nav-link text-white" to="/contact" href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar