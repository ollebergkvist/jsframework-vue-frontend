<template>
  <div v-if="messageData.user === user" class="message-user">
    <div class="message-date">
      <span
        ><small>{{ messageData.date }}</small></span
      >
    </div>
    <div>
      <span
        ><small>{{ messageData.user }}:</small></span
      >
      <br />
      <span>{{ messageData.text }} </span>
    </div>
  </div>
  <div v-else class="message-server">
    <div class="message-date">
      <span
        ><small>{{ messageData.date }}</small></span
      >
    </div>
    <div>
      <span
        ><small>{{ messageData.user }}:</small></span
      >
      <br />
      <span>{{ messageData.text }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["messageData", "user"],
};
</script>
