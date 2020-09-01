import gql from "graphql-tag";

const DATA_SCIENCE_PRICE_QUERY=gql`
query digital_price_query {
   pricing(id:"3") {
     Plans{
    ...on ComponentPricingPlansPlans{ id Package imgsrc { id url } Description Amount}
  }
   }
 }`;

export default DATA_SCIENCE_PRICE_QUERY;
