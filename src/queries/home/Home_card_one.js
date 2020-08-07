import gql from "graphql-tag";

const HOME_CARD_ONE_QUERY=gql`
query Home_card_one {
   home {
     card{
    ...on ComponentCardCard{id Header Description}
  }
   }
 }`;

export default HOME_CARD_ONE_QUERY;
