import React from 'react';
import RawCode from '../RawCode';
import { WebDevData } from '../../Data';
import Query from '../../Query';
import WEBDEV_DETAIL_QUERY from '../../../queries/portfolio/web_development/web_dev_details';

export default function WebDev(props) {
  return (
    <div>
    <Query query={WEBDEV_DETAIL_QUERY} id={null}>
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
