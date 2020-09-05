import gql from "graphql-tag";

const WEBDEV_DETAIL_QUERY=gql`
query web_design_details_query
  {
    portfolioDetail(id:"6"){
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

export default WEBDEV_DETAIL_QUERY;
