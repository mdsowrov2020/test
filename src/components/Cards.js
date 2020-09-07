import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from './images/seo.png';
import ContactBanner from './images/contact.png';
import Carousel from 'react-elastic-carousel';

//======================================== Home part start  =============================

export const Home_Banner = (props) => {
  return (
    <section className='mobile_height d-flex align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 order-1 order-lg-1 d-flex align-items-center'>
            <div className='left'>
              <div className='left_inner_content all_header'>
                <h5>{props.heading}</h5>
                <h1>{props.title}</h1>
                <p>{props.pera}</p>
                <Link className='nav-link dm' to='/portfolio'>
                  <div className='all-button slide-btn'>
                    <a>
                      Learn More{' '}
                      <i
                        class='fa fa-angle-double-right home_btn_icon'
                        aria-hidden='true'
                      ></i>
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6 order-2 order-lg-2'>
            <div className='right'>
              <img src={HomeBanner} className='img-fluid animated' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomeSecondSection = (props) => {
  return (
    <div className='col-md-4 col-6 px-0  my-2'>
      <Link className='nav-link dm' to={props.link}>
        <div className='digital_part '>
          <div className='digital_icon'>
            <h3>{props.icon}</h3>
          </div>
          <div className='digital_text_content'>
            <h4>{props.title}</h4>
            <p>{props.pera}</p>
            <p className='price_hover'>
              Price
              <span>
                <i class='fas fa-long-arrow-alt-right'></i>
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const Card_Six = (props) => {
  return (
    <div className='col-md-4  col-sm'>
      <div className='choose_inner m-1'>
        <div className='choose_image'>
          <h3>{props.icon}</h3>
        </div>
        <div className='choose_text'>
          <h4>{props.title}</h4>
          <p>{props.pera}</p>
        </div>
      </div>
    </div>
  );
};

export const Team = (props) => {
  return (
    <div className='col-md-12 col-sm my-2'>
      <div className='team'>
        <div className='team_content'>
          <div className='team_image'>
            <img src={props.imgsrc} />
          </div>
          <div className='name'>
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
          </div>
          <div className='team_social'>
            <ul>
              <li>
                <a href={props.links_fb}>
                  <i class='fab fa-facebook-f tm_fb'></i>
                </a>
              </li>
              <li>
                <a href={props.links_ln}>
                  <i class='fab fa-linkedin tm_ins'></i>
                </a>
              </li>
              <li>
                <a href={props.links_tw}>
                  <i class='fab fa-twitter tm_tw'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

//======================================== Home part End  =============================

//======================================== Service part start==========================
export const Service_Banner_Left = (props) => {
  return (
    <div className='service_header'>
      <div className='service_header_content all_header'>
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export const Service_Banner_Right = (props) => {
  return (
    <div className='service_image'>
      <img src={props.imgsrc} className='animated' />
    </div>
  );
};

export const Card = (props) => {
  return (
    <div className='col-md-4 col-sm-4 px-2 my-4'>
      <div className='service_demo px-1'>
        <div className='service_demo_image'>
          <img src={props.imgsrc} />
        </div>
        <div className='service_demo_text'>
          <h4>{props.title}</h4>
          <p>{props.pera}</p>
        </div>
      </div>
    </div>
  );
};

export const DigitalMarket = (props) => {
  return (
    <div className='col-md-3 col-6  my-3'>
      <div className='service_role_demo px-1'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className='service_role_demo_image'>
          <h2>{props.icon}</h2>
        </div>
        <div className='service_role_demo_text'>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export const DataScience = (props) => {
  return (
    <div className='col-md-3 my-3 col-6'>
      <div className='data_sciences'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className='ds_icon'>
          <h2>{props.icon}</h2>
        </div>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

//======================================== Service part End  ============================

//======================================== Price part start  =============================

export const Price_Banner = (props) => {
  return (
    <section>
      <div className='price_banner d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='price_banner_text'>
                <h2>
                  We will provide you the best service with the best pricing
                  plan
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//=======================================PRICE CARD=================================//
export const Card_Four = (props) => {
  return (
    <div className='col-md-4  my-2'>
      <div className='price_main_content text-center'>
        <div className='price_left_inner price_common'>
          <div className='price_basic_head'>
            <h4>{props.title_one}</h4>
          </div>
          <div className='price_content_image'>
            <img src={props.imgsrc} />
          </div>
          <div className='price_text_content text-center'>
            <h2>
              <sup>$</sup>
              {props.title_two}
              <span>
                <sub>/month</sub>
              </span>
            </h2>
            <p>{props.pera_one}</p>
            <p>{props.pera_two}</p>
            <p>{props.pera_three}</p>
            <p>{props.pera_four}</p>
            <p>{props.pera_five}</p>
          </div>
          <div className='all-button pc price_btn_price'>
            {' '}
            //#ee0c81
            <Link className='nav-link dm' to='/contact'></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card_Eight = (props) => {
  return (
    <div className='col-md-4 col-sm-4 px-3'>
      <div className='price_digital_content my-2'>
        <div className='price_service_image'>
          <img src={props.imgsrc} />
        </div>
        <div className='price_digital_content_text'>
          <h4>{props.title}</h4>
          <p>{props.pera}</p>
        </div>
      </div>
    </div>
  );
};

//======================================== Price part End  =============================

// ======================================= Portfolio Part Start ========================

export const PortfolioMain = (props) => {
  return (
    <>
      <section className='mobile_height'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='portfolio_header'>
                <h2>{props.title}</h2>
              </div>
              <div className='port_details'>
                <p>{props.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const LatestProject = (props) => {
  return (
    <>
      <div className=''></div>
    </>
  );
};

//======================================== Blog part Start  =============================

export const Blog_Left = (props) => {
  return <div {...props}>{props.children}</div>;
};
export const Blog_Right = (props) => {
  return <div {...props}> {props.children}</div>;
};

//======================================== Blog part End  =============================

//======================================== Contact part Start  =============================

export const Contact_Left = (props) => {
  return (
    <div className='contact_left'>
      <img src={ContactBanner} className='img-fluid animated' />
    </div>
  );
};

//======================================== Contact part End  =============================

export const Footer_Content = (props) => {
  return (
    <div className='footer'>
      <h4>
        <span>
          <i className='fas fa-phone-alt'></i>
        </span>
        {props.phone}
      </h4>
      <a href={props.footer_tw} target='_blank'>
        <i className='fab fa-twitter tw' title='Twitter'></i>
      </a>
      <a href={props.footer_fb} target='_blank'>
        <i className='fab fa-facebook fb' title='Facebook'></i>
      </a>
      <a href={props.footer_in} target='_blank'>
        <i className='fab fa-instagram in' title='Instagram'></i>
      </a>
      <a href={props.footer_ln} target='_blank'>
        <i className='fab fa-linkedin-in ln' title='Linkedin'></i>
      </a>
    </div>
  );
};
