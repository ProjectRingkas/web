<template>
  <div class="logo-ringkas">
    <img alt="Ringkas" class="logo" src="../../assets/logo.png" />
    <img alt="Ringkas" class="text" src="../../assets/ringkas.png" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo-ringkas {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 41%);
  top: 35px;
}

.logo-ringkas img {
  margin: 2px 0;
}

.logo-ringkas .logo {
  max-height: 53px;
}

.logo-ringkas .text {
  max-height: 32px;
}
</style>