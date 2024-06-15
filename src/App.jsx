import Aboutus from './components/About/aboutus'
import Home from './components/Home/Homee'
import OurServices from './components/Services/ourServices'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Test from './components/Contact/test'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/socialtek" element={<Home/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
