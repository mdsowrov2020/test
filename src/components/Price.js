import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import {
  Card_Four,
  Card_Eight,
  Price_Banner_Left,
  Price_Banner_Right,
} from './Cards';
import {
  Sdata_Four,
  Sdata_Eight,
  Price_Banner_Left_Data,
  Price_Banner_Right_Data,
} from './Data';
import { render } from '@testing-library/react';

export class Price extends Component {
  render() {
    return (
      <>
        <section className='mobile_height d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 order-2 order-lg-1  d-flex align-items-center'>
                {Price_Banner_Left_Data.map((val, index) => {
                  return (
                    <Price_Banner_Left key={index} heading={val.heading} />
                  );
                })}
              </div>
              <div className='col-lg-6  order-1 order-lg-2'>
                {Price_Banner_Right_Data.map((val, index) => {
                  return <Price_Banner_Right key={index} imgsrc={val.imgsrc} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <div className='container'>
            <div className='row justify-content-center pb-5'>
              <div className='col-lg-6 text-center'>
                <div className=' price_digital_header'>
                  <h2>Digital Marketing Services</h2>
                  <p>
                    We are utilizing all of the digial marketing channels to get
                    the best outcome
                  </p>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {Sdata_Eight.map((val, index) => {
                return (
                  <Card_Eight
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    pera={val.pera}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <div className='set_svg'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#012534'
              fillOpacity='1'
              d='M0,256L120,229.3C240,203,480,149,720,149.3C960,149,1200,
                203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
          <section className='py-5 price_bg'>
            <div className='container'>
              <div className='row justify-content-center pb-5'>
                <div className='col-lg-6 text-center'>
                  <div className='price_role_header'>
                    <h2>Digital Marketing plans</h2>
                    <p>
                      The world of marketing is changing. Marketing is shifting
                      from TV to online. We are here to take your digital
                      marketing effort to next level.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center'>
                {Sdata_Four.map((val, index) => {
                  return (
                    <Card_Four
                      key={index}
                      title_one={val.title_one}
                      imgsrc={val.imgsrc}
                      title_two={val.title_two}
                      pera_one={val.pera_one}
                      pera_two={val.pera_two}
                      pera_three={val.pera_three}
                      pera_four={val.pera_four}
                      pera_five={val.pera_five}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
