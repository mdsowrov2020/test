import gql from "graphql-tag";

const HOME_CARD_ONE_QUERY=gql`
query Home_query {
   home {
     card{
    ...on ComponentCardCard{id imgsrc { url } Header Description}
  }
   }
 }`;

export default HOME_CARD_ONE_QUERY;
