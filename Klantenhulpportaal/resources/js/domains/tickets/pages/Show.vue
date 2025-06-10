<template>
<p> SHOW{{ id }}</p>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import { ticketStore} from '../index';
import { isAdmin, getLoggedInUser } from '../../../services/auth';
import { categoryStore } from '../../categories';
import {useRoute} from 'vue-router';
const route = useRoute();
const id = route.params.id;


</script>
<style scoped>
</style>