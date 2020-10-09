<template>
  <div class="chat">
    <h1>Websocket chat</h1>

    <!-- user list -->
    <div class="user-list">
      <users v-bind:users="users"></users>
    </div>

    <!-- user input -->
    <input-name
      v-bind:is-logged="isLogged"
      v-on:set-name="setName"
    ></input-name>

    <!-- message list -->
    <div class="message-list" v-show="isLogged">
      <h4>Messages</h4>
      <div class="messages">
        <ul>
          <li v-for="(message, index) in messages" :key="index">
            <div class="message">
              <message
                v-bind:message-data="message"
                v-bind:user="user"
              ></message>
            </div>
          </li>
        </ul>
      </div>

      <!-- new message input  -->
      <input-message v-on:send-message="sendMessage"></input-message>
    </div>
  </div>
</template>

<script>
// Socket.io
import io from "socket.io-client";
var socket = io(process.env.VUE_APP_LOCAL_SERVER);

// Import components
import InputMessage from "../components/InputMessage";
import InputName from "../components/InputName";
import Message from "../components/Message";
import Users from "../components/Users";

export default {
  data: function () {
    return {
      messages: [],
      users: [],
      user: "",
      isLogged: false,
    };
  },
  mounted: function () {
    // Init user list. Updates user list when client connects
    socket.on("active-user-list", (user) => {
      this.users = user;
      socket.emit("get-history");
    });

    // Init message list. Updates message history when client connects
    socket.on("receive-history", (history) => {
      this.messages = history;
    });

    socket.on("chat-message", (message) => {
      this.messages.push(message);
    });

    // Init user list. Updates user list when the client init
    socket.on("add-user", (user) => {
      this.users.push(user);
    });
  },
  updated: function () {
    this.scrollToEnd();
  },
  methods: {
    sendMessage: function (message) {
      socket.emit("chat-message", {
        message: message,
        user: this.user,
      });
    },
    setName: function (user) {
      this.user = user;
      this.isLogged = true;
      socket.emit("add-user", user);
    },
    scrollToEnd: function () {
      var container = this.$el.querySelector(".messages");
      container.scrollTop = container.scrollHeight;
    },
  },
  components: {
    "input-name": InputName,
    "input-message": InputMessage,
    users: Users,
    message: Message,
  },
};
</script>

<style>
.messages {
  overflow: auto;
}

ul {
  padding: 0;
  list-style: none;
}

.form-text {
  color: white !important;
}

.messages {
  width: 100%;
  height: 40vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.all-messages p:nth-child(2n) {
  background-color: #ccc;
}

.message {
  display: flex;
  justify-content: start;
  align-items: center;
  color: #333;
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.message p {
  margin-bottom: 0 !important;
}

.message-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.message-date {
  display: flex;
  justify-content: flex-end;
}

.message-user {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  padding: 1rem;
}

.message-server {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #0078ff;
  border: 1px solid #0078ff;
  padding: 1rem;
}
</style>
