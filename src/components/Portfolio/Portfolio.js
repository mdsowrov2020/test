import React, { Component, useEffect, useState } from 'react';

import 'magnific-popup';
import { Link, NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import {
  PortfolioMain,
  Portfolio_Banner_Right,
  Portfolio_Content,
} from '../Cards';
import {
  Portfolio_Banner_Left_Data,
  PortfolioMainData,
  Portfolio_Content_Data,
  Video_Data,
} from '../Data';
import $ from 'jquery';
import mixitup from 'mixitup';

import Query from '../Query';
import PORTFOLIO_PAGE_QUERY from '../../queries/portfolio/portfolio_page';
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
      $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
          markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

          patterns: {
            youtube: {
              index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

              id: 'v=',

              src: '//www.youtube.com/embed/%id%?autoplay=1', // URL that will be set as a source for iframe.
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1',
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed',
            },

            // you may add here more sources
          },

          srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        },
      });
    });
  }, []);

  return (
    <>
    <div>
    <Query query={PORTFOLIO_PAGE_QUERY} id={null}>
    {({ data: { portfolio } }) => {
      var list=[];
      list.push(portfolio);
      return(
        <div>
      {list.map((val, index) => {
        return (
          <PortfolioMain
            title= {val.Title}
            details={val.Description}
          />
        );
      })}
    </div>
  );
  }}
      </Query>
    </div>
      <div className='portfolio_svg'>
        <section className=' my-5 portfolio_section'>
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
                  Data<span> Science</span>
                </li>
                <li className='control mx-1' data-filter='.web'>
                  Web<span> Development</span>
                </li>
                <li className='control mx-1' data-filter='.app'>
                  App<span> Development</span>
                </li>
              </ul>
            </div>

            <div className='row project_main justify-content-center'>
              <div className='col-md-4 col-6 my-1 px-1 mix digital_marketing'>
                <div className='project_image'>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_dm_one} className='img-fluid' />;
                  })}
                  <div className='overlay_top d-flex align-items-center'>
                    <div className='service_name'>
                      <h4>Digital Marketing</h4>
                    </div>
                  </div>
                  <div className='overlay' onClick={handleShow}>
                    <div className='row justify-content-between'>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <i class='fas fa-plus'></i>
                        </span>
                      </div>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <Link to='/digitalMarket'>
                            <i class='fa fa-link' aria-hidden='true'></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-6 my-1 px-1 mix data_science'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_dm_two} className='img-fluid' />;
                  })}
                  <div className='overlay_top d-flex align-items-center'>
                    <div className='service_name'>
                      <h4>Data Science</h4>
                    </div>
                  </div>
                  <div className='overlay' onClick={handleShow}>
                    <div className='row justify-content-between'>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <i class='fas fa-plus'></i>
                        </span>
                      </div>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <Link to='/dataScience'>
                            <i class='fa fa-link' aria-hidden='true'></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-6 my-1 px-1 mix web'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_dm_three} className='img-fluid' />;
                  })}
                  <div className='overlay_top d-flex align-items-center'>
                    <div className='service_name'>
                      <h4>Web Development</h4>
                    </div>
                  </div>
                  <div className='overlay' onClick={handleShow}>
                    <div className='row justify-content-between'>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <i class='fas fa-plus'></i>
                        </span>
                      </div>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <Link to='/webDev'>
                            <i class='fa fa-link' aria-hidden='true'></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-6 my-1 px-1 mix web'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_ds_one} className='img-fluid' />;
                  })}
                  <div className='overlay_top d-flex align-items-center'>
                    <div className='service_name'>
                      <h4>Web Design</h4>
                    </div>
                  </div>
                  <div className='overlay' onClick={handleShow}>
                    <div className='row justify-content-between'>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <i class='fas fa-plus'></i>
                        </span>
                      </div>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <Link to='/webDesign'>
                            <i class='fa fa-link' aria-hidden='true'></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-6 my-1 px-1 mix app'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_ds_two} className='img-fluid' />;
                  })}
                  <div className='overlay_top d-flex align-items-center'>
                    <div className='service_name'>
                      <h4>Android Development</h4>
                    </div>
                  </div>
                  <div className='overlay' onClick={handleShow}>
                    <div className='row justify-content-between'>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <i class='fas fa-plus'></i>
                        </span>
                      </div>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <Link to='/Androids'>
                            <i class='fa fa-link' aria-hidden='true'></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-6 my-1 px-1 mix app'>
                <div className='project_image' onClick={handleShow}>
                  {Portfolio_Content_Data.map((val) => {
                    return <img src={val.img_ds_three} className='img-fluid' />;
                  })}
                  <div className='overlay_top d-flex align-items-center'>
                    <div className='service_name'>
                      <h4>Flutter</h4>
                    </div>
                  </div>
                  <div className='overlay' onClick={handleShow}>
                    <div className='row justify-content-between'>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <i class='fas fa-plus'></i>
                        </span>
                      </div>
                      <div className='col-md-6 col-6'>
                        <span className='click'>
                          <Link to='/Flutter'>
                            <i class='fa fa-link' aria-hidden='true'></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='video'
          class='py-5'
          style={{
            backgroundImage: `url(${require('../images/ocean_price.jpg')})`,
          }}
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
      </div>
    </>
  );
};
