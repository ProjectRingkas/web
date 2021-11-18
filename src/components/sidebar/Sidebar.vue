<template>
  <div class="sidebar h-100">
    <div class="logo-head">
      <img alt="Ringkas" src="../../assets/logo.png" />
      <p>RINGKAS</p>
    </div>
    <ul class="nav-links">
      <component :is="getColumn(item)"
       v-for="item in navigation"
       :key="item.title"
       :to="item.route"
       :item="item"
      ></component>
    </ul>
  </div>
</template>

<script>
import navigation from '../../navigation/index'
import SidebarLink from './SidebarLink.vue'
import SidebarGroup from './SidebarGroup.vue'
import SidebarHead from './SidebarHead.vue'

export default {
  props:['item'],
  methods: {
    getColumn: (item) => {
      //console.log(this.item)
      if( item.children ) return 'sidebar-group';
      if( item.header ) return 'sidebar-head';
      else return 'sidebar-link';
    }
  },
  components: {
    SidebarLink,
    SidebarGroup,
    SidebarHead
  },
  data() {
    return {
      navigation
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font poppins */
}

:root {
  --sidebar-bg-color: #ffffff;
  --sidebar-item-hover: #106EE8;
  --sidebar-item-active: #106EE8;
 
  --nav-height: 40px;
}

.logo-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 51px;
  margin: auto;
  height: 96px;
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
  padding-left: 0px;
  height: 100%; 
   padding: 30px 0 0px 0;
  overflow: auto;
}

.sidebar{
  position: fixed;
  /* top: 0;
  left: 0;
  height: 100%; */
  width: 260px;
  z-index: 100;
  /* transition: all 0.5s ease; */
  background: white;
}
.sidebar.close{
  width: 78px;
}

.sidebar .nav-links{
  height: 100%;
  padding: 0px;
  overflow: auto;
}

.sidebar.close .logo-head p{
  display: none;
}

.sidebar.close .nav-links{
  overflow: visible;
  padding: 0px;
}
.sidebar .nav-links::-webkit-scrollbar{
  display: none;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
  margin-left: 15px;
  margin-right: 15px;
  margin-top:10px;
  margin-bottom:10px;
}
.sidebar .nav-links li.first-link:hover{
  background: var(--sidebar-item-active);
  box-shadow: -1px 1px 8px rgba(126, 114, 242, 0.578726);
}
.sidebar .nav-links li .iocn-link:hover{
  background: var(--sidebar-item-active);
  box-shadow: -1px 1px 8px rgba(126, 114, 242, 0.578726);
}
.sidebar .nav-links li .iocn-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link{
  display: block
}
.sidebar .nav-links li i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
/* .sidebar .nav-links li.showMenu i.arrow{
  transform: rotate(-180deg);
} */
.sidebar.close .nav-links .icon-code.arrow{
  display: none;
}
.sidebar .nav-links li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar.close .nav-links li a .link_name{
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu{
  /* padding: 2px 2px 2px 43px; */
  margin-top: -5px;
  /* display: none; */
  height: 0px;
  overflow: hidden;
  transition: ease-in-out 0.2s;
}
.sidebar .nav-links li.showMenu .sub-menu{
  display: block;
  height: 108px;
}
.sidebar .nav-links li .sub-menu a{
  font-size: 14px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 1;
  transition: all 0.3s ease;
}
/* .sidebar .nav-links li .sub-menu a:hover{
  opacity: 1;
} */
.sidebar.close .nav-links li .sub-menu{
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu{
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name{
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name{
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank{
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank{
  top: 50%;
  transform: translateY(-50%);
}
.sidebar .profile-details{
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 12px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details{
  background: none;
}
.sidebar.close .profile-details{
  width: 78px;
}
.sidebar .profile-details .profile-content{
  display: flex;
  align-items: center;
}
.sidebar .profile-details img{
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img{
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job{
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job{
  display: none;
}
.sidebar .profile-details .job{
  font-size: 12px;
}
.home-section{
  position: relative;
  /* height: 100vh; */
  margin-left: 260px;
  padding: 0rem 1rem 0;
  transition: all 0.5s ease;
}
.sidebar.close ~ .home-section{
  margin-left: 78px;
  /* width: calc(100% - 78px); */
}
.home-section .home-content{
  /* height: 60px; */
  display: flex;
  align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text{
  color: #11101d;
  font-size: 35px;
}
.home-section .home-content .bx-menu{
  margin: 0 15px;
  cursor: pointer;
}
.home-section .home-content .text{
  font-size: 26px;
  font-weight: 600;
}
@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu{
    display: none;
  }
}


</style>