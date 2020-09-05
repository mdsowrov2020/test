import React from 'react';
import RawCode from '../RawCode';
import { DataScienceData } from '../../Data';
import Query from '../../Query';
import DS_DETAIL_QUERY from '../../../queries/portfolio/datascience/datascience_details';

export default function DataScience(props) {
  return (
    <div>
    <Query query={DS_DETAIL_QUERY} id={1}>
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
