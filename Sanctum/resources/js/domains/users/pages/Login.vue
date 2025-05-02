<template>
    <h1>Hallo</h1>
    <form>
        <input v-model="credentials.email" type="email" placeholder="test@example.com">
        <input v-model="credentials.password" type="password" placeholder="password">
        <button @click.prevent="logIn()">Log in</button>
    </form>

    <button @click="me">Check login</button>
    <p>Hello {{currentUser}}</p>
</template>

<script setup>
import axios from 'axios';
import {ref, computed} from 'vue';
import { userStore } from '../store';
import { getRequest, postRequest } from '../../../services/http';
import { router } from '../../../router';
// axios.get('/sanctum/csrf-cookie').then(response => {
//     // Login...
// });
userStore.actions.getAll();
const users = userStore.getters.all;

const credentials = ref({email: '', password:''})
const currentUser= ref('');
const me = async () => {
    const {data} = await getRequest('/me')
    currentUser.value = data
};




const logIn = async ()=> {
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    await axios.get('/sanctum/csrf-cookie');
    postRequest('/login', credentials.value);
    
};

</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
}
</style>