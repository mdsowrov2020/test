import gql from "graphql-tag";

const BLOG_DETAILS_QUERY=gql`
query bloglist_query {
  blogs{
    id
    Title
    created_at
    Description
    Attactments{
    ...on ComponentMediaAttachment {
      Files
    {
      ...on UploadFile { id url }
    }
    }
  }
}
}`;

export default BLOG_DETAILS_QUERY;
