import React from 'react'
import Map from './map';
import Form from './form';
import { Layout } from 'antd';
import Section1 from './section_1';
import Navbar from '../Home/Navbar';
import Footer_comp from '../Home/Footer';
import './contact.css'
const Test = () => {
  return (
    <Layout className='label'>
      <Navbar/>
      <div className='banner'>
        <Section1 />
      </div>
      <Map />
      <Form />
      <Footer_comp/>

    </Layout>

  )
}

export default Test
