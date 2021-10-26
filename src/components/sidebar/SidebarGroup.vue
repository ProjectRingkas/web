<template>
    <li class="nav-item has-submenu"  >
        <div class="iocn-link" >
            <a class="" href="#" v-on:click="showMenu"> 
                <!-- <home-icon class="icon-code"></home-icon>  -->
                <icon-feather :icon="item.icon" class="icon-code"></icon-feather>
                <span class="link_name">{{ item.title }}</span>
            </a>
            <icon-feather icon="ChevronRight" class="icon-code arrow"></icon-feather>
        </div>
        <ul class="sub-menu">
            <li><router-link :to="'#'" class="link-name">{{item.title}}</router-link></li>
                <sidebar-group-link
                    v-for="child in item.children" :key="child.title"
                    :to="child.route"
                    :item="child"
                ></sidebar-group-link>
        </ul>
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
    created: function () {
        
    },
    methods: {
        isActive: function( ) { 
            return window.location.pathname === this.to;
        }, 
        isLink: function( ) {
            console.log(this.item)
            return 'iconSrc' in this.item;
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
        showMenu: function (e) {
            e.target.parentNode.parentNode.parentNode.classList.toggle("showMenu");
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
    color:black;
}


.sidebar .nav-links .has-submenu div.iocn-link:hover .icon-code,
.sidebar .nav-links .has-submenu div.iocn-link:hover .link_name
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
    color: black;
}
ul.sub-menu li:hover a {
    color:white;
}

</style>