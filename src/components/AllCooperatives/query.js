import { gql } from "@apollo/client";


export const AllCooperatives = gql`
query MyQuery {
    Cooperatives {
        id
      title
      total_Members
    }
  }  
`


export const IncreaseTeamMember = gql`
mutation MyMutation ($id:uuid!){
    update_Cooperatives_by_pk(pk_columns: {id: $id} _set:{
      total_Members:3
    }) {
      title
      total_Members
    }
  }
  
`