<template>
  <div class="container-register">
    <SideIlustrator />
    <div class="form-registration">
      <Logo />
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <FormRegister />
    </div>
  </div>
</template>

<script>
import FormRegister from "./FormRegister.vue";
import Logo from "./Logo.vue";
import SideIlustrator from "./SideIlustrator.vue";

export default {
  name: "Register",
  components: {
    SideIlustrator,
    Logo,
    FormRegister,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container-register {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>