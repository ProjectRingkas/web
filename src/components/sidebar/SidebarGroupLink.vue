<template>
    <li :class="{ 'active' : active }">
        <router-link :to="to" class="">
            {{item.title}}
        </router-link>
    </li>
  
</template>

<script>
export default {
    props: ['item', 'to'],
    data() {
        return {
            active: false
        }
    },
    watch:{
        $route: {
            immediate: true,
            handler() {
                this.isActive()
            },
        }
    },
    methods: {
        isActive: function(){
            var path = '/' + window.location.pathname.split('/')[1];
            if(path == this.to) this.active = true;
            else this.active = false;
        }
    }
}
</script>