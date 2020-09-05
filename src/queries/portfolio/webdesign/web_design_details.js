import gql from "graphql-tag";

const WEB_DESIGN_DETAIL_QUERY=gql`
query web_design_details_query
  {
    portfolioDetail(id:"5"){
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

export default WEB_DESIGN_DETAIL_QUERY;
