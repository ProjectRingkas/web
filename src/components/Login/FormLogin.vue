<template>
  <div class="form-register">
    <h3>Login</h3>
    <form action="">
      <div class="input-form">
        <label for="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
      </div>
      <div class="input-form">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div class="form-manage">
        <div class="remember-pss">
          <input type="checkbox" />
          <label for="">Remember me</label>
        </div>
        <div class="reset-pss">
          <a href="">Reset Password ?</a>
        </div>
      </div>
      <button type="button" @click="login">Login</button>
      <button type="button" id="login-google" >
        <img src="../../assets/img/logo/google.svg" alt="" /> Login with Google
      </button>
    </form>
    <p>Don't have an account yet? <a href="">Join with us</a></p>
  </div>
</template>

<script>
export default {
  name: "FormLogin",
  methods: {
    login: function () {
      console.log('login')
      window.location = "/home";
    }
  }
};
</script>

<style scoped>
.form-register a {
  color: #106ee8;
  text-decoration: none;
}

.form-register {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-register h3 {
  font-family: "Poppins", "sans-serif";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  margin: 8px 0;
}

.form-manage {
  display: flex;
  justify-content: space-between;
}

.form-register p {
  font-family: "Montserrat", "sans-serif";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #2c2c2c;
}

form button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #106ee8;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  padding: 12px;
  font-family: "Montserrat", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: white;
  border: 0;
  margin-top: 18px;
  max-height: 42px;
}

#login-google {
  background: white;
  color: black;
  border: 2px solid #cfcfcf;
  margin-top: 18px;
}

form {
  width: 100%;
  max-width: 500px;
}

label {
  font-weight: bold;
  font-size: 16px;
}

.input-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
}

.input-form label {
  margin-bottom: 6px;
}

.input-form input {
  width: 100%;
  max-width: 500px;
  padding: 12px;
  background: #ffffff;
  border: 2px solid #cfcfcf;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  height: 42px;
}
</style>
