<template>
  <div id="app" class="h-100 d-block" >
    <template v-if="this.$route.name == 'Login'">
      <router-view />
    </template>
    <template v-else>
      <Sidebar />
    <section class="home-section h-100">
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
      <div class="container content-view h-100">
        <transition name="zoom-fade" mode="out-in">
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
    /* let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
      });
    } */
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
  display: block;
}

div.home-content {
  height: 96px;
}

section.home-section {
  background-color: #E4E9F7;
  overflow-y: scroll;
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

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: transform 0.35s, opacity 0.28s ease-in-out;
}
.zoom-fade-enter {
  transform: scale(0.97);
  opacity: 0;
}

.zoom-fade-leave-to {
  transform: scale(1.03);
  opacity: 0;
}

div.content-view {
  font-family: Montserrat,Helvetica,Arial,serif;
  font-weight: 400;
  font-size: 0.9rem;
}
</style>
