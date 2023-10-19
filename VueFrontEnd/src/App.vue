<template>
    <nav> 

        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/createuser">Create User</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink ,RouterView } from 'vue-router';

export default defineComponent({
   components: {
     RouterLink ,RouterView
   }
});
</script>

<style>
/* Your styles go here */
</style>
