import React from 'react';

export default function RawCode(props) {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='service_details_image'>
                <img src={props.imgsrc}></img>
              </div>
              <div className='service_details_content'>
                <h4 className='pt-3'>{props.title}</h4>
                <p>{props.description}</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='recent_work'>
                <div className='recent_work_content'>
                  <h4>
                    Completed Projects: <span>{props.projects}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
