import React from 'react';
import RawCode from '../RawCode';
import { DigitalMarketting } from '../../Data';
import Social from '../../images/social.jpg';
// import Digital from './images/data.jpg';
// import WebDesign from './images/web_design.jpg';
// import WebDev from './images/web_dev.jpg';
// import Android from './images/android_dev.jpg';
// import Flutter from './images/flutter.jpg';
import Query from '../../Query';
import DM_DETAIL_QUERY from '../../../queries/portfolio/digital_marketing/dm_details';

export default function DigitalMarket(props) {
  return (
    <div>
    <Query query={DM_DETAIL_QUERY} id={null}>
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
