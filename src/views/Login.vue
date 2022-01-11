<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Log in</h1>

        <form>
          <div class="field">
            <label for="email">Email</label>
            <div class="control">
              <input id="email" type="email" name="email" class="input" />
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
              />
            </div>
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
export default {
  name: "Login",
};
</script>
