import React, { Component } from 'react';
import { Footer } from '../components/Footer';
import { Card } from './Cards';
import ServiceBanner from './images/service.jpg';
import {
  Card_Two,
  Card_Three,
  Card_Nine_Left,
  Card_Nine_Left_Content,
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
import Query from '../components/Query';
import SERVICE_BANNER_QUERY  from '../queries/services/Service_page_banner_left';
import SERVICE_CARD_QUERY  from '../queries/services/Services_card';
import SERVICE_LCARD_QUERY from '../queries/services/services_lcard';
import DATA_SCIENCE_ANALYTICS_QUERY from '../queries/services/Services_lower_mid';
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
              <Query query={SERVICE_BANNER_QUERY} id={null}>
              {({ data: { service } }) => {
                var list=[];
                list.push(service);
                return(
                  <div>
                {list.map((val, index) => {
                  return (
                    <Service_Banner_Left
                    key={index}
                    heading={val.banner_header}
                    description={val.banner_description}
                    />
                  );
                })}
                </div>
              );
            }}
                </Query>
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
            <Query query={SERVICE_CARD_QUERY}>
            {({ data: { service } }) => {
              return(
                <div className="row container">
              {service.Services_card.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.Logo.url}
                    title={val.Title}
                    pera={val.Description}
                  />
                );
              })}
              </div>
            );
          }}
          </Query>
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
                <Query query={DATA_SCIENCE_ANALYTICS_QUERY} id={null}>
                {({ data: { service } }) => {
                  var list=[];
                  list.push(service);
                  return(
                    <div className="row container">
                  {list.map((val, index) => {
                    return (
                      <div key={index} className="container">
                      <h2>{val.lower_mid_header}</h2>
                      <p>
                        <sup>{val.lower_mid_description}</sup>

                      </p>
                      </div>
                    );

                  })}
                  </div>
                );
              }}
              </Query>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
            <Query query={SERVICE_LCARD_QUERY} id={null}>
            {({ data: { service } }) => {
              return(
                <div className="row container">
              {service.l_card.map((val, index) => {
                return (
                  <Card_Three
                    key={index}
                    imgsrc={val.imgsrc.url}
                    title={val.Header}
                    pera ={val.Description}
                  />
                );
              })}
              </div>
            );
          }}
          </Query>
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
