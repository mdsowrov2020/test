import gql from "graphql-tag";

const FOOTER_QUERY=gql`
query footer_query {
  footer{
    id
    Description
    footer_contacts{
      ...on ComponentFooterContactsFooterContacts {id Phone Email}
    }
    fb_url
    yt_url
    in_url
  }
}`;

export default FOOTER_QUERY;
