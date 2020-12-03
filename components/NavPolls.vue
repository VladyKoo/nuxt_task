<template>
  <div class="header-nav">
    <div class="item">
      <nuxt-link
        active-class="link"
        no-prefetch
        to="/polls/options"
        class="link"
      >
        <p>Параметры</p>
      </nuxt-link>
    </div>
    <div class="item">
      <nuxt-link
        active-class="active-link"
        no-prefetch
        to="/polls/questions"
        class="link"
      >
        <p>Вопросы</p>
      </nuxt-link>
    </div>
    <div class="item">
      <nuxt-link
        active-class="active-link"
        no-prefetch
        to="/polls/logics"
        class="link"
      >
        <p>Логика</p>
      </nuxt-link>
    </div>
    <div class="item">
      <nuxt-link
        active-class="active-link"
        no-prefetch
        to="/polls/conditions"
        class="link"
      >
        <p>Условия</p>
      </nuxt-link>
    </div>
    <div class="item">
      <nuxt-link
        active-class="active-link"
        no-prefetch
        to="/polls/respondents"
        class="link"
      >
        <p>Респонденты</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px 0 50px;
  border-bottom: 2px solid #c1e837;
}

.item {
  min-width: 120px;
  padding-bottom: 10px;
  border-bottom: 4px solid #fff;
  text-align: center;
}

.link {
  text-decoration: none;
}

.link > p {
  font-size: 20px;
  color: #187d2c;
}

.active {
  color: #000;
}

.item:hover {
  color: #000;
  border-bottom: 4px solid #c1e837;
}
</style>
