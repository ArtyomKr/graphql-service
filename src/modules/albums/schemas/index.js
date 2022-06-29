import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    albums: [Album]!
  }

  type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
`;

export default typeDefs;