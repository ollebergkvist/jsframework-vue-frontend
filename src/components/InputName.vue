<template>
  <div id="nameInput" v-show="!isLogged">
    <div class="field is-grouped">
      <div class="control">
        <input
          v-model="userName"
          v-on:keydown.enter="sendUserName"
          class="input is-primary"
          placeholder="Your name"
        />
      </div>
      <div class="control">
        <button
          v-on:click="sendUserName"
          :disabled="!userName"
          class="button is-primary"
        >
          Enter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-name",
  props: ["isLogged"],
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    sendUserName: function () {
      if (this.userName.length > 0) {
        this.$emit("set-name", this.userName);
      }
    },
  },
};
</script>
