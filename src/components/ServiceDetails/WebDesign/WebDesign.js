import React from 'react';
import RawCode from '../RawCode';
import { WebDesignData } from '../../Data';
import WebDesigns from '../../images/web_design.jpg';
import WebDev from '../../images/web_dev.jpg';
import Android from '../../images/android_dev.jpg';
import Flutter from '../../images/flutter.jpg';
export default function WebDesign(props) {
  return (
    <div>
      {WebDesignData.map((val, index) => {
        return (
          <RawCode
            imgsrc={WebDev}
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
