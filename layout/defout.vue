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
      <div class="filters d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex">
          <select class="form-select me-2" aria-label="Genre">
            <option selected>Жанр</option>
            <option value="1">Комедия</option>
            <option value="2">Один дома)))))))))</option>
            <option value="3">Драма</option>
            <option value="4">Боевик</option>
          </select>
          <select class="form-select" aria-label="Country">
            <option selected>Cтрана</option>
            <option value="1">Франция</option>
            <option value="2">Америка</option>
            <option value="3">Штрафстан</option>
          </select>
        </div>
        <div>
          <button class="btn btn-warning me-2">Название</button>
          <button class="btn btn-warning me-2">Год</button>
          <button class="btn btn-warning me-2">Рейтинг</button>
          <button class="btn btn-warning">Reset</button>
        </div>
      </div>

      <!-- Carousel -->
      <div id="carouselExample" class="carousel slide mb-4">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://img.championat.com/s/1350x900/news/big/s/f/sony-poobeschala-vypustit-prodolzhenie-filma-ancharted-na-kartah-ne-znachitsya_16916610021384368970.jpg" class="d-block w-100" alt="Слайд 1" />
          </div>
          <div class="carousel-item">
            <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d64aea4b-3938-498b-91b0-ce9e440d580d/1920x" class="d-block w-100" alt="Слайд 2" />
          </div>
          <div class="carousel-item">
            <img src="https://static.okko.tv/images/v2/16443898" class="d-block w-100" alt="Слайд 3" />
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

      <!-- Toast Notification -->
      <div
          class="toast show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style="position: absolute; top: 20px; right: 20px; z-index: 1050;"
      >
        <div class="toast-header">
          <img src="/images/logo.png" class="rounded me-2" alt="..." />
          <strong class="me-auto">CineQeest</strong>
          <small>2 sec ago</small>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">
          Привет, ты еще не зарегестрирован, зарегестрируйся и поддержи наш проект по бесплатному кино
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="i in 6" :key="i">
          <div class="card h-100 shadow-sm">
            <div
                class="card-img-top d-flex align-items-center justify-content-center bg-light"
                style="height: 200px;"
            >
              <span>Тут будет картинка</span>
            </div>
            <div class="card-body" id="title-text">
              <h5 class="card-title">Title Film</h5>
              <p class="card-text text-muted">
                Рейтинг<br />
                Продолжительность<br />
                Жанры
              </p>
              <button class="btn btn-warning">Начать просмотор</button>
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
export default {
  name: "MoviePage",
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
.main-content {
  margin-top: 70px;
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
.pagination .page-link {
  color: #000;
}
.pagination .page-link:hover {
  background-color: #e9ecef;
}
.card-body {
  background-color: red;
  color: white;
  border-radius: 10px;
  box-shadow: 0 10px 15px gold;
}

.card-body h5,
.card-body p {
  color: white !important;
}

.card-body .btn {
  color: white;
  box-shadow: 0 10px 15px rgba(127, 8, 255, 0.5);
}

.up-in {
  margin-right: auto;
  padding: 10px;
}
.carousel-inner img {
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(127, 8, 255, 0.5);
}
.toast-header img {
  height: 40px;
  width: 40px;
}

.toast-header {
    position: fixed;
    top: 0;
    margin-top: 500px;
    margin-right: 500px;
    z-index: 100;
    width: 350px;
  background-color: gold;
  border-radius: 10px;
  }
.toast-body{
  position: fixed;
  top: 0;
  margin-top: 540px;
  margin-right: 550px;
  z-index: 100;
  width: 350px;
  background-color: gold;
  border-radius: 10px;
}


</style>
