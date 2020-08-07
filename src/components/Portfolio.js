import React, { Component, useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import 'magnific-popup';
import { Button, Modal } from 'react-bootstrap';
import {
  Portfolio_Banner_Left,
  Portfolio_Banner_Right,
  Portfolio_Content,
} from './Cards';
import {
  Portfolio_Banner_Left_Data,
  Portfolio_Banner_Right_Data,
  Portfolio_Content_Data,
  Video_Data,
} from './Data';
import $ from 'jquery';
import mixitup from 'mixitup';

export const Portfolio = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    var containerEl = document.querySelector('.project_main');

    var mixer = mixitup(containerEl);
    $('.filtering').on('click', '.control', function () {
      $(this)
        .addClass('control-active')
        .siblings()
        .removeClass('control-active');
    });

    $(document).ready(function () {
      $('.video-popup').magnificPopup({ type: 'iframe' });
    });
  }, []);

  return (
    <>
      <section className=' mobile_height d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 order-1 order-lg-1  d-flex align-items-center'>
              {Portfolio_Banner_Left_Data.map((val) => {
                return <Portfolio_Banner_Left heading={val.heading} />;
              })}
            </div>
            <div className='col-lg-6 order-2 order-lg-2'>
              {Portfolio_Banner_Right_Data.map((val) => {
                return <Portfolio_Banner_Right imgsrc={val.imgsrc} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id='video'
        class='py-5'
        style={{ backgroundImage: `url(${require('./images/seo.png')})` }}
      >
        <div class='container'>
          <div class='row justify-content-center video-icon'>
            {Video_Data.map((val) => {
              return (
                <a class='video-popup' href={val.video}>
                  <i class='fab fa-youtube'></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <div className='portfolio_svg'>
        <section className=' mt-5 portfolio_section'>
          {/* <svg className="portfolio_main_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,69.3C672,96,768,160,864,165.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
          <div className='container'>
            <div className='row filtering text-center justify-content-center pb-3 my-3'>
              <ul className='filter_bg'>
                <li className='control mx-1 control-active' data-filter='all'>
                  All
                </li>
                <li className='control mx-1' data-filter='.digital_marketing'>
                  Digital <span> Marketing</span>
                </li>
                <li className='control mx-1' data-filter='.data_science'>
                  Data<span>Science</span>
                </li>
                <li className='control mx-1' data-filter='.web'>
                  Web<span>Design</span>
                </li>
              </ul>
            </div>

            <div className='row project_main justify-content-center'>
              <div className='col-md-3 col-6 my-1 px-1 mix digital_marketing'>
                <div className='project_image'>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_dm_one} className='img-fluid' />;
                  })}
                  <div className='overlay' onClick={handleShow}>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix digital_marketing'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_dm_two} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix digital_marketing'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_dm_three} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix data_science'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_ds_one} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix data_science'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_ds_two} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix data_science'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_ds_three} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix web'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_web_one} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-6 my-1 px-1 mix web'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_web_two} className='img-fluid' />;
                  })}
                  <div className='overlay'>
                    <span className='click'>
                      <i class='fa fa-link' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yes, We’ll Work With You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Send us your requirements we will happy to discuss with you in detail
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
