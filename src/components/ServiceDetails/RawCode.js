import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function RawCode(props) {
  return (
    <div>
      <section className="container-fluid">
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 my-2'>
              <div>
                <p>
                  <img src={props.imgsrc} className="img-fluid" alt="Responsive image"></img>
                </p>
              </div>
            </div>
            <div className='col-md-4 my-2'>
              <div className='recent_work'>
                <div className='recent_work_content'>
                  <h4>
                    Completed Projects: <span>{props.projects}</span>
                  </h4>
                  <h4>
                    Recent Project:
                    <span> {props.project_name}</span>
                  </h4>
                  <h4>
                    Project URL:{' '}
                    <span>
                      <a href={props.url} target='_blank'>
                        {props.url_name}
                      </a>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className='col-md-2 my-2'>
              <div className='other_portfolio'>
                <h5 className='other_services'>Other Services</h5>
                <h5>
                  <Link to='/digitalMarket'>Digital Marketing</Link>
                </h5>
                <h5>
                  <Link to='/dataScience'>Data Science</Link>
                </h5>
                <h5>
                  <Link to='/webDev'>Web Development</Link>
                </h5>
                <h5>
                  <Link to='/webDesign'>Web Design</Link>
                </h5>
                <h5>
                  <Link to='/Androids'>Android Development</Link>
                </h5>
                <h5>
                  <Link to='/Flutter'>Flutter Development</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row content'>
          <div className='col-md-7 my-2'>
              <div className='service_details_content'>
                <h4 className='pt-3'>{props.title}</h4>
                <p>{props.description}</p>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}
