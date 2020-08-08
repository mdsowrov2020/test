import gql from "graphql-tag";

const SERVICE_ROLES_QUERY=gql`
query Service_rquery {
  service {
    id
    Roles {
      ... on ComponentRolesRoles{
        id
        Header
        Description
      }
    }
  }
}
`;
export default SERVICE_ROLES_QUERY;
