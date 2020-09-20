<template>
  <div>
    <h4>Register account</h4>
    <b-form v-on:submit.prevent="getFormValues">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Please enter your email address."
      >
        <b-form-input id="input-1" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
        description="Please enter your desired password."
      >
        <b-form-input id="input-2" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>
      <div v-if="flagError">
        <p class="error">Please enter a valid email address.</p>
      </div>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<style>
.form-text {
  color: white !important;
}
.error {
  margin-top: 1rem;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      flagSuccess: "",
      flagError: "",
    };
  },
  methods: {
    getFormValues() {
      axios({
        method: "POST",
        url: "http://localhost:1337/register",
        data: {
          email: this.form.email,
          password: this.form.password,
        },
      }).then(
        () => {
          this.flagSuccess = 2;
          this.$router.push({ name: "Login" });
        },
        (error) => {
          this.flagError = 1;
          console.log(error);
        }
      );
    },
  },
};
</script>



