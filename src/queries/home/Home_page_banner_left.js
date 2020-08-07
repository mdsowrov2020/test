import gql from "graphql-tag";

const HOME_BANNER_QUERY=gql`
query Home_Banner_Left {
   home {
     banner_header
     banner_description
   }
 }`;

export default HOME_BANNER_QUERY;
