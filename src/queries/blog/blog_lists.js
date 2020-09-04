import gql from "graphql-tag";

const BLOG_LIST_QUERY=gql`
query bloglist_query {
  blogs{
    id
    Title
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

export default BLOG_LIST_QUERY;
