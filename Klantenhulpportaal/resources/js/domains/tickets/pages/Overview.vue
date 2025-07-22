<template>
    
    <p>Tickets:</p>
    <table>
      <thead>
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
    </thead>
    <tbody>
    <tr v-if="isAdmin"><td colspan="8">Tickets voor mij</td></tr>
    <tr v-for="(ticket, index) in adminTickets" :key="index" v-if="isAdmin">
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.id }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.title }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.category_id }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.status }}</RouterLink></td>   
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.user_id }}</RouterLink></td>   
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ formatDate(ticket.created_at) }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ formatDate(ticket.updated_at) }}</RouterLink></td>   
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.admin_id }}</RouterLink></td>
         <td v-if="isAdmin"><RouterLink :to="{name: 'tickets.edit', params: { id: ticket.id }}">Bewerken</RouterLink></td> 
    </tr>
    <tr v-if="!isAdmin"><td colspan="8">Mijn Tickets</td></tr>
    <tr v-if="isAdmin"><td colspan="8">Alle Tickets</td></tr>
    <tr v-for="(ticket, index) in tickets" :key="index">
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.id }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.title }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.category_id }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.status }}</RouterLink></td>   
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.user_id }}</RouterLink></td>   
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ formatDate(ticket.created_at) }}</RouterLink></td>
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ formatDate(ticket.updated_at) }}</RouterLink></td>   
         <td><RouterLink :to="{name: 'tickets.show', params: { id: ticket.id }}">{{ ticket.admin_id }}</RouterLink></td>
         <td v-if="isAdmin"><RouterLink :to="{name: 'tickets.edit', params: { id: ticket.id }}">Bewerken</RouterLink></td>
  </tr>
  </tbody> 
  </table>
    
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