import Companies from './Companies'
import Elementorsection from './Elementorsection'
import Header from './Header'
import Plans from "./Plans"
import Testimonials from "./Testimonials"
import Trainers from './Trainers'
import Navbar from "./Navbar"
import Footer_comp from './Footer'
import './style.css'
const Home = () => {
    return (
        <div className='main' id='home'>
            <Navbar/>
            <Header />
            <Companies />
            <Trainers/>
            <Plans />
            <Elementorsection/>
            <Testimonials />
            <Footer_comp/>
        </div>
    )
}

export default Home