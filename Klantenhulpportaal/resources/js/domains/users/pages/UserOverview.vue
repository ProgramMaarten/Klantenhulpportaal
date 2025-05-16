<template>
    
    <div v-if="checkUser">
    <p>Users:</p>
    <tr v-for="(user, index) in users" :key="index">
         <td>{{ user.email }}</td>   
    </tr>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import { userStore } from '../store';
import { getRequest, postRequest } from '../../../services/http';

userStore.actions.getAll();
const users = userStore.getters.all;


const checkUser= ref('');
const check = async () => {
    const {data} = await getRequest('/check')
    checkUser.value = data
};
check();
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