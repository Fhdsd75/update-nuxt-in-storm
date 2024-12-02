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
              <button class="btn btn-warning" >Поиск фильма</button>
            </form>
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
          <button class="btn btn-dark me-2">Название</button>
          <button class="btn btn-dark me-2">Год</button>
          <button class="btn btn-dark me-2">Рейтинг</button>
          <button class="btn btn-dark">Reset</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="i in 6" :key="i">
          <div class="card h-100 shadow-sm">
            <div
                class="card-img-top d-flex align-items-center justify-content-center bg-light"
                style="height: 200px;"
            >
              <span>Тут будет картинка
              </span>
            </div>
            <div class="card-body" id="title-text">
              <h5 class="card-title">Title Film</h5>
              <p class="card-text text-muted">
                Рейтинг<br />
                Продолжительность<br />
                Жанры
              </p>
              <button class="btn btn-primary">Начать просмотор</button>
            </div>
          </div>
        </div>
      </div>
      <nav class="d-flex justify-content-center mt-4">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
        </ul>
      </nav>
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
.navbar-collapse{
  margin-top: 10px;
  margin-left: 10px;
  margin-top: 10px;

}
.main-content {
  margin-top: 70px; /* Offset for fixed navbar */
}
.logo {
  height: 60px;
}
.card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px rgba(127, 8, 255, 0.5);
  border-radius: 10px;
}
.pagination .page-link {
  color: #000;
}
.pagination .page-link:hover {
  background-color: #e9ecef;
}
.card-body {
  background-color: rgb(206, 9, 206);
  color: white; /* Для текста внутри card-body */
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(127, 8, 255, 0.5);
}


.card-body h5,
.card-body p {
  color: white !important;
}

.card-body .btn {
  color: white;
  box-shadow: 0 10px 15px rgba(127, 8, 255, 0.5);
}

.card-body #p-text{
  color: white;
}
</style>
