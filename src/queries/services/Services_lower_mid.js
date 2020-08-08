import gql from "graphql-tag";

const DATA_SCIENCE_ANALYTICS_QUERY=gql`
query Service_lcardquery {
  service {
  id
  lower_mid_header
  lower_mid_description
 }
}
`;
export default DATA_SCIENCE_ANALYTICS_QUERY;
