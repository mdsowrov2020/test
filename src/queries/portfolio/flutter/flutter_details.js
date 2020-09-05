import gql from "graphql-tag";

const FLUTTER_DETAIL_QUERY=gql`
query flutter_details_query
  {
    portfolioDetail(id:"4"){
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

export default FLUTTER_DETAIL_QUERY;
