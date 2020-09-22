<template>
  <div class="home">
    <div v-if="!jsonArray">
      <img src="../assets/preloader.svg" alt="preloader" id="loading-gif" width="50px" />
    </div>
    <h1 v-if="jsonArray">{{ jsonArray.data.title }}</h1>
    <p v-if="jsonArray">{{ jsonArray.data.paragraph1 }}</p>
    <p v-if="jsonArray">{{ jsonArray.data.paragraph2 }}</p>
    <h3>Links</h3>
    <ul>
      <li>
        <a href="https://ollebergkvist.com" target="_blank" rel="noopener">Olle Bergkvist</a>
      </li>
      <li>
        <a href="https://github.com/ollebergkvist/" target="_blank" rel="noopener">Github</a>
      </li>
      <li>
        <a href="https://jsramverk.se/" target="_blank" rel="noopener">Jsramverk</a>
      </li>
    </ul>
    <h3>Contact me</h3>
    <ul>
      <li>
        <a
          href="mailto:hello@ollebergkvist.com"
          target="_blank"
          rel="noopener"
        >hello@ollebergkvist.com</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import config from "../config/config";
export default {
  data() {
    return {
      jsonArray: "",
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: config.url,
    }).then(
      (result) => {
        this.jsonArray = result.data;
      },
      (error) => {
        console.error(error);
      }
    );

    // (async function () {
    //   try {
    //     const result = await axios.get("http://localhost:1337/");
    //     this.jsonArray = result.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 10px;
}
a {
  color: white;
}
</style>
