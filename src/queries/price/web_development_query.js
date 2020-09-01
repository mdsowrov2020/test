import gql from "graphql-tag";

const WEB_DEVELOPMENT_PRICE_QUERY=gql`
query web_development_query {
   pricing(id:"4") {
     Plans{
    ...on ComponentPricingPlansPlans{ id Package imgsrc { id url } Description Amount}
  }
   }
 }`;

export default WEB_DEVELOPMENT_PRICE_QUERY;
