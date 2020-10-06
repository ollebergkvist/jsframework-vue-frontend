<template>
  <div>
    <div class="form-group">
      <input
        v-model="message"
        v-on:keydown.enter="send"
        class="form-control"
        placeholder="Type your message here"
      />
    </div>

    <button
      v-on:click="send"
      :disabled="!message"
      class="btn btn-primary btn-block mb-4"
    >
      Send chat message
    </button>
  </div>
</template>

<script>
export default {
  name: "input-message",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send: function () {
      if (this.message.length > 0) {
        this.$emit("send-message", this.message);
        this.message = "";
      }
    },
  },
};
</script>
