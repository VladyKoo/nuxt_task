<template>
  <div class="container">
    <div class="content">
      <Header />
      <NavBar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
export default {
  components: {
    Header,
    NavBar
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li {
  margin: 0;
}

input,
button,
textarea,
select {
  font: inherit;
  cursor: pointer;
}

body {
  font-family: sans-serif;
}

button:focus {
  outline: none;
}
button:active {
  transform: translateY(1px);
}

.container {
  position: relative;
  top: 50px;
  width: 1330px;
  margin: 0 auto;
}

.content {
  width: 1000px;
  margin-left: 200px;
  min-height: 800px;
}

.page-content {
  width: 1000px;
  /* padding: 10px; */
  box-shadow: 0 25px 28px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  /* min-height: 600px; */
}
</style>
