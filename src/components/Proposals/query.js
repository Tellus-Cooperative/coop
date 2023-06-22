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