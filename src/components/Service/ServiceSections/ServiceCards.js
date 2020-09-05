import React from 'react';
import '../ServiceSections/servicecard.css';

export const Web = (props) => {
  return (
    <>
      <div className='col-md-3 my-3 col-6'>
        <div className='webs'>
        <span></span>
       <span></span>
       <span></span>
       <span></span>
          <div className='web_icon'>
            <h2>{props.icon}</h2>
          </div>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
};

export const Mobile = (props) => {
  return (
    <>
      <div className='col-md-3 my-3 col-6'>
        <div className='mobile'>
        <span></span>
       <span></span>
       <span></span>
       <span></span>
          <div className='mobile_icon'>
            <h2>{props.icon}</h2>
          </div>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
};
