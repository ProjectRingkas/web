<template>
  <div id="app" >
    <template v-if="this.$route.name == 'Login'">
      <router-view />
    </template>
    <template v-else>
      <Sidebar />
    <section class="home-section">
      <div class="home-content">
        <b-row class="w-100">
          <b-col>
            <div><menu-icon v-on:click="menu" class='bx bx-menu'></menu-icon></div>
          </b-col>
          <b-col class="text-right">
            <div class="btn">
              <bell-icon class="icon-head"></bell-icon>
            </div>
            <div class="btn">
              <settings-icon class="icon-head"></settings-icon>
            </div>
            <a href="/login" class="sign-out align-right btn btn-sm">
              <user-icon class="icon-head user"></user-icon>
              <span>Sign Out</span>
              <!-- <button class="btn btn-sm">Sign Out</button> -->
            </a>
          </b-col>
        </b-row>
      </div>
      <div class="container content-view">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
    </section>
    </template>
  </div>
</template>

<script>
import { MenuIcon, BellIcon, SettingsIcon, UserIcon } from 'vue-feather-icons'
import Sidebar from './components/sidebar/Sidebar.vue'
export default {
  name: "Nav",
  props: ['name'],
  components: {
    Sidebar,
    MenuIcon,
    BellIcon,
    SettingsIcon,
    UserIcon
  },
  methods: {
    menu: function () {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
    }
  },
  created: function () {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
      });
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap");

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", "sans-serif";
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #E4E9F7;
}

div.home-content {
  height: 96px;
}

.icon-head {
  height: 16px;
}

.icon-head.user {
  margin: 0 3px;
}

.sign-out {
  background-color: rgba(16, 110, 232, 0.3) !important;
  border-radius: 15px !important;
}

.sign-out span {
  margin-right: 3px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
