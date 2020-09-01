import gql from "graphql-tag";

const CONTACTS_QUERY=gql`
query footer_query {
 contacts{
  Email
  Phone
}
 }`;

export default CONTACTS_QUERY;
