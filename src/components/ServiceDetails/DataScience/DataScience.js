import React from 'react';
import RawCode from '../RawCode';
import { DataScienceData } from '../../Data';

export default function DataScience(props) {
  return (
    <div>
      {DataScienceData.map((val, index) => {
        return (
          <RawCode
            imgsrc={val.imgsrc}
            title={val.title}
            description={val.description}
          />
        );
      })}
    </div>
  );
}
