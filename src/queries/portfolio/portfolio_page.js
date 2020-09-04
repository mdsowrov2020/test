import gql from "graphql-tag";

const PORTFOLIO_PAGE_QUERY=gql`
query portfolio_page_query {
   portfolio{
      id
      Title
    	Description
   }
 }`;

export default PORTFOLIO_PAGE_QUERY;
