import React from 'react';
import RawCode from '../RawCode';
import { DigitalMarketting } from '../../Data';

export default function DigitalMarket(props) {
  return (
    <div>
      {DigitalMarketting.map((val, index) => {
        return (
          <RawCode
            imgsrc={val.imgsrc}
            title={val.title}
            description={val.description}
            projects={val.projects}
          />
        );
      })}
    </div>
  );
}
