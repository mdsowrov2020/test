import React from 'react';
import { Link } from 'react-router-dom';
export default function PriceCommonCard(props) {
  return (
    <>
      <div className='col-md-4 col-sm-4  px-3 my-2'>
        <div className='price_main_content text-center'>
          <div className='price_left_inner price_common'>
            <div className='price_basic_head'>
              <h4>{props.heading}</h4>
            </div>
            <div className='price_content_image'>
              <img src={props.imgsrc} />
            </div>
            <div className='price_text_content text-center'>
              <h2>
                <sup>$</sup>
                {props.price}
                <span>
                  <sub>/month</sub>
                </span>
              </h2>
              <p>{props.service_one}</p>
              <p>{props.service_two}</p>
              <p>{props.service_three}</p>
              <p>{props.service_four}</p>
              <p>{props.service_five}</p>
            </div>
            <div className='all-button'>
              <Link className='nav-link dm' to='/contact'>
                Contact now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
