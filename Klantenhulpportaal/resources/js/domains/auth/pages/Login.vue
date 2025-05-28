<template>
    <h1>Hallo</h1>
    <form>
        <input v-model="credentials.email" type="email" placeholder="test@example.com">
        <input v-model="credentials.password" type="password" placeholder="password">
        <button @click.prevent="logIn">Log in</button>
    </form>
<!-- 
    <button @click="me">Check login</button>
    <p>Hello {{currentUser.first_name}} {{ currentUser.last_name }}</p> -->
</template>

<script setup>
import axios from 'axios';
import {ref, computed} from 'vue';
import { userStore } from '../../users';
import { getRequest, postRequest } from '../../../services/http';
import { login } from '../../../services/auth';
import { goToRoute } from '../../../services/router';

const credentials = ref({email: '', password:''})



const logIn = async ()=> {
    await login(credentials.value);

};

</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
}

button {
  cursor: pointer;
}
</style>