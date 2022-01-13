<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Log in</h1>

        <form @submit.prevent="submitForm">
          <div class="field">
            <label for="email">Email</label>
            <div class="control">
              <input
                id="email"
                type="email"
                name="email"
                class="input"
                v-model="username"
              />
            </div>
          </div>

          <div class="field">
            <label for="password">Password</label>
            <div class="control">
              <input
                type="password"
                name="password"
                class="input"
                id="password"
                v-model="password"
              />
            </div>
          </div>

          <div class="notification is-danger" v-if="errors.length">
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-success is-fullwidth">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";
import router from "../router";
export default {
  name: "Login",
  data() {
    return { username: "", password: "", errors: [] };
  },
  methods: {
    submitForm() {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");

      const formData = {
        username: this.username,
        password: this.password,
      };

      axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          const token = response.data.auth_token;

          store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = "Token " + token;

          localStorage.setItem("token", token);

          router.push("/dashboard/my-account");
        })
        .catch((error) => {
          this.errors = [];
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else if (error.message) {
            this.errors.push("Something went wrong. Please try again!");
          }
        });
    },
  },
};
</script>
