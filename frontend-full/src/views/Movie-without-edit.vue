<template>
  <div class="card">
    <div class="card-header">
      {{ movie.title }}
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <img v-if="movie.poster" class="card-img-top" :src="movie.poster" />
        </div>
        <div class="col">
          <p class="card-text">{{ movie.plot }}</p>
          <div>
            <!-- <a class="btn btn-primary"> Add Reviews </a> -->
            <AddReview
              v-if="$store.state.user.id"
              :movieId="movie._id"
              @update-movie-info="getMovie"
            />
          </div>

          <hr />

          <h3>Reviews</h3>
          <ul class="list-group">
            <li class="list-group-item pb-3 pt-3" v-for="review in movie.reviews" :key="review._id">
              <h5 class="card-title">Review by {{ review.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ getFormattedDate(review.date) }}</h6>
              <p class="card-text">{{ review.review }}</p>
              <a v-if="verifyAuthorship(review.user_id)"
                 v-on:click="deleteReview(review._id)"
                 class="btn btn-danger"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment';
import MovieService from '../services/MovieService';
import AddReview from '../components/AddReview.vue';
import ReviewService from '../services/ReviewService';

export default {
  name: 'Movies',
  components: {
    AddReview,
  },
  data() {
    return {
      movie: {
        poster: '',
        title: '',
        rated: '',
        plot: '',
        _id: '',
        reviews: [],
      },
    };
  },
  created() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const movieData = await MovieService.getMovie(this.$route.params.id);
      this.movie = movieData;
    },
    getFormattedDate(date) {
      return moment(date).format('Do MMMM YYYY');
    },
    verifyAuthorship(reviewUserId) {
      if (this.$store.state.user.id && this.$store.state.user.id === reviewUserId) {
        return true;
      }
      return false;
    },
    async deleteReview(reviewId) {
      const data = {
        user_id: this.$store.state.user.id,
        review_id: reviewId,
      };
      await ReviewService.deleteReview(data);
      this.getMovie();
    },
  },
};
</script>

<style scoped>
.card-body{
  text-align: left;
}
</style>
