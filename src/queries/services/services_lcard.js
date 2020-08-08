import gql from "graphql-tag";

const SERVICE_LCARD_QUERY=gql`
query Service_lcardquery {
  service {
  id
   l_card{
     ...on ComponentCardCard{id imgsrc { url } Header Description}
   }
 }
}
`;
export default SERVICE_LCARD_QUERY;
