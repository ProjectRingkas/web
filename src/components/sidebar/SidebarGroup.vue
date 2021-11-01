<template>
    <li class="nav-item has-submenu" :class=" !collapse ? 'showMenu' : ''" >
        <b-link @click="showMenu" class="iocn-link" >
            <!-- <div class="iocn-link" > -->
                <a class="" href="#" > 
                    <!-- <home-icon class="icon-code"></home-icon>  -->
                    <icon-feather :icon="item.icon" class="icon-code"></icon-feather>
                    <span class="link_name">{{ item.title }}</span>
                </a>
                <icon-feather icon="ChevronRight" class="icon-code arrow" :class=" !collapse ? 'rotate90' : 'rotate0'"></icon-feather>
            <!-- </div> -->
        </b-link>
        <transition name="zoom-fade" mode="out-in">
            <ul class="sub-menu">
                <!-- <li><router-link :to="'#'" class="link-name">{{item.title}}</router-link></li> -->
                <sidebar-group-link
                    v-for="child in item.children" :key="child.title"
                    :to="child.route"
                    :item="child"
                />
            </ul>
        </transition>
	</li>
</template>

<script>
/* import { HomeIcon, ChevronRightIcon } from 'vue-feather-icons' */
import IconFeather from '../IconFeather.vue'
import SidebarGroupLink from './SidebarGroupLink.vue'
export default {
    components: {
        SidebarGroupLink,
        IconFeather
    },
    props:['item'],
    data(){
        return {
            collapse: true
        }
    },
    methods: {
        isCollapse: function( ) {
            return this.collapse;
        },
        isActive: function( ) { 
            return window.location.pathname === this.to;
        }, 
        isLink: function( ) {
            return 'iconSrc' in this.item;
        },
        /* collapse: function (e) {
        const arrow = e.target.children[2];
        const link = e.target.nextElementSibling;
        if( link.classList.contains("show") ) {
            link.classList.remove("show");
            arrow.classList.remove("rotate");
        } else {
            link.classList.add("show");
            arrow.classList.add("rotate");
        }
        }, */
        showMenu: function () {
            this.collapse = !this.collapse;
        }
    }
}
</script>

<style>

li .iocn-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
}

li .icon-code.arrow {
    height: 20px;
    min-width: 28px;
    text-align: center;
    line-height: 42px;
    color:#2C2C2C;
    transition: all .2s ease-out;
}


.sidebar .nav-links .has-submenu .iocn-link:hover .icon-code,
.sidebar .nav-links .has-submenu .iocn-link:hover .link_name
{
  color:white;
}

ul.sub-menu {
    /* padding: 6px 6px 14px 80px; */
    padding: 0px;
}

.sidebar .nav-links li ul.sub-menu li {
    height: 42px;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 4px;
    padding-left: 56px;
}

.sidebar.close .nav-links li ul.sub-menu li {
    height: 42px;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 4px;
    padding-left: 5px;
}

.sidebar .nav-links li ul.sub-menu li a {
    padding-top: 10px;
}

ul.sub-menu li:hover{
  background: var(--sidebar-item-active);
  box-shadow: -1px 1px 8px rgba(126, 114, 242, 0.578726);
}
ul.sub-menu li a{
    color: #2C2C2C;
}
ul.sub-menu li:hover a {
    color:white;
}

.arrow.rotate90 {
    transform: rotate(90deg);
}

</style>