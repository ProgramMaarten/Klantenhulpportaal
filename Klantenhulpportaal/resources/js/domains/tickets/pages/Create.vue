<template>
<h1>Nieuwe ticket</h1>
<form>
    <label>Title</label>            
    <input v-model="newTicket.title" placeholder="Titel" type="text" />
    <label>Inhoud</label>
    <input v-model="newTicket.content" placeholder="inhoud" type="text" step="0.01" />

    <select v-model="newTicket.category_id">
      <option v-for="category in categories" :value="category.id">
          {{ category.name }}
      </option>
    </select> 
    
    <button @click.prevent="postTicket(newTicket)">Ticket opslaan</button>

        <p>{{ newTicket }}</p>

</form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { ticketStore} from '../index';
import { isAdmin, getLoggedInUser } from '../../../services/auth';

import { categoryStore } from '../../categories';

categoryStore.actions.getAll();
const categories= categoryStore.getters.all;


const userId = getLoggedInUser().id;

const newTicket = ref({title: '', content: '', category_id: '', status:'In afwachting', user_id: userId});

const postTicket = async ticket=> {
    try {
    await ticketStore.actions.create(ticket);
    console.log('Ticket created successfully!');
    } catch (error) {
    console.error('Error creating ticket:', error.response || error);
    }
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