<template>
    <div>
        <h4 class="title is-4">Current users ({{ users.length }})</h4>
        <ul>
            <li v-for="user in users" :key="user">
                <div class="content">
                    <p>
                        <strong>{{ user.name }}</strong>
                    </p>
                </div>
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
