import React from 'react';
import RawCode from '../RawCode';
import { DigitalMarketting } from '../../Data';
import Social from '../../images/social.jpg';
// import Digital from './images/data.jpg';
// import WebDesign from './images/web_design.jpg';
// import WebDev from './images/web_dev.jpg';
// import Android from './images/android_dev.jpg';
// import Flutter from './images/flutter.jpg';

export default function DigitalMarket(props) {
  return (
    <div>
      {DigitalMarketting.map((val, index) => {
        return (
          <RawCode
            imgsrc={Social}
            title={val.title}
            description={val.description}
            projects={val.projects}
            project_name={val.project_name}
            url={val.url}
            url_name={val.url_name}
          />
        );
      })}
    </div>
  );
}
