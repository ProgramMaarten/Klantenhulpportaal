<template>
    <h1>Sanctum ding</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/login">Log in</RouterLink>|
        <RouterLink to="/create">Register</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import { router } from './router';
</script>

<style scoped></style>