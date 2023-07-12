import { gql } from "@apollo/client";

export const submitProposal = gql`
mutation MyMutation($title : String!, $public_id: String!, $cooperative:String!,$description:String!,$discussion: String!) {
    insert_Proposals_one(object:{title: $title, public_id: $public_id, cooperative:$cooperative,description:$description,discussion:$discussion}){
      id
    }
  }
`;