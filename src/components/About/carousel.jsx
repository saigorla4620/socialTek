import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import './aboutus.css'
const Slider = () => {
    return (
        <div className='trainer-area' style={{ marginTop: '100px' }}>
            <div className="container">
                <div className='trainer  row align-items-center'>
                    <div className='col-lg-5 t-content text-white'>
                        <h1 style={{ fontSize: '45px', fontWeight: '900' }}>Watch Our Trainers in Live Action</h1>
                        <p className='ttp'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
                    </div>
                    <div id="carouselExampleInterval" className="carousel text-white slide offset-lg-1 col-lg-5 col-xl-6" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <img src="https://preview.colorlib.com/theme/eclipse/img/video-img.jpg.webp" className='t-img' width={640} height={360} />
                            </div>
                            <div className="carousel-item " data-bs-interval="1000">
                                <img src="https://img.freepik.com/premium-photo/illustration-man-sitting-desk-with-computer-laptop_988987-7907.jpg?w=740" className='t-img' width={640} height={360} />
                            </div>
                            <div className="carousel-item" data-bs-interval="1000">
                                <img src="https://preview.colorlib.com/theme/academia/images/about.jpg.webp" className='t-img' width={640} height={360} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon prev" aria-hidden="true"></span>
                            {/* <span className="visually-hidden">Previous</span> */}
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            {/* <span className="visually-hidden">Next</span> */}
                        </button>
                        <h4 className='th'>Learn Angular js Course for Legendary Persons</h4>
                        <div>
                            <p className='tp'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slider