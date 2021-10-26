<template>
  <div class="ilustrator">
    <img src="../../assets/img/Ilustration-vector.svg" alt="image" />
  </div>
</template>

<script>
export default {
  name: "SideIlustrator",
};
</script>

<style scoped>
.ilustrator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  vertical-align: baseline;
  /* flex-basis: 40%; */
  
  background-image: url("../../assets/img/ilustrator-login.png");
  background-position: center;
  background-size: cover;
}
</style>