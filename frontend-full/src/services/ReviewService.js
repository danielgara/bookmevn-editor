import axios from 'axios';

export default class ReviewService {
  static async getReviews() {
    const res = await axios.get('http://localhost:5000/api/v1/movies');
    return res.data;
  }
}
