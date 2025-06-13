<template>
    <div v-if="isAdmin">
        <label>Toegewijzen aan:</label>
        <input v-model="editableTicket.admin_id" placeholder="admin_id" type="number" />
        <select v-model="editableTicket.status">
      <option v-for="status in statusArray">
          {{ status }}
      </option>
    </select> 
    <button @click.prevent="assignTicket(editableTicket)">Opslaan</button>
    </div>
    <p>{{ ticket}}</p>
    <br><br>
    <div v-if="ticket">
        <h1>Ticket {{ ticket.id }}: {{ ticket.title }}</h1>
        <p>User:{{ getUserinfo(ticket.user_id)?.email	 }}</p>
        <p>{{ ticket.content }}</p>
    </div>

    
</template>
<script setup lang="ts">
import { statusArray, ticketStore} from '../index';
import { userStore } from '../../users';
import { getCurrentRouteId } from '../../../services/router';
import { isAdmin } from '../../../services/auth';
import { ref } from 'vue';
import { Ticket } from '../types';

ticketStore.actions.getAll()
userStore.actions.getAll()

const ticket = ticketStore.getters.byId(getCurrentRouteId());

const editableTicket = ref({...ticket.value});


const getUserinfo = (userId: number) => userStore.getters.byId(userId).value;


const assignTicket = async (ticket:Ticket)=> {
    try {
    await ticketStore.actions.update(ticket.id,ticket);
    console.log('Ticket created successfully!');
    } catch (error) {
    console.error('Error creating ticket:', error.response || error);
    }
};
</script>
<style scoped>
</style>