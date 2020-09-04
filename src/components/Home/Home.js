import React, { Component, useEffect } from 'react';
import {
  HomeSecondSection,
  Card_Six,
  Team,
  Home_Banner,
  Home_Banner_Right,
} from '../Cards';
import {
  HomeSecondSectionData,
  Sdata_Six,
  Home_Banner_Left_Data,
  Home_Banner_Right_Data,
} from '../Data';
import { Link } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';

//---------Queries---------
import Query from '../Query';
import KEY_PEOPLE_QUERY from '../../queries/home/key_people';
import HOME_BANNER_QUERY from '../../queries/home/Home_page_banner_left';
import HOME_MID_QUERY from '../../queries/home/Home_mid_section';
export const Home = () => {
  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 420, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 4 },
];
  const heading ="Information Technology Agency";
  return (
    <>
      {/* Banner part start */}
      <Query query={HOME_BANNER_QUERY} id={null}>

        {({ data: { home } }) => {
          var list=[];
          list.push(home);
         return (
           <div>
           {list.map((item, i) => {
            return(
          <Home_Banner
            key={i}
            heading={heading}
            title={item.banner_header}
            pera={item.banner_description}
          />
        );
      })}
      </div>
    );
  }}
  </Query>
      {/* Banner part end */}

      {/* Second content start */}
      <section className='py-5 home_second_section'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-6'>
              <div className='header_text'>
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
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {HomeSecondSectionData.map((val, index) => {
              return (
                <HomeSecondSection
                  key={index}
                  link={val.link}
                  icon={val.icon}
                  title={val.title}
                  pera={val.pera}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Second content end */}
      <div>
        {/* <section className='choose_main'>
          <div className='choose_inner_main'>
            <div className='container'>
              <div className='row justify-content-center text-center '>
                <div className='col-lg-6'>
                  <div className='header_text custom_choose_header'>
                    <h2>Why choose us?</h2>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center pt-3'>
                {Sdata_Six.map((val, index) => {
                  return (
                    <Card_Six
                      key={index}
                      icon={val.icon}
                      title={val.title}
                      pera={val.pera}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}
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
          <Query query={KEY_PEOPLE_QUERY} id={null}>
          {({ data: { keyPeople } }) => {
            return(
              <div className='row container justify-content-center'>
                <Carousel breakPoints={breakPoints} showArrows={true}>
            {keyPeople.map((val,index) => {
              return (
                <Team
                  key={index}
                  imgsrc={val.imgsrc.url}
                  title={val.name}
                  subtitle={val.role}
                  links_tw={val.twitter}
                  links_fb={val.facebook}
                  links_ln={val.linkedin}
                />
              );
            })}
                </Carousel>
            </div>
          );
        }}
        </Query>
          </div>
        </div>
      </section>
    </>
  );
};
