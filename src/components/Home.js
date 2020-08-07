import React, { Component } from 'react';
import {
  Card_Five,
  Card_Six,
  Card_Seven,
  Home_Banner_Left,
  Home_Banner_Right,
} from './Cards';
import {
  Sdata_Five,
  Sdata_Seven,
  Sdata_Six,
  Home_Banner_Left_Data,
  Home_Banner_Right_Data,
} from './Data';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import Query from '../components/Query';
import HOME_MID_QUERY from '../queries/home/Home_mid_section';
import HOME_BANNER_QUERY from '../queries/home/Home_page_banner_left';
import HOME_CARD_ONE_QUERY  from '../queries/home/Home_card_one';
export const Home = () => {
  return (
    <>
      <section className='mobile_height d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 order-1 order-lg-1 d-flex align-items-center '>
            <Query query={HOME_BANNER_QUERY} id={null}>
              {({ data: { home } }) => {
                var list=[];
                list.push(home);
               return (
                 <div>
                  {list.map((item, i) => {
                     return (
                       <div className='left'>
                         <div className='left_inner_content all_header'>
                           <h5>Digital Marketing Agency</h5>
                           <h1>{item.banner_header}</h1>
                           <p>{item.banner_description}</p>
                           <div className='all-button slide-btn'>
                             <a href='#'>explore</a>
                           </div>
                         </div>
                       </div>
            );
                })}
              </div>
            );
            }}
              </Query>
            </div>

            <div className='col-lg-6 order-2 order-lg-2'>
              {Home_Banner_Right_Data.map((val, index) => {
                return <Home_Banner_Right key={index} imgsrc={val.imgsrc} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Second content start */}
      <section className='py-5 home_second_section'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-6'>
              <div className='header_text'>
              {/*data comes*/}
                  <Query query={HOME_MID_QUERY} id={null}>
                    {({ data: { home } }) => {
                        var list=[];
                        list.push(home);
                        return (
                              <div>
                                {list.map((item, i) => {
                                   return (
                                    <div>
                                        <h2>{item.mid_section_header}</h2>
                                        <p>
                                          {item.mid_section_description}
                                        </p>
                                    </div>
                                        );
                                })}
                              </div>
              );
              }}
                  </Query>
              {/*data ends*/}
            </div>
            </div>
          </div>

          <div className='row justify-content-center pt-5'>
                  <Query query={ HOME_CARD_ONE_QUERY }>
                  {({ data: { home } }) => {
                    return(
                    <div>
                      {home.card.map((val, index) => {
                        return (
                          <Card_Five
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.Header}
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

      <div>
        <section className='choose_main'>
          <div className='choose_inner_main'>
            <div className='container'>
              <div className='row justify-content-center text-center '>
                <div className='col-lg-6'>
                  <div className='header_text custom_choose_header'>
                    <h2>Why choose us?</h2>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center pt-5'>
                {Sdata_Six.map((val, index) => {
                  return (
                    <Card_Six
                      key={index}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      pera={val.pera}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center text-center pb-5'>
            <div className='col-lg-6'>
              <div className='header_text'>
                <h2>Our team</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {Sdata_Seven.map((val, index) => {
              return (
                <Card_Seven
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  links_tw={val.links_tw}
                  links_fb={val.links_fb}
                  links_in={val.links_in}
                  links_ln={val.links_ln}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
