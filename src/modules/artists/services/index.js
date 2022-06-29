import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTIST_URL;
  }

  getArtists() {
    return this.get("", undefined, undefined);
  }
}

export default ArtistAPI;
