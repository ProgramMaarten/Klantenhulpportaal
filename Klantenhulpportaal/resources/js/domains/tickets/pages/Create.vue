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
    
    <button @click="emitTicket">Ticket opslaan</button>

        <p>{{ newTicket }}</p>

</form>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { ticketStore} from '../index';
import { isAdmin, getLoggedInUser } from '../../../services/auth';
import { Ticket } from '../types';
import { categoryStore } from '../../categories';

categoryStore.actions.getAll();
const categories= categoryStore.getters.all;


const userId = getLoggedInUser().id;

const newTicket = ref({id: '', title: '', content: '', category_id: '', status:'In afwachting', user_id: userId});

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