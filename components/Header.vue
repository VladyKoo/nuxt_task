<template>
  <div class="header">
    <div class="header-top">
      <div class="search">
        <input type="text" placeholder="Поиск по системе" />
        <button><img src="@/static/loupe.png" /></button>
      </div>
      <div class="user">
        <img src="@/static/man.png" alt="Avatar" class="user-img" />
        <div class="user-name">
          <p><strong>Alexander. C</strong></p>
          <p>Alexander. C</p>
        </div>
      </div>
    </div>

    <div class="header-path">
      <div class="item">
        <nuxt-link to="/" class="link">
          <img src="@/static/home.png" />
        </nuxt-link>
      </div>

      <div class="item">
        <img src="@/static/right-arrow.png" />
      </div>

      <div class="item">
        <nuxt-link to="/polls" class="link">
          <p>Опросы</p>
        </nuxt-link>
      </div>

      <div class="item">
        <img src="@/static/right-arrow.png" />
      </div>

      <div class="item">
        <p>Добавить опрос</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 1000px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.search {
  display: flex;
  align-items: center;
  padding: 0 5px;
  min-width: 600px;
  height: 50px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
}

input {
  font-size: 20px;
  border: none;
  outline: none;
  width: 100%;
}

button {
  border: none;
  background-color: transparent;
}

.user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 200px;
}

.user > img {
  border-radius: 50%;
}

.header-path {
  display: flex;
  align-items: center;
  height: 40px;
  padding-bottom: 10px;
}

.header-path > .item {
  margin-right: 10px;
}

.header-path > .item .link {
  text-decoration: none;
  color: #000;
}

.header-path > .item p {
  padding-bottom: 5px;
}

.header-path > .item > p {
  color: #7c7c7c;
}
</style>
