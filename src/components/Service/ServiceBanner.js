import React from 'react';
import './service.css';
import Social from '../images/social.jpg';
import Digital from '../images/data.jpg';
import WebDesign from '../images/web_design.jpg';
import WebDev from '../images/web_dev.jpg';
import Android from '../images/android_dev.jpg';
import Flutter from '../images/flutter.jpg';
import Passport from '../images/passport.jpg';
import Digim from '../images/digital.png';
export default function ServiceBanner(props) {
  return (
    <>
      <section className='service_banner_mobile'>
        <div className='service_banner_image d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center d-flex align-items-center'>
              <div className='col-md-6'>
                <div className='sevice_banner_left_text text-left'>
                  <h2>Fully Digital Services</h2>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row justify-content-center'>
                <div className='service_banner_bg'>
                  <img src={Digim} className='img-fluid animated'></img>
                  </div>
                </div>
              </div>
            {/*  <div className='col-md-6'>
                <div className='row justify-content-center'>
                  <div className='col-md-4 col-6 py-2 px-2'>
                    <div className='hidden_content'>
                      <p>
                        <span>
                          <i class='fas fa-heart'></i> Digital
                        </span>
                        Marketing
                      </p>
                    </div>
                    <div className='service_banner_card_image'>
                      <img src={Social} className='img-fluid'></img>
                      <div className='service_banner_card_image_overlay'>
                        <p>Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-6 py-2 px-2'>
                    <div className='hidden_content'>
                      <p>
                        <span>
                          <i class='fas fa-heart'></i> Data
                        </span>
                        Science
                      </p>
                    </div>
                    <div className='service_banner_card_image'>
                      <img src={Digital}></img>
                      <div className='service_banner_card_image_overlay'>
                        <p>Data Science</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-6 py-2 px-2'>
                    <div className='hidden_content'>
                      <p>
                        <span>
                          <i class='fas fa-heart'></i> Web
                        </span>
                        Development
                      </p>
                    </div>
                    <div className='service_banner_card_image'>
                      <img src={WebDesign}></img>
                      <div className='service_banner_card_image_overlay'>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-6 py-2 px-2'>
                    <div className='hidden_content'>
                      <p>
                        <span>
                          <i class='fas fa-heart'></i> Web
                        </span>
                        Design
                      </p>
                    </div>
                    <div className='service_banner_card_image'>
                      <img src={WebDev}></img>
                      <div className='service_banner_card_image_overlay'>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-6 py-2 px-2'>
                    <div className='hidden_content'>
                      <p>
                        <span>
                          <i class='fas fa-heart'></i> Android
                        </span>
                        Development
                      </p>
                    </div>
                    <div className='service_banner_card_image'>
                      <img src={Android}></img>
                      <div className='service_banner_card_image_overlay'>
                        <p>Android Development</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-6 py-2 px-2'>
                    <div className='hidden_content'>
                      <p>
                        <span>
                          <i class='fas fa-heart'></i> Flutter
                        </span>
                        Development
                      </p>
                    </div>
                    <div className='service_banner_card_image'>
                      <img src={Flutter}></img>
                      <div className='service_banner_card_image_overlay'>
                        <p>Flutter Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
