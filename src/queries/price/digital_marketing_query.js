import gql from "graphql-tag";

const DIGITAL_PRICE_QUERY=gql`
query digital_price_query {
   pricing(id:"1") {
     Plans{
    ...on ComponentPricingPlansPlans{ id Package imgsrc { id url } Description Amount}
  }
   }
 }`;

export default DIGITAL_PRICE_QUERY;
