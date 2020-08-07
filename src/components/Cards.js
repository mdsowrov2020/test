import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from './images/seo.png';

//======================================== Home part start  =============================

export const Home_Banner_Left = (props) => {
  return (
    <div className='left'>
      <div className='left_inner_content all_header'>
        <h5>{props.heading}</h5>
        <h1>{props.title}</h1>
        <p>{props.pera}</p>
        <div className='all-button slide-btn'>
          <a href='#'>explore</a>
        </div>
      </div>
    </div>
  );
};

export const Home_Banner_Right = (props) => {
  return (
    <div className='right'>
      <img src={props.imgsrc} className='img-fluid animated' />
    </div>
  );
};

export const Card_Five = (props) => {
  return (
    <div className='col-md-4 col-sm-4 digital_main my-4'>
      <div className='digital_part   justify-content-center'>
        <div className='digital_image'>
          <img src={props.imgsrc} />
        </div>
        <div className='digital_text_content'>
          <h4>{props.title}</h4>
          <p>{props.pera}</p>
          <div className='all-button'>
            <Link className='nav-link dm' to='/services'>
              know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card_Six = (props) => {
  return (
    <div className='col-md-4  col-sm'>
      <div className='choose_inner m-1'>
        <div className='choose_image'>
          <img src={props.imgsrc} />
        </div>
        <div className='choose_text'>
          <h4>{props.title}</h4>
          <p>{props.pera}</p>
        </div>
      </div>
    </div>
  );
};

export const Card_Seven = (props) => {
  return (
    <div className='col-md-3 col-sm my-4'>
      <div className='card '>
        <div className='front'>
          <img src={props.imgsrc} />
        </div>
        <div className='back'>
          <div className='back-content '>
            <h4>{props.title}</h4>
            <a href={props.links_tw} target='_blank'>
              <i className='fab fa-twitter tw' title='Twitter'></i>
            </a>
            <a href={props.links_fb} target='_blank'>
              <i className='fab fa-facebook fb' title='Facebook'></i>
            </a>
            <a href={props.links_in} target='_blank'>
              <i className='fab fa-instagram in' title='Instagram'></i>
            </a>
            <a href={props.links_ln} target='_blank'>
              <i className='fab fa-linkedin-in ln' title='Linkedin'></i>
            </a>
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

export const Card_Two = (props) => {
  return (
    <div className='col-md-4 col-6 col-sm-4 px-2 my-2'>
      <div className='service_role_demo px-1'>
        <div className='service_role_demo_image'>
          <img src={props.imgsrc} />
        </div>
        <div className='service_role_demo_text'>
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
};

export const Card_Three = (props) => {
  return (
    <div className='col-md-3 col-6 col-sm-3 px-2 my-4'>
      <div className='data_demo px-1'>
        <div className='service_demo_image'>
          <img src={props.imgsrc} />
        </div>
        <div className='data_demo_text'>
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
};

export const Card_Nine_Left = (props) => {
  return (
    <>
      <div className='col-md-6 col-sm-6'>
        <div className='what_data_science'>
          <div className='what_data_science_content'>
            <h2>{props.l_title}</h2>
            <p>{props.l_pera}</p>

            <h4>
              <span>
                <i className='far fa-hand-point-right'></i>
              </span>
              {props.l_content_one}
            </h4>
            <h4>
              <span>
                <i className='far fa-hand-point-right'></i>
              </span>
              {props.l_content_two}
            </h4>
            <h4>
              <span>
                <i className='far fa-hand-point-right'></i>
              </span>
              {props.l_content_three}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export const Card_Nine_Right = (props) => {
  return (
    <>
      <div className='col-md-6 col-sm-6'>
        <div className='data_science_role'>
          <div className='data_science_role_content'>
            <h2>{props.r_title}</h2>
            <p>{props.r_pera}</p>

            <h4>
              <span>
                <i className='far fa-hand-point-right'></i>
              </span>
              {props.r_content_one}
            </h4>
            <h4>
              <span>
                <i className='far fa-hand-point-right'></i>
              </span>
              {props.r_content_two}
            </h4>
            <h4>
              <span>
                <i className='far fa-hand-point-right'></i>
              </span>
              {props.r_content_three}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
//======================================== Service part End  ============================

//======================================== Price part start  =============================

export const Price_Banner_Left = (props) => {
  return (
    <div className='price_header'>
      <div className='price_header_content all_header'>
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export const Price_Banner_Right = (props) => {
  return (
    <div className='price_image'>
      <img src={props.imgsrc} className='img-fluid animated' />
    </div>
  );
};

export const Card_Four = (props) => {
  return (
    <div className='col-md-4 col-sm-4  px-3 my-2'>
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
          <div className='all-button'>
            <Link className='nav-link dm' to='/contact'>
              Contact now
            </Link>
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
export const Portfolio_Banner_Left = (props) => {
  return (
    <div className='portfolio_header'>
      <div className='portfolio_header_content all_header'>
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export const Portfolio_Banner_Right = (props) => {
  return (
    <div className='portfolio_image'>
      <img src={props.imgsrc} className='img-fluid animated' />
    </div>
  );
};

export const Portfolio_Content = (props) => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'></div>
      </div>
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
      <img src={props.imgsrc} className='img-fluid animated' />
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
