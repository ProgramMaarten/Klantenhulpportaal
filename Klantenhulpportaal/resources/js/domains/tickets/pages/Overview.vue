<template>
    
    <p>Tickets:</p>
    <tr v-for="(ticket, index) in tickets" :key="index">
         <td>{{ ticket.title }}</td>
         <td>{{ ticket.user_id }}</td>   
    </tr>
</template>

<script setup>
import { ticketStore } from '../index';

ticketStore.actions.getAll();
const tickets = ticketStore.getters.all;

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