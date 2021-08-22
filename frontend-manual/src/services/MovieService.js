import axios from 'axios';

export default class MovieService {
  static async getMovies() {
    const res = await axios.get('http://localhost:8000/api/v1/movies');
    return res.data;
  }

  static async getRatings() {
    const res = await axios.get('http://localhost:8000/api/v1/movies/ratings');
    return res.data;
  }
}
