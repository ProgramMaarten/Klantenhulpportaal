<template>
    <div v-if="ticket">
        <h1>Ticket {{ ticket.id }}: {{ ticket.title }}</h1>
        <p>User:{{ getUserinfo(ticket.user_id).value.email	 }}</p>
        <p>{{ ticket.content }}</p>
    </div>
    <div v-if="isAdmin">
        <label>Toegewijzen aan:</label><input v-model="ticket.admin_id" placeholder="admin_id" type="number" />
        <select v-model="ticket.status">
      <option v-for="status in statusArray">
          {{ status }}
      </option>
    </select> 

    <button @click.prevent="putTicket(ticket)">Opslaan</button>

    </div>
</template>
<script setup lang="ts">
import { statusArray, ticketStore} from '../index';
import { userStore } from '../../users';
import { getCurrentRouteId } from '../../../services/router';
import { isAdmin } from '../../../services/auth';
import { ref } from 'vue';

ticketStore.actions.getAll()
userStore.actions.getAll()

const ticket = ticketStore.getters.byId(getCurrentRouteId())

const getUserinfo = (userId: number) => userStore.getters.byId(userId)


const putTicket = async Ticket=> {
    try {
    await ticketStore.actions.update(getCurrentRouteId(),Ticket);
    console.log('Ticket created successfully!');
    } catch (error) {
    console.error('Error creating ticket:', error.response || error);
    }
};
</script>
<style scoped>
</style>