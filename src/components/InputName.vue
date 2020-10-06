<template>
  <div id="nameInput" v-show="!isLogged">
    <div class="form-group">
      <input
        v-model="userName"
        v-on:keydown.enter="sendUserName"
        class="form-control"
        placeholder="Your name"
      />
    </div>
    <button
      v-on:click="sendUserName"
      :disabled="!userName"
      class="btn btn-primary btn-block mb-4"
    >
      Enter
    </button>
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
