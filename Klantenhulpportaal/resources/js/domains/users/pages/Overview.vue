<template>
    <p>U bent ingelogd</p>
    <tr v-for="(user, index) in users" :key="index">
         <td>{{ user.email }}</td>   
    </tr>
</template>

<script setup>
import {ref, computed} from 'vue';
import { userStore } from '../store';

userStore.actions.getAll();
const users = userStore.getters.all;

</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
}
</style>