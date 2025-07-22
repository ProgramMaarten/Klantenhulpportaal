<template>
    <!-- <div v-if="isAdmin">
        <label>Toegewijzen aan:</label>
    <select v-model="editableTicket.admin_id">
      <option v-for="admin in admins" :value="admin.id">
          {{ admin.first_name }}
      </option>
    </select>
    <select v-model="editableTicket.status">
      <option v-for="status in statusArray">
          {{ status }}
      </option>
    </select> 
    <button @click.prevent="assignTicket(editableTicket)">Opslaan</button>
    </div> -->
    <p>{{ ticket}}</p>
    <br><br>
    <div v-if="ticket">
        <h1>Ticket {{ ticket.id }}: {{ ticket.title }}</h1>
        <p>Status: {{ ticket.status }}</p>
        <p>User:{{ getUserinfo(ticket.user_id)?.email	 }}</p>
        <p>Admin:{{ getUserinfo(ticket.admin_id)?.email	 }}</p>
        <p>Laatst geüpdate:{{ ticket.updated_at }}</p>
        <p>Aangemaakt op:{{ ticket.created_at }}</p>
        <p>ticket: {{ ticket.content }}</p>
    </div>

    
</template>
<script setup lang="ts">
import { statusArray, ticketStore} from '../index';
import { userStore } from '../../users';
import { getCurrentRouteId } from '../../../services/router';
import { isAdmin } from '../../../services/auth';
import { ref,computed } from 'vue';
import { Ticket } from '../types';
import { User } from '../../users/types';

ticketStore.actions.getAll()
userStore.actions.getAll()
const allUsers= userStore.getters.all
console.log(allUsers.value)
const admins=allUsers.value.filter((user:User) => user.is_admin === 1);
console.log(admins)

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