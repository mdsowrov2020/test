import React, { Component } from 'react';

import { Card } from '../Cards';
import { Web, Mobile } from '../Service/ServiceSections/ServiceCards';

import ServiceBanner from '../Service/ServiceBanner';
import {
  DigitalMarket,
  DataScience,
  Card_Nine_Left,
  Card_Nine_Right,
  Service_Banner_Left,
  Service_Banner_Right,
} from '../Cards';

import {
  Sdata,
  DigitalMarketData,
  WebData,
  MobileData,
  DataScienceServiceData,
  Sdata_Nine_Left,
  Sdata_Nine_Right,
  Service_Banner_Left_Data,
  Service_Banner_Right_Data,
  DigitalMarketting,
} from '../Data';

export class Service extends Component {
  render() {
    return (
      <>
        <ServiceBanner />

        <section className='service_role_section py-5'>
          <div className='container'>
            <div className='row '>
              <div className='col-md-8'>
                <div className='service_role'>
                  <div className='service_role_content'>
                    <h4> Digital Marketing</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {DigitalMarketData.map((val, index) => {
                return <DigitalMarket icon={val.icon} title={val.title} />;
              })}
            </div>
          </div>
        </section>

        <section className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 text-left'>
                <div className='data_header'>
                  <h4>Data Science & Analytics</h4>
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
              {DataScienceServiceData.map((val, index) => {
                return (
                  <DataScience key={index} icon={val.icon} title={val.title} />
                );
              })}
            </div>
          </div>
        </section>

        {/* Web part start */}
        <section className='pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='web_section_head'>
                  <h4>Web Development</h4>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {WebData.map((val, index) => {
                return <Web icon={val.icon} title={val.title} />;
              })}
            </div>
          </div>
        </section>

        {/* Mobile part start */}
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='web_section_head'>
                  <h4>Mobile App Development</h4>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {MobileData.map((val, index) => {
                return <Mobile icon={val.icon} title={val.title} />;
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
