import React from 'react';
import BannerImage from '../images/priceCommonBanner.png';
import DspriceServiceTitle from '../Data';
export default function PriceCommonBanner(props) {
  return (
    <>
      <section className='priceCommonBanner'>
        <div className='priceCommonBannerInner'>
          <div className='container'>
            <div className='row justify-content-left d-flex align-items-center'>
              <div className='col-md-6'>
                <div className='priceCommonBannerHeading'>
                  <div className='service_title'>
                    <h4>{props.service_title}</h4>
                  </div>
                  <h2>
                    We will provide you the best service with the best pricing
                    plan
                  </h2>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='priceCommonBannerImage'>
                  <img src={BannerImage} className='animated'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#441d44'
          fill-opacity='1'
          d='M0,64L120,96C240,128,480,192,720,197.3C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
        ></path>
      </svg> */}
      <svg
        className='price_common_svg'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#385d77'
          fill-opacity='1'
          d='M0,0L80,53.3C160,107,320,213,480,240C640,267,800,213,960,213.3C1120,213,1280,267,1360,293.3L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        ></path>
      </svg>
    </>
  );
}
