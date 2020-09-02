<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      I'm a multidisciplinary developer working in the cross section of
      aesthetics and technology. I help clients with tailor-made
      developments, based on concrete concepts and sophisticated user
      centered experiences, into real business results. With more then 3
      years experience in the industry, I'm focusing on front and backend
      development, user experience and brand identity.
    </p>
    <p>
      This website was created as part of the BTH course "Jsramverk",
      showcasing front end development with the Javascript framework Vue.
    </p>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
h3 {
  margin: 40px 0 0;
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
