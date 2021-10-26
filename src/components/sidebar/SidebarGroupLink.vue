<template>
    <li>
        <router-link :to="to" class="">
            {{item.title}}
        </router-link>
    </li>
  
</template>

<script>
export default {
    props: ['item', 'to']
}
</script>

<style >
    a {
        color: black;
    } 
    
</style>