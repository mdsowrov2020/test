import React, { Component } from 'react';
import { Footer } from '../components/Footer';
import { Card } from './Cards';
import ServiceBanner from './images/service.jpg';
import {
  Card_Two,
  Card_Three,
  Card_Nine_Left,
  Card_Nine_Right,
  Service_Banner_Left,
  Service_Banner_Right,
} from './Cards';
import {
  Sdata,
  Sdata_Two,
  Sdata_Three,
  Sdata_Nine_Left,
  Sdata_Nine_Right,
  Service_Banner_Left_Data,
  Service_Banner_Right_Data,
} from './Data';

export class Service extends Component {
  render() {
    return (
      <>
        {/* <section
          className='service_image'
          style={{ backgroundImage: `url(${require('./images/service.jpg')})` }}
        ></section> */}
        <section className='mobile_height  d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 order-1 order-lg-1 d-flex align-items-center'>
                {Service_Banner_Left_Data.map((val, index) => {
                  return (
                    <Service_Banner_Left key={index} heading={val.heading} />
                  );
                })}
              </div>
              <div className='col-lg-6 order-2 order-lg-2'>
                {Service_Banner_Right_Data.map((val, index) => {
                  return (
                    <Service_Banner_Right key={index} imgsrc={val.imgsrc} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className='d-flex align-items-center py-5'>
          <div className='container'>
            <div className='row justify-content-center mt-4'>
              {Sdata.map((val, index) => {
                return (
                  <Card
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

        <div className='service_role_svg py-5'>
          <section className='py-5 service_role_section'>
            <div className='container'>
              {/* <div className='row justify-content-center'>
                <div className='col-lg-6 text-center'>
                  <div className='service_role_header'>
                    <h2>Digital Marketing</h2>
                    <p>
                      <sup>"</sup>The best marketing doesn't feel like
                      marketing.<sup>"</sup>
                    </p>
                    <p>-Tom Fishburne</p>
                  </div>
                </div>
              </div> */}
              <div className='row justify-content-center'>
                <div className='col-lg-4 text-left'>
                  <div className='service_role'>
                    <div className='service_role_content'>
                      <h2>The Role of Digital Marketing</h2>
                      <p>
                        We are utilizing all of the digial marketing channels to
                        get the best outcome
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='row justify-content-center'>
                    {Sdata_Two.map((val, index) => {
                      return (
                        <Card_Two
                          key={index}
                          imgsrc={val.imgsrc}
                          title={val.title}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='py-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <div className='data_header'>
                  <h2>Data Science & Analytics</h2>
                  <p>
                    <sup>"</sup>Without big data analytics, companies are blind
                    and deaf, wandering out onto the web like deer on a freeway.
                    <sup>"</sup>
                  </p>
                  <p>-Geoffrey Moore</p>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {Sdata_Three.map((val, index) => {
                return (
                  <Card_Three
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div className='what_data_svg'>
          <section className='py-5 what_data_section'>
            <div className='container'>
              <div className='row justify-content-center'>
                {Sdata_Nine_Left.map((val, index) => {
                  return (
                    <Card_Nine_Left
                      key={index}
                      l_title={val.l_title}
                      l_pera={val.l_pera}
                      l_content_one={val.l_content_one}
                      l_content_two={val.l_content_two}
                      l_content_three={val.l_content_three}
                      r_title={val.r_title}
                      r_pera={val.r_pera}
                      r_content_one={val.r_content_one}
                      r_content_two={val.r_content_two}
                      r_content_three={val.r_content_three}
                    />
                  );
                })}

                {Sdata_Nine_Right.map((val, index) => {
                  return (
                    <Card_Nine_Right
                      key={index}
                      r_title={val.r_title}
                      r_pera={val.r_pera}
                      r_content_one={val.r_content_one}
                      r_content_two={val.r_content_two}
                      r_content_three={val.r_content_three}
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
