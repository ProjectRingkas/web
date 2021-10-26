<template>
  <div class="form-register">
    <h3>Sign Up</h3>
    <form action="">
      <div class="input-form">
        <label for="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
      </div>
      <div class="input-form">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
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
      <div class="input-form">
        <label for="conf-password">Confirm Password</label>
        <input
          type="password"
          name="conf-password"
          id="conf-password"
          placeholder="Confirm Your Password"
        />
      </div>
      <button type="submit">REGISTER</button>
    </form>
    <p>have an account? <a href="">Sign in</a></p>
  </div>
</template>

<script>
export default {
  name: "FormRegister",
};
</script>

<style>
a {
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
  margin: 16px 0;
}

.form-register p {
  font-family: "Montserrat", "sans-serif";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #2c2c2c;
}

form button {
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
  margin-top: 56px;
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
}
</style>
