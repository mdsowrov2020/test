import gql from "graphql-tag";

const DM_DETAIL_QUERY=gql`
query dm_detailed_query
  {
    portfolioDetail(id:"3"){
   	id
    title
    description
    projects
    project_name
    imgsrc{
     id url
    }
    url
    url_name
  }
 }`;

export default DM_DETAIL_QUERY;
