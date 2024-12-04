<template>
  <div>
    <!-- Header -->
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="/images/logo.png" alt="Logo" class="logo me-2" />
            CineQeest
          </a>
          <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <form class="d-flex" @submit.prevent="searchMovies">
              <input
                  class="form-control me-2"
                  type="search"
                  v-model="searchQuery"
                  placeholder="Search"
                  aria-label="Search"
              />
              <button class="btn btn-warning me-2" type="submit">Поиск фильма</button>
              <div class="dropdown me-2">
                <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    id="ratingDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  По рейтингу
                </button>
                <ul class="dropdown-menu" aria-labelledby="ratingDropdown">
                  <li><a class="dropdown-item" @click="sortByRating('desc')">По возрастанию</a></li>
                  <li><a class="dropdown-item" @click="sortByRating('asc')">По убыванию</a></li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    id="countryDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  Страна
                </button>
                <ul class="dropdown-menu" aria-labelledby="countryDropdown">
                  <li v-for="country in uniqueCountries" :key="country">
                    <a class="dropdown-item" @click="filterByCountry(country)">{{ country }}</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown me-2">
                <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    id="yearDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  Год
                </button>
                <ul class="dropdown-menu" aria-labelledby="yearDropdown">
                  <li v-for="year in uniqueYears" :key="year">
                    <a class="dropdown-item" @click="filterByYear(year)">{{ year }}</a>
                  </li>
                </ul>
              </div>
              <button class="btn btn-warning me-2" type="button" @click="resetFilters">Reset</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content container mt-5 pt-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
            class="col"
            v-for="film in paginatedFilms"
            :key="film.id"
        >
          <div class="card">
            <img
                v-if="film.link_img"
                :src="film.link_img"
                class="card-img-top"
                alt="film.link_img"
            />
            <img
                v-else
                src="https://m.media-amazon.com/images/M/MV5BYmQyYmU4MTgtNmFlZS00NzVhLTg0ZWEtMjgzZTIzMjg5MTcwXkEyXkFqcGdeQXVyMTk0NjM1ODQ@._V1_.jpg"
                class="card-img-top"
                alt="Default Image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ film.name }}</h5>
              <p class="card-text">Рейтинг: {{ film.ratingAvg }}</p>
              <p class="card-text">Длительность: {{ film.duration }} мин.</p>
              <p class="card-text">
                Жанры:
                <template v-for="category in film.categories" :key="category.id">
                  {{ category.name }}
                </template>
              </p>
              <button type="button" class="btn btn-info">Подробнее</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination justify-content-center">
          <li
              class="page-item"
              v-for="page in totalPages"
              :key="page"
              :class="{ active: page === currentPage }"
          >
            <button class="page-link" @click="currentPage = page">{{ page }}</button>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

export default {
  name: "MoviePage",
  setup() {
    const films = ref([]);
    const searchQuery = ref("");
    const sortOption = ref("");
    const filterCountry = ref("");
    const filterYear = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(9);

    const fetchFilms = async () => {
      try {
        const response = await axios.get(
            "https://kinotower.polytech.kz/api/v1/films"
        );
        films.value = response.data.films;
      } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
      }
    };

    const uniqueCountries = computed(() =>
        [...new Set(films.value.map((film) => film.country?.name).filter(Boolean))]
    );

    const uniqueYears = computed(() =>
        [...new Set(films.value.map((film) => film.year_of_issue))]
    );

    const filteredFilms = computed(() => {
      let result = [...films.value];

      if (searchQuery.value) {
        result = result.filter((movie) =>
            movie.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }

      if (sortOption.value) {
        result.sort((a, b) =>
            sortOption.value === "asc" ? a.ratingAvg - b.ratingAvg : b.ratingAvg - a.ratingAvg
        );
      }

      if (filterCountry.value) {
        result = result.filter(
            (movie) =>
                movie.country?.name.toLowerCase() ===
                filterCountry.value.toLowerCase()
        );
      }

      if (filterYear.value) {
        result = result.filter(
            (movie) => movie.year_of_issue === parseInt(filterYear.value)
        );
      }

      return result;
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredFilms.value.length / itemsPerPage.value);
    });

    const paginatedFilms = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredFilms.value.slice(start, end);
    });

    const searchMovies = () => {
      currentPage.value = 1;
    };

    const sortByRating = (order) => {
      sortOption.value = order;
    };

    const filterByCountry = (country) => {
      filterCountry.value = country;
      currentPage.value = 1;
    };

    const filterByYear = (year) => {
      filterYear.value = year;
      currentPage.value = 1;
    };

    const resetFilters = () => {
      searchQuery.value = "";
      sortOption.value = "";
      filterCountry.value = "";
      filterYear.value = "";
      currentPage.value = 1;
    };

    onMounted(fetchFilms);

    return {
      films,
      searchQuery,
      uniqueCountries,
      uniqueYears,
      filteredFilms,
      paginatedFilms,
      totalPages,
      currentPage,
      searchMovies,
      sortByRating,
      filterByCountry,
      filterByYear,
      resetFilters,
    };
  },
};
</script>



<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
}
</style>
<style scoped>
.card-img-top {
  height: 600px; /* Увеличено с 300px до 400px */
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
}

header .logisik {
  display: flex;
  align-items: center;
}
</style>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.main-content {
  margin-top: 70px;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
}
.navbar-collapse {
  margin-top: 10px;
  margin-left: 10px;
}
.logo {
  height: 60px;
}
.card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card-body {
  background-color: red;
  color: white;
  border-radius: 10px;
  box-shadow: 0 10px 15px gold;
}
.carousel-inner img {
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(127, 8, 255, 0.5);
}
.card-img-top {
  height: 300px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
}
</style>
