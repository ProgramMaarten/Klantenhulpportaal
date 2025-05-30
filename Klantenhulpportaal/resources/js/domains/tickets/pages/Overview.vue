<template>
    
    <p>Tickets:</p>
    <tr>
         <th>ID</th>
         <th>Titel</th>
         <th>Categorie</th>
         <th>Status</th>   
         <th>Aangemaakt door</th>   
         <th>Aangemaakt op</th>
         <th>Laatste update op</th>
         <th>Toegewezen aan</th> 

    </tr>
    <tr v-for="(ticket, index) in tickets" :key="index">
         <td>{{ ticket.id }}</td>
         <td>{{ ticket.title }}</td>
         <td>{{ ticket.category_id }}</td>
         <td>{{ ticket.status }}</td>   
         <td>{{ ticket.user_id }}</td>   
         <td>{{ Date(ticket.created_at) }}</td>
         <td>{{ ticket.updated_at }}</td>   
         <td>{{ ticket.admin_id }}</td>   


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