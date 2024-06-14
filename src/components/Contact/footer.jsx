import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Footer } = Layout;
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, InstagramFilled } from '@ant-design/icons';

const Footer_comp = () => {
  return (
    <Footer>
      <div className="footer">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={6} lg={4}>
            <div className="section">
              <h2>Top Products</h2>
              <p><a href="#">Managed Website</a></p>
              <p><a href="#">Power Tools</a></p>
              <p><a href="#">Manage Reputation</a></p>
              <p><a href="#">Power Tools</a></p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4}>
            <div className="section">
              <h2>Quick Links</h2>
              <p><a href="#">Managed Website</a></p>
              <p><a href="#">Power Tools</a></p>
              <p><a href="#">Manage Reputation</a></p>
              <p><a href="#">Power Tools</a></p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4}>
            <div className="section">
              <h2>Features</h2>
              <p><a href="#">Managed Website</a></p>
              <p><a href="#">Power Tools</a></p>
              <p><a href="#">Manage Reputation</a></p>
              <p><a href="#">Power Tools</a></p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4}>
            <div className="section">
              <h2>Resources</h2>
              <p><a href="#">Managed Website</a></p>
              <p><a href="#">Power Tools</a></p>
              <p><a href="#">Manage Reputation</a></p>
              <p><a href="#">Power Tools</a></p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>Stay updated with our latest news</p>
             <div className='input-group d-flex  inputbtn'>
             <input type="text" placeholder="Your Email Address" className="input " />
             <button className="btn" style={{marginBottom:"25px"}}>Subscribe</button>
             </div>
            </div>
          </Col>
        </Row>
        <div className="footer-last">
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={24} md={12}>
              <div className="copyright">
                <p>
                  Copyright ©2024 All rights reserved | This template is made with ❤️ by Colorlib
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className="icons">
                <FacebookFilled className='icon' />
                <LinkedinFilled className='icon' />
                <InstagramFilled className='icon' />
                <TwitterSquareFilled className='icon' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
}

export default Footer_comp;
