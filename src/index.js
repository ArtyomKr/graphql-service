import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
import { albumResolvers, AlbumAPI, albumSchema } from './modules/albums/index.js';

const PORT = process.env.PORT ?? '4000';

const server = new ApolloServer({
  typeDefs: albumSchema,
  albumResolvers,
  dataSources: () => {
    return {
      albumAPI: new AlbumAPI(),
    };
  },
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});