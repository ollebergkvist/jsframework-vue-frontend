<template>
  <div class="message-container">
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
  props: ["messageData"],
};
</script>
