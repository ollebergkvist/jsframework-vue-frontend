<template>
  <div>
    <h4 class="title is-4">Users online ({{ users.length }}):</h4>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <p>
          <small>{{ user.name }}</small>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  props: ["users"],
};
</script>
