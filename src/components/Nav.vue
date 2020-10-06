<template>
    <div>
        <nav>
            <router-link to="/" exact-active-class="exact-active"
                >Home</router-link
            >
            |
            <router-link to="/reports" active-class="active"
                >Reports</router-link
            >
            |
            <router-link to="/chat" active-class="active">Chat</router-link> |
            <router-link to="/login" active-class="active">Login</router-link> |
            <router-link to="/register" active-class="active"
                >Register</router-link
            >
            |
        </nav>
    </div>
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style scoped>
.active {
    background-color: #333 !important;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
}

.exact-active {
    background-color: #333 !important;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
}
</style>
