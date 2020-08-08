import gql from "graphql-tag";

const KEY_PEOPLE_QUERY=gql`
query Home_key_people_query {
  keyPeople{
  	  id
     	name
      role
      imgsrc{
        url
      }
    	facebook
    	linkedin
    	twitter
  }
}`;

export default KEY_PEOPLE_QUERY;
