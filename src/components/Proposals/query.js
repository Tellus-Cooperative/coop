import {gql} from '@apollo/client';

export const allProposals = gql`
query MyQuery($cooperative:String!) {
    Proposals(where: {cooperative: {_eq: $cooperative}}){
      title
      status
      description
      cooperative
      public_id
    }
  }
  
  
`

export const searchProposals = gql`
query MyQuery ($title: String!) {
  Proposals(where: {title: {_ilike: $title}}) {
    title
      status
      description
      cooperative
      public_id
  }
}
`