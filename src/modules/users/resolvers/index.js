const resolvers = {
  Query: {
    albums: (_, __, { dataSources }) => {
      return dataSources.albumAPI.getAlbums();
    },
  },
  // Album: {
  //   albumById: ({ authorId }, _, { dataSources }) => {
  //     return dataSources.albumAPI.getAlbumById(authorId);
  //   },
  // },
};

export default resolvers;