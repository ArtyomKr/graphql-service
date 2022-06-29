const resolvers = {
  Query: {
    artists: (_, __, { dataSources }) => {
      return dataSources.artistAPI.getArtists();
    },
  }
};

export default resolvers;