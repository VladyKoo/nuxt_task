<template>
  <div class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-top">
        <nuxt-link no-prefetch to="/" class="link">
          <div class="circle"></div>
        </nuxt-link>
      </div>

      <div class="sidebar-item">
        <nuxt-link
          active-class="active-link"
          no-prefetch
          to="/polls"
          class="link"
        >
          <img src="@/static/file.png" />
          <p>Опросы</p>
        </nuxt-link>
      </div>
      <div class="sidebar-item">
        <nuxt-link
          active-class="active-link"
          no-prefetch
          to="/users"
          class="link"
        >
          <img src="@/static/group.png" />
          <p>Пользователи</p>
        </nuxt-link>
      </div>
      <div class="sidebar-item">
        <nuxt-link
          active-class="active-link"
          no-prefetch
          to="/blacklist"
          class="link"
        >
          <img src="@/static/flag.png" />
          <p>Черные списки</p>
        </nuxt-link>
      </div>
      <div class="sidebar-item">
        <nuxt-link
          active-class="active-link"
          no-prefetch
          to="/callCenter"
          class="link"
        >
          <img src="@/static/telephone.png" />
          <p>Колл-центр</p>
        </nuxt-link>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-botton">
        <nuxt-link no-prefetch to="/information" class="link">
          <img src="@/static/information.png" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  position: absolute;
  top: 10px;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 180px;
  height: 90%;
}

.sidebar-top {
  max-width: 120px;
  border: 2px solid #fff;
  padding: 10px;
  margin-bottom: 50px;
}

.sidebar-item {
  margin-bottom: 30px;
  border: 2px solid #fff;
}

.sidebar-item:hover {
  border: 2px solid #dbf28b;
  border-radius: 5px;
}

.sidebar .link {
  max-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
}

.active-link {
  border-radius: 5px;
  background-color: #f7f7f7;
}

.circle {
  width: 48px;
  height: 48px;
  background-color: red;
  border-radius: 50%;
}

img {
  width: 48px;
}
</style>
