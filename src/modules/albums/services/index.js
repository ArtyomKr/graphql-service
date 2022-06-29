import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUM_URL;
  }

  getAlbums() {
    return this.get();
  }

  getAlbumById(id) {
    return this.get('id');
  }

}

export default AlbumAPI;
