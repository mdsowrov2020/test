import React from 'react';
import RawCode from '../RawCode';
import { WebDevData } from '../../Data';

export default function DigitalMarket(props) {
  return (
    <div>
      {WebDevData.map((val, index) => {
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
