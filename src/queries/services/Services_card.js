import gql from "graphql-tag";

const SERVICE_CARD_QUERY=gql`
query Service_cquery {
  service {
    id
    Services_card {
      ... on ComponentServiceCardServiceCard {
        id
        Logo {
          url
        }
        Title
        Description
      }
    }
  }
}`;
export default SERVICE_CARD_QUERY;
