import React from 'react';
import RawCode from '../RawCode';
import { FluttersData } from '../../Data';

import Android from '../../images/android_dev.jpg';
import Flutter from '../../images/flutter.jpg';
export default function FlutterService(props) {
  return (
    <div>
      {FluttersData.map((val, index) => {
        return (
          <RawCode
            imgsrc={Flutter}
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
