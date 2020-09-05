import gql from "graphql-tag";

const DS_DETAIL_QUERY=gql`
query ds_detailed_query
  {
    portfolioDetail(id:"2"){
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

export default DS_DETAIL_QUERY;
