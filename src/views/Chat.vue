<template>
  <div class="chat">
    <h1>Websocket chat</h1>
    <!-- user list -->
    <div class="user-list">
      <!-- <users v-bind:users="users"></users> -->
      <h4 class="title is-4">Current users ({{ users.length }})</h4>
      <ul>
        <li v-for="user in users" :key="user">
          <div class="content">
            <p>
              <strong>{{ user }}</strong>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- inputs user name -->
    <input-name
      v-bind:is-logged="isLogged"
      v-on:set-name="setName"
    ></input-name>

    <!-- message list -->
    <div class="message-list" v-show="isLogged">
      <h4>Messages</h4>
      <div class="messages">
        <ul>
          <li v-for="message in messages" :key="message">
            <!-- <message v-bind:message-data="message"></message> -->
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ messages.user }}</strong>
                  <small>{{ messages.date }}</small>
                  <br />
                  {{ messages.text }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- inputs new message -->
      <input-message v-on:send-message="sendMessage"></input-message>
    </div>
  </div>
</template>

<script>
// Socket.io
import io from "socket.io-client";
var socket = io("http://localhost:1339");

// Import components
import InputMessage from "../components/InputMessage";
import InputName from "../components/InputName";
// import Message from "../components/Message";
// import Users from "../components/Users";

export default {
  data: function () {
    return {
      messages: [],
      users: [],
      userName: "",
      isLogged: false,
    };
  },
  created: function () {
    // Client Socket events
    // When the server emits a message, the client updates message list
    socket.on("read-message", function (message) {
      this.messages.push({
        text: message.text,
        user: message.user,
        date: message.date,
      });
    });

    // // When user connects, the server emits user-connected event which updates user list
    socket.on("add-user", function (userId) {
      this.users.push(userId);
      console.log("Client user-connected: " + userId);
    });

    // // Init chat event. Updates the initial chat with current messages
    socket.on("init-chat", function (messages) {
      console.log("Client init-chat: " + messages);
      this.messages = messages;
    });

    // // Init user list. Updates user list when the client init
    socket.on("update-users", function (users) {
      this.users = users;
    });
  },
  updated: function () {
    this.scrollToEnd();
  },
  methods: {
    sendMessage: function (message) {
      socket.emit("send-message", {
        message: message,
        user: this.userName,
      });
    },
    setName: function (userName) {
      this.userName = userName;
      this.isLogged = true;
      socket.emit("add-user", this.userName);
    },
    scrollToEnd: function () {
      var container = this.$el.querySelector(".messages");
      container.scrollTop = container.scrollHeight;
    },
  },
  components: {
    "input-name": InputName,
    "input-message": InputMessage,
    // "users": Users,
    // "message": Message,
  },
};
</script>

<style>
.form-text {
  color: white !important;
}

.messages {
  width: 100%;
  height: 30vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.all-messages p:nth-child(2n) {
  background-color: #ccc;
}

.new-message {
  width: 100%;
  height: 5vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 2rem;
  font-size: 1rem;
}
</style>
