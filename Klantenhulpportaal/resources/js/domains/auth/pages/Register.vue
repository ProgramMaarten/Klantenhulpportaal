<template>
    <h1>Hallo</h1>
    <form>
        <input v-model="newCredentials.name" type="text" placeholder="Username">
        <input v-model="newCredentials.email" type="email" placeholder="test123@example.com">
        <input v-model="newCredentials.password" type="password" placeholder="password">
        <button @click.prevent="register(newCredentials)">Register</button>
    </form>
    
</template>

<script setup>
import {ref, computed} from 'vue';
import { userStore } from '../../users';

const newCredentials = ref({name: '', email: '', password:'', is_admin: 0})

// interface Credentials {
//     name: string,
//     email: string,
//     password: string,
//     is_admin: boolean
// };

const register = async (credentials)=>{ 
    console.log(credentials);
    try{
    await userStore.actions.create(credentials);
    console.log('Registration successful');
} catch (error) {
        if (error.response) {
            console.error('Response Error:', error.response.data);
        } else if (error.request) {
            console.error('Request Error:', error.request);
        } else {
            console.error('General Error:', error.message);
        }
    }
};
</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
}
</style>