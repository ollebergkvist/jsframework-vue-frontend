<template>
  <div class="week">
    <h1>Week {{ $route.params.id }}</h1>
    <vue-markdown v-if="jsonArray.markdown">{{ jsonArray.markdown }}</vue-markdown>
    <div v-else>
      <p>Nothing to display</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>

<script>
import VueMarkdown from "vue-markdown";
import axios from "axios";
let config = require("../config/config");
export default {
  data() {
    return {
      jsonArray: "",
    };
  },
  mounted() {
    this.getData(this.$route.params.id);
  },
  methods: {
    getData(id) {
      axios({
        method: "GET",
        url: config.url + "/reports/week/" + id,
      }).then(
        (result) => {
          this.jsonArray = result.data.data;
          console.log(result);
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
  components: { VueMarkdown },
};
</script>
