import gql from "graphql-tag";

const ANDROID_DETAIL_QUERY=gql`
query android_detail_query
  {
    portfolioDetail(id:"1"){
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

export default ANDROID_DETAIL_QUERY;
