import gql from "graphql-tag";

const SERVICE_BANNER_QUERY=gql`
query service_query {
  service{
  id
  banner_header
  banner_description
   }
 }`;
export default SERVICE_BANNER_QUERY;
