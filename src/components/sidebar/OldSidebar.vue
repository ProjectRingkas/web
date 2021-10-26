<template>
  <div class="nav-links">
        <sidebar-link
          to="/home"
          iconSrc="../../assets/img/icons/home.svg"
          title="Home"
        ></sidebar-link>
        <p class="nav-label">APPS</p>
        <button v-on:click="collapse" value="no">
          <img src="../../assets/img/icons/cart.svg" alt="cart" />
          <p>Sales</p>
          <img class="svg-file" src="../../assets/img/icons/arrowright.svg" alt="" />
        </button>
        <div class="link">
          <router-link to="/invoice" :class="{'link-active': isActive()}">Invoice</router-link>
          <router-link to="/customer">Customer</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="../../assets/img/icons/icon5.svg" alt="" />
          <p>Services & Product</p>
          <img class="svg-file" src="../../assets/img/icons/arrowright.svg" alt="" />
        </button>
        <div class="link" >
          <router-link to="/category">Category</router-link>
          <router-link to="/inventory">Inventory</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="../../assets/img/icons/icon2.svg" alt="" />
          <p>Purchase</p>
          <img class="svg-file" src="../../assets/img/icons/arrowright.svg" alt="" />
        </button>
        <div class="link">
          <router-link to="/bills">Bills</router-link>
          <router-link to="/vendors">Vendors</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="../../assets/img/icons/icon1.svg" alt="" />
          <p>Transaction</p>
          
          <img class="svg-file" src="../../assets/img/icons/arrowright.svg" alt="" />
        </button>
        <div class="link">
          <router-link to="/coa">Chart of Account</router-link>
          <router-link to="/manualtransaction">Manual Transaction</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="../../assets/img/icons/icon4.svg" alt="" />
          <p>Report</p>
          
          <img class="svg-file" src="../../assets/img/icons/arrowright.svg" alt="" />
        </button>
        <div class="link">
          <router-link to="/neraca">Neraca</router-link>
          <router-link to="/untungrugi">Untung Rugi</router-link>
        </div>
        <router-link to="/pos" class="link-home">
          <img
            src="../../assets/img/icons/icon3.svg"
            alt=""
            style="filter: invert(0)"
          />
          POS
          <img class="svg-file" src="../../assets/img/icons/arrowright.svg" alt="" />
        </router-link>
      </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'

export default {
  props:['to'],
  components: {
    SidebarLink
  }, 
  methods: {
    isActive: function(  ) { 
      console.log(this.to, window.location.path)
      return window.location.pathname === this.to;
    },
    collapse: function (e) {
      const arrow = e.target.children[2];
      const link = e.target.nextElementSibling;
      if( link.classList.contains("show") ) {
        link.classList.remove("show");
        arrow.classList.remove("rotate");
      } else {
        link.classList.add("show");
        arrow.classList.add("rotate");
      }
    },
  },
  data() {
    return {
      btn_id: 0,
    };
  },
}
</script>

<style>
:root {
  --sidebar-bg-color: #ffffff;
  --sidebar-item-hover: #106EE8;
  --sidebar-item-active: #106EE8;
  --nav-height: 40px;
}

 #nav {
  /* flex-basis: 16.67%;*/
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  /* max-width: 240px; */
}
/*
.container-content {
  flex-basis: 83.33%;
} */

.logo-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 51px;
  margin: 25px;
}

.logo-head p {
  font-family: "Expletus Sans", sans-serif;
  font-size: 12px;
  margin: 0;
}

.logo-head img {
  max-width: 28px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.show {
  /* display: flex !important; */
  /* transition: all 0.5s ease; */
  height: 10% !important;
  opacity: 1 !important;
}

.nav-links button {
  position: relative;
  background: white;
  margin: 4px 0;
  border: 0;
  font-family: "Montserrat", "sans-serif";
  font-weight: normal;
  font-size: 15px;
  color: black;
  cursor: pointer;
  width: 181px;
  min-height: 40px;
  text-align: start;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
}

.nav-links button p {
  position: absolute;
  top: 25%;
  left: 15%;
  margin: 0;
  align-self: flex-start;
  pointer-events: none;
}

.nav-links button img {
  pointer-events: none;
}

.nav-links button svg {
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: all 0.5s ease;
}



.nav-label {
  align-self: flex-start;
  text-align: start;
  font-size: 14px;
  color: #999999;
  transform: translate(75%);
}

.link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translate(30px);
  /* transition: all 0.5s ease; */
  transition: all 0.5s ease;
  /* transition: opacity 0.2s ease; */
  height: 0%;
  opacity: 0;
}

.link a {
  text-decoration: none;
  font-weight: normal;
  line-height: 40px;
  width: 203px;
  /* font-size: 13px; */
  cursor: pointer;
  border-radius: 4px;
  /* padding-left: 28px; */
  box-sizing: border-box;
}

.active {
  background: #106ee8;
  color: white !important;
  /* filter: invert(1); */
}

.active img {
  filter: invert(0) !important;
}

.link-home {
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 203px;
  align-items: center;
  border-radius: 4px;
  align-self: center;
  padding-left: 4%;
  line-height: 40px;
  text-decoration: none;
  font-size: 15px;
  color: black;
  cursor: pointer;
}

.link-home img {
  margin-right: 12px;
}

.link-home img {
  filter: invert(1);
}

.link-home svg {
  pointer-events: none;
  position: absolute;
  right: 11px;
}

.link-active {
  background-color: var(--sidebar-item-active);
  color: #ffffff;
}

.link-active:hover {
  background-color: var(--sidebar-item-active);
  color: #ffffff;
}

.svg-file {
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: all 0.5s ease;
  transform: rotate(0deg);
}

img.rotate.svg-file {
  transform: rotate(90deg);
}
</style>