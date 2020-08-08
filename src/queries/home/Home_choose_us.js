import gql from "graphql-tag";

const HOME_CHOOSE_QUERY=gql`
query HOME_MID_QUERY {
   home {
     Choose_us_for{
    ...on ComponentChooseWhyChooseUs { id Header Description imgsrc {url} }
  }
   }
 }`;

export default HOME_CHOOSE_QUERY;
