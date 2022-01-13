<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">My Account</h1>
      </div>
    </div>

    <div class="column is-12">
      <button @click="logout()" class="button is-danger">Log out</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../../store";
import router from "../../router";
export default {
  name: "MyAccount",
  methods: {
    async logout() {
      await axios
        .post("/api/v1/token/logout/")
        .then((response) => {
          console.log("Logged out");
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });

      axios.defaults.headers.common["Authentication"] = "";
      localStorage.removeItem("token");
      store.commit("removeToken");
      router.push("/");
    },
  },
};
</script>
