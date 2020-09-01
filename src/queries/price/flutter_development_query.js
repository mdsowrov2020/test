import gql from "graphql-tag";

const FLUTTER_DEVELOPMENT_PRICE_QUERY=gql`
query flutter_development_query {
   pricing(id:"6") {
     Plans{
    ...on ComponentPricingPlansPlans{ id Package imgsrc { id url } Description Amount}
  }
   }
 }`;

export default FLUTTER_DEVELOPMENT_PRICE_QUERY;
