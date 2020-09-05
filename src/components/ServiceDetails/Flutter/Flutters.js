import React from 'react';
import RawCode from '../RawCode';
import { FluttersData } from '../../Data';

import Android from '../../images/android_dev.jpg';
import Flutter from '../../images/flutter.jpg';
import Query from '../../Query';
import FLUTTER_DETAIL_QUERY from '../../../queries/portfolio/flutter/flutter_details';

export default function FlutterService(props) {
  return (
    <div>
    <Query query={FLUTTER_DETAIL_QUERY} id={null}>
    {({ data: { portfolioDetail } }) => {
      var list=[];
      list.push(portfolioDetail);
      return(
        <div>
      {list.map((val, index) => {
        let i=0;
        for(i in val.imgsrc){
        return (
          <RawCode
            imgsrc={val.imgsrc[i].url}
            title={val.title}
            description={val.description}
            projects={val.projects}
            project_name={val.project_name}
            url={val.url}
            url_name={val.url_name}
          />
        );
      }
      })}
    </div>
  );
  }}
  </Query>
  </div>
);
}
