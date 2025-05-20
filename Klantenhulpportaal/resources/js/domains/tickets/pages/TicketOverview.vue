<template>
    
    <div v-if="checkUser">
    <p>Tickets:</p>
    <tr v-for="(ticket, index) in tickets" :key="index">
         <td>{{ ticket.title }}</td>
         <td>{{ ticket.user_id }}</td>   
    </tr>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import { ticketStore } from '../store';
import { getRequest, postRequest } from '../../../services/http';

ticketStore.actions.getAll();
const tickets = ticketStore.getters.all;

const checkUser= ref('');
const check = async () => {
    const {data} = await getRequest('/check')
    checkUser.value = data
    console.log(data)
};
check();

const currentUser= ref('');
const me = async () => {
    const {data} = await getRequest('/me')
    currentUser.value = data
    console.log(data)
};
me();
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