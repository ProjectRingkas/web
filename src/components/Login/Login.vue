<template>
  <div class="container-login">
    <div class="side">
      <SideIlustrator />
    </div>
    <div class="form">
      <div class="form-registration">
        <Logo />
        <FormLogin class="form-login"/>
      </div>
    </div>    
  </div>
</template>

<script>
import SideIlustrator from "./SideIlustrator.vue";
import Logo from "./Logo.vue";
import FormLogin from "./FormLogin.vue";

export default {
  name: "Login",
  components: {
    SideIlustrator,
    Logo,
    FormLogin,
  },
};
</script>

<style >
html,
body {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100vw;
}

* {
  box-sizing: border-box;
}

div.container-login {
  display: flex;
  width: 100%;
}
.container-login .side {
  width: 41.6%;
  height: 100%;
  background-color: blue;
}

.container-login .form {
  width: calc(100% - 41.6%);
  height: 100%;
  background-color: white;
}

.container-login .form div .form-login {
  padding-top: 150px;
}


</style>