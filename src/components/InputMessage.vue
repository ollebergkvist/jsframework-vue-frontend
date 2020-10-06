<template>
    <div class="controls field has-addons">
        <div class="control is-expanded">
            <input
                v-model="message"
                v-on:keydown.enter="send"
                class="input is-primary"
                placeholder="Write message"
            />
        </div>
        <div class="control">
            <button
                v-on:click="send"
                :disabled="!message"
                class="button is-primary"
            >
                Send
            </button>
        </div>
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
        send: function() {
            if (this.message.length > 0) {
                this.$emit("send-message", this.message);
                this.message = "";
            }
        },
    },
};
</script>
