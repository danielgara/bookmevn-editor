<template>
  <div class="card">
    <div class="card-header">
      Movie Results
    </div>
    <div class="card-body">
      <!-- form control -->
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <input id="title" class="form-control" placeholder="Search by title">
          </div>
        </div>
        <div class="col">
          <div class="d-flex">
          <select class="form-select">
            <option selected>Select by Rating</option>
            <option v-for="rating in ratings" :key="rating" :value="rating">
              {{ rating }}
            </option>
          </select> <a class="btn btn-primary ms-4">Filter</a>
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
              <p class="card-text">Rating: {{ movie.rated }}</p>
              <p class="card-text">{{ movie.plot }}</p>
              <a class="btn btn-primary">View Reviews</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Movies',
  data() {
    return {
      movies: [
        {
          _id: '3',
          title: 'Matrix',
          poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
          rated: 'AG',
          plot: 'Best movie',
        },
        {
          _id: '3',
          title: 'Matrix',
          poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
          rated: 'AG',
          plot: 'Best movie',
        },
        {
          _id: '3',
          title: 'Matrix',
          poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
          rated: 'AG',
          plot: 'Best movie',
        },
        {
          _id: '3',
          title: 'Matrix',
          poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
          rated: 'AG',
          plot: 'Best movie',
        },
      ],
      ratings: ['AO', 'G', 'GP'],
    };
  },
};
</script>

<style>
.card-body{
  text-align: left;
}
</style>
