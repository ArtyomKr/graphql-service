import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }
`;

export default typeDefs;