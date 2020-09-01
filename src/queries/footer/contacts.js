import gql from "graphql-tag";

const CONTACTS_QUERY=gql`
query Home_query {
 contacts{
  Email
  Phone
}
 }`;

export default CONTACTS_QUERY;
