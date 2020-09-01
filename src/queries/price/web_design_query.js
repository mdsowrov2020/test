import gql from "graphql-tag";

const WEB_DESIGN_PRICE_QUERY=gql`
query web_design_query {
   pricing(id:"2") {
     Plans{
    ...on ComponentPricingPlansPlans{ id Package imgsrc { id url } Description Amount}
  }
   }
 }`;

export default WEB_DESIGN_PRICE_QUERY;
