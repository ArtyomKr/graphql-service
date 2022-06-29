import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    items: [Artist],
    limit: Int,
    offset: Int,
    total: Int
  }

  type Artist {
    id: ID!
    firstName: String
    secondName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: [String]
  }
`;

export default typeDefs;