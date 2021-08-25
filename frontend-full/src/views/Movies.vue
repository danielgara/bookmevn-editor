<template>
  <div class="card">
    <div class="card-header">
      Movie Results
    </div>
    <div class="card-body">
      <!-- form control -->
      <div class="row mb-3">
        <div class="col">
          <div class="d-flex">
            <input v-model="titleToSearch" class="form-control" placeholder="Search by title">
            <a v-on:click="filterMovies('title')" class="btn btn-primary ms-4">Search</a>
          </div>
        </div>
        <div class="col">
          <div class="d-flex">
          <select v-model="ratingToSearch" class="form-select">
            <option disabled selected value="">Select by Rating</option>
            <option v-for="rating in ratings" :key="rating" :value="rating">
              {{ rating }}
            </option>
          </select> <a v-on:click="filterMovies('rated')" class="btn btn-primary ms-4">Filter</a>
          </div>
        </div>
      </div>
      <!-- form control -->

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="movie in movies" class="col" :key="movie._id">
          <div class="card">
            <img v-if="movie.poster" class="card-img-top" :src="movie.poster" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ movie.title }}</h5>
              <p v-if="movie.rated" class="card-text">Rating: {{ movie.rated }}</p>
              <p class="card-text">{{ movie.plot }}</p>
              <router-link :to="'/movie/'+movie._id" class="btn btn-primary">
                View Reviews
              </router-link>
            </div>
          </div>
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
      movies: [],
      ratings: [],
      filterType: '',
      titleToSearch: '',
      ratingToSearch: '',
      query: '',
    };
  },
  created() {
    this.getMovies();
    this.getRatings();
  },
  methods: {
    async getRatings() {
      this.ratings = await MovieService.getRatings();
    },
    async getMovies() {
      const moviesData = await MovieService.getMovies();
      this.movies = moviesData.movies;
    },
    async filterMovies(type) {
      this.filterType = type;
      if (this.filterType === 'title') {
        this.query = this.titleToSearch;
      } else {
        this.query = this.ratingToSearch;
      }
      const moviesData = await MovieService.getMovies(this.query, this.filterType);
      this.movies = moviesData.movies;
    },
  },
};
</script>

<style scoped>
.card-body{
  text-align: left;
}
</style>
