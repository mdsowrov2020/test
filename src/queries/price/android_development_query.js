import gql from "graphql-tag";

const ANDROID_DEVELOPMENT_PRICE_QUERY=gql`
query android_development_query {
   pricing(id:"5") {
     Plans{
    ...on ComponentPricingPlansPlans{ id Package imgsrc { id url } Description Amount}
  }
   }
 }`;

export default ANDROID_DEVELOPMENT_PRICE_QUERY;
