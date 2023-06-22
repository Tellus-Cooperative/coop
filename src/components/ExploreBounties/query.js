import {gql} from '@apollo/client';

export const AllBounties = gql`
query MyQuery {
    AllBounties{
      bounty_description
      bounty_name
      payment_amount
      bounty_difficulty
      bounty_type
      bounty_topic
      public_address
    }
  }
  
`