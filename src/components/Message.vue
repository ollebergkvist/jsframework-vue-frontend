<template>
    <div class="media-content">
        <div class="content">
            <p>
                <strong>{{ messageData.user }}</strong>
                <small>{{ messageData.date }}</small>
                <br />
                {{ messageData.text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["messageData"],
};
</script>
