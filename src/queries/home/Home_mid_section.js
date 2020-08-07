import gql from "graphql-tag";
const HOME_MID_QUERY=gql`
query Mid_section {
   home {
     mid_section_header
     mid_section_description
   }
 }
 `;

export default HOME_MID_QUERY;
