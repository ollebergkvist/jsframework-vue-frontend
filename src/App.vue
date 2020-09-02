<template>
  <div id="app">
    <a href="https://ollebergkvist.com">
      <img alt="Olle Bergkvist logotype" width="100px" src="@/assets/logotype_white.svg" />
    </a>
    <Nav></Nav>
    <div class="divider"></div>
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "app",
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap");

html {
  font-size: 16px;
}

body {
  line-height: 1.4;
  display: flex;
  justify-content: center;
  background: #304352; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #d7d2cc,
    #304352
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #d7d2cc,
    #304352
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding-left: 20px;
  padding-right: 20px;
}

img {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#app {
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  color: white;
  margin-top: 20px;
}

p {
  margin-top: 0;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1.4rem;
  overflow: hidden;
  max-width: 55ch;
}

a {
  color: white;
}

.divider {
  height: 2px;
  width: 100%;
  background-color: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

h1,
h2,
h4 {
  margin-top: 0;
}

h1 {
  font-size: 2.4rem;
  margin-bottom: 2.8rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.4rem;
}

h4 {
  font-size: 1.4rem;
  margin-bottom: 0;
}

h3 {
  text-transform: uppercase;
}
</style>
