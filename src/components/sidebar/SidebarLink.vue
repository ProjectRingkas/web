<template>
    <li class="first-link">
        <router-link v-bind:to="to" class="link" :class="{ 'link-active': isActive(to) }" >
            <home-icon class="icon-code"></home-icon>
            <span class="link_name">{{ item.title }}</span>
        </router-link>
    </li>
</template>

<script>
import { HomeIcon } from 'vue-feather-icons'

export default {
    components: {
        HomeIcon 
    },
    created: function () {},
    props: ['to', 'title', 'iconSrc', 'item'],
    methods: {
        isActive: function( to ) { 
            return window.location.pathname === to;
        }, 
        isLink: function( ) {
            console.log(this.item)
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
        } */
    }
} 
</script>
<style>

li .icon-code {
    height: 20px;
    min-width: 48px;
    text-align: center;
    line-height: 42px;
    color:#2C2C2C;
}

.sidebar .nav-links li.first-link:hover .icon-code,
.sidebar .nav-links li.first-link:hover .link_name
{
  color:white;
}

li.first-link {
    position: relative;
    list-style-type: none;
    border-radius: 4px;
}

li a {
    display: flex;
    align-items: center;
    text-decoration: none;
}

li a .link_name {
    align-items: center;
    display: inline-flex;
    height: 42px;
    font-size: 16px;
    font-weight: 400;
    color: #2C2C2C;
    cursor: pointer;
    /* transition: all 0.3s ease; */
}

</style>