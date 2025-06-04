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
    <tr v-if="isAdmin"><td colspan="8">Tickets voor mij</td></tr>
    <tr v-for="(ticket, index) in adminTickets" :key="index" v-if="isAdmin">
         <td>{{ ticket.id }}</td>
         <td>{{ ticket.title }}</td>
         <td>{{ ticket.category_id }}</td>
         <td>{{ ticket.status }}</td>   
         <td>{{ ticket.user_id }}</td>   
         <td>{{ formatDate(ticket.created_at) }}</td>
         <td>{{ formatDate(ticket.updated_at) }}</td>   
         <td>{{ ticket.admin_id }}</td> 
    </tr>
    <tr v-if="isAdmin"><td colspan="8">Alle Tickets</td></tr>
    <tr v-for="(ticket, index) in tickets" :key="index">
         <td>{{ ticket.id }}</td>
         <td>{{ ticket.title }}</td>
         <td>{{ ticket.category_id }}</td>
         <td>{{ ticket.status }}</td>   
         <td>{{ ticket.user_id }}</td>   
         <td>{{ formatDate(ticket.created_at) }}</td>
         <td>{{ formatDate(ticket.updated_at) }}</td>   
         <td>{{ ticket.admin_id }}</td> 
    </tr>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { ticketStore, formatDate } from '../index';
import { isAdmin, getLoggedInUser } from '../../../services/auth';

const userId = getLoggedInUser().id;
ticketStore.actions.getAll();
const adminTickets = computed(()=>{
    return ticketStore.getters.all.value.filter(ticket => ticket.admin_id === userId)
});

const tickets = computed(() =>{
  if (isAdmin.value){
    return ticketStore.getters.all.value
  } else {
    return ticketStore.getters.all.value.filter(ticket => ticket.user_id === userId);
  }
});


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