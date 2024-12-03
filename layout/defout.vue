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
            <form class="d-flex" role="search">
              <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
              />
              <button class="btn btn-warning">Поиск фильма</button>
            </form>
          </div>
          <div class="logisik sign up/in" id="up-in">
            <button class="btn btn-warning me-2">Sign in</button>
            <button class="btn btn-warning">Sign up</button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content container mt-5 pt-5">
      <!-- Carousel -->
      <div id="carouselExample" class="carousel slide mb-4">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
                src="https://img.championat.com/s/1350x900/news/big/s/f/sony-poobeschala-vypustit-prodolzhenie-filma-ancharted-na-kartah-ne-znachitsya_16916610021384368970.jpg"
                class="d-block w-100"
                alt="Слайд 1"
            />
          </div>
          <div class="carousel-item">
            <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d64aea4b-3938-498b-91b0-ce9e440d580d/1920x"
                class="d-block w-100"
                alt="Слайд 2"
            />
          </div>
          <div class="carousel-item">
            <img
                src="https://static.okko.tv/images/v2/16443898"
                class="d-block w-100"
                alt="Слайд 3"
            />
          </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Movie Cards -->
      <div class="row">
        <div
            class="col-sm-6 col-md-4 col-lg-4 mb-4"
            v-for="movie in films"
            :key="movie.id"
        >
          <div class="card h-100 shadow-sm">
            <img
                :src="movie.link_img || 'https://via.placeholder.com/150'"
                class="card-img-top"
                :alt="movie.name"
                style="height: 200px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">{{ movie.name }}</h5>
              <p class="card-text text-muted">
                <strong>Рейтинг:</strong> {{ movie.ratingAvg }}<br />
                <strong>Жанр:</strong>
                {{ movie.categories && movie.categories.length
                  ? movie.categories.map((cat) => cat.name).join(", ")
                  : "Не указано" }}
                <br />
                <strong>Длительность:</strong> {{ movie.duration }} мин<br />
                <strong>Год:</strong> {{ movie.year_of_issue }}<br />
                <strong>Страна:</strong>
                {{ movie.country?.name || "Не указано" }}<br />
                <strong>Отзывы:</strong> {{ movie.reviewCount }}
              </p>
              <a
                  :href="movie.link_kinopoisk || '#'"
                  class="btn btn-warning"
                  target="_blank"
              >На Кинопоиск</a>
              <a
                  :href="movie.link_video || '#'"
                  class="btn btn-primary mt-2"
                  target="_blank"
              >Смотреть трейлер</a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer mt-auto py-3 bg-dark text-white">
      <div class="container text-center">
        <span>&copy; 2024 CineQeest. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "MoviePage",
  setup() {
    const films = ref([]);

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

    onMounted(fetchFilms);

    return {
      films,
    };
  },
};
</script>

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
  box-shadow: 0 10px 15px gold;
  border-radius: 10px;
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
</style>
