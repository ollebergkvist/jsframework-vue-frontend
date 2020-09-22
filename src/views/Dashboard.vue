<template>
  <div class="dashboard">
    <h1>User dashboard (Signed in)</h1>
    <div class="create-report">
      <router-link to="/logout" class="d-block">Logout</router-link>
      <h4>Create report</h4>
      <b-form v-on:submit.prevent="createReport">
        <b-form-group
          id="input-group-1"
          label="KMOM:"
          label-for="input-1"
          description="Please enter corresponding KMOM."
        >
          <b-form-input id="input-1" v-model="form.kmomCreate" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Report:"
          label-for="input-2"
          description="Please enter text using markdown synthax."
        >
          <b-form-textarea id="input-2" v-model="form.reportCreate" type="text" required></b-form-textarea>
        </b-form-group>
        <div v-if="flagCreated">
          <p>{{messageCreate}}</p>
        </div>
        <div v-if="flagCreatedError">
          <p>Report was unfortunately not created.</p>
        </div>
        <b-button type="submit" variant="primary">Create</b-button>
      </b-form>
    </div>
    <div class="edit-report">
      <div class="create-report">
        <h4 class="h4-edit-report">Edit report</h4>
        <b-form v-on:submit.prevent="updateReport">
          <b-form-group
            id="input-group-1"
            label="KMOM:"
            label-for="input-1"
            description="Please enter KMOM of the report that you wish to edit."
          >
            <b-form-input id="input-1" v-model="form.kmomEdit" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Report:"
            label-for="input-2"
            description="Please enter text using markdown synthax."
          >
            <b-form-textarea id="input-2" v-model="form.reportEdit" type="text" required></b-form-textarea>
          </b-form-group>
          <div v-if="flagEdited">
            <p>{{messageEdit}}</p>
          </div>
          <div v-if="flagEditedError">
            <p>Report was unfortunately not updated.</p>
          </div>
          <b-button class="editButton" type="submit" variant="primary">Edit</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.h4-edit-report {
  margin-top: 1rem !important;
}

.editButton {
  margin-bottom: 3rem !important;
}
</style>

<script>
import axios from "axios";
let auth = require("../models/auth");
console.log("Token när vi loggar in dashboard:" + auth.token);
export default {
  data() {
    return {
      form: {
        kmomCreate: "",
        reportCreate: "",
        kmomEdit: "",
        reportEdit: "",
      },
      show: true,
      token: auth.token,
      flagCreated: "",
      flagCreatedError: "",
      flagEdited: "",
      flagEditedError: "",
      messageCreate: "",
      messageEdit: "",
    };
  },
  methods: {
    createReport(event) {
      axios({
        method: "POST",
        url: "http://localhost:1337/reports",
        headers: { "x-access-token": this.token },
        data: {
          kmom: this.form.kmomCreate,
          report: this.form.reportCreate,
        },
      })
        .then(
          (result) => {
            this.flagCreated = 1;
            this.messageCreate = result.data.data.message;
          },
          (error) => {
            this.flagCreatedError = 1;
            this.console.error(error);
          }
        )
        .then(() => {
          this.kmomCreate = "";
          this.reportCreate = "";
          event.target.reset();
        });
    },
    updateReport(event) {
      axios({
        method: "PUT",
        url: "http://localhost:1337/updatereport",
        headers: { "x-access-token": this.token },
        data: {
          kmom: this.form.kmomEdit,
          report: this.form.reportEdit,
        },
      })
        .then(
          (result) => {
            this.flagEdited = 1;
            this.messageEdit = result.data.data.message;
          },
          (err) => {
            this.flagEditedError = 1;
            console.error(err);
          }
        )
        .then(() => {
          this.kmomEdit = "";
          this.reportEdit = "";
          event.target.reset();
        });
    },
  },
};
</script>

