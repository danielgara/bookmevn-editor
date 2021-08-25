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
            <a class="btn btn-primary"> Add Reviews </a>
          </div>

          <hr />

          <h3>Reviews</h3>
          <ul class="list-group">
            <li class="list-group-item pb-3 pt-3" v-for="review in movie.reviews" :key="review._id">
              <h5 class="card-title">Review by {{ review.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ review.date }}</h6>
              <p class="card-text">{{ review.review }}</p>
              <a href="#" class="btn btn-primary me-2">Edit</a>
              <a href="#" class="btn btn-primary">Delete</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieService from '../services/MovieService';

export default {
  name: 'Movies',
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
  },
};
</script>

<style scoped>
.card-body{
  text-align: left;
}
</style>
