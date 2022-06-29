import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
import { artistResolvers, ArtistAPI, artistSchema } from './modules/artists/index.js';

const PORT = process.env.PORT ?? '4000';

const server = new ApolloServer({
  typeDefs: artistSchema,
  artistResolvers,
  dataSources: () => {
    return {
      artistAPI: new ArtistAPI(),
    };
  },
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});