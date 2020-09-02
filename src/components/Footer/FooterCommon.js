import React from 'react';
import './footer.css';
const FooterCommon = (props) => {
  return (
    <>
    
      <section className='pt-5 footer_bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-3 my-2'>
              <div className='footer_logo_content'>
                <div className='footer_title_text mt-1'>
                  <h4>{props.title}</h4>
                  <p className='mt-3'>{props.details}</p>
                </div>
              </div>
            </div>
            <div className='col-md-3 my-2'>
              <div className='footer_service_content'>
                <div className='footer_service_heading'>
                  <h4>{props.footer_service_heading}</h4>
                </div>
                <div className='footer_services'>
                  <ul>
                    <li>
                      <a href='#'>Digital Marketing</a>
                    </li>
                    <li>
                      <a href='#'>Data Science</a>
                    </li>
                    <li>
                      <a href='#'>App Development</a>
                    </li>
                    <li>
                      <a href='#'>Web Design</a>
                    </li>
                    <li>
                      <a href='#'>Web Development</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='footer_quick_link'>
                <div className='footer_quick_heading'>
                  <h4>{props.footer_quick_headin}</h4>
                </div>
                <ul>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Service</a>
                  </li>
                  <li>
                    <a href='#'>Price</a>
                  </li>
                  <li>
                    <a href='#'>Portfolio</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3 my-2'>
              <div className='contact_us_content text-left'>
                <div className='contact_footer_heading'>
                  <h4>{props.contact_footer_heading}</h4>
                </div>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-10'>
                    <div className='phone_num'>
                      <ul>
                        <li>
                          <span>
                            <i class='fas fa-phone phone'></i>
                          </span>
                          <a href='#'>{props.num1}</a>
                        </li>
                        {/* <li>
                          <span>
                            <i class='fas fa-phone phone'></i>
                          </span>
                          <a href='#'>{props.num2}</a>
                        </li> */}
                        {/* <li>
                          <span>
                            <i class='fas fa-phone phone'></i>
                          </span>
                          <a href='#'>{props.num3}</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='row d-flex align-items-center '>
                  <div className='col-md-10'>
                    <div className='email'>
                      <ul>
                        <li>
                          <span>
                            <i class='far fa-envelope envelop'></i>
                          </span>
                          <a href='#'>{props.footer_imail}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='row justify-content-between d-flex align-items-center'>
            <div className='col-md-6'>
              <div className='footer_copyright'>
                <p>
                  @ 2020 Copyright: <span>somikoronits.com</span>
                </p>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div className='footer_social'>
                <ul>
                  <li>
                    <a href='#'>
                      <i class='fab fa-facebook-f footer_fb'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fab fa-instagram ins'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fab fa-youtube ytb'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterCommon;
