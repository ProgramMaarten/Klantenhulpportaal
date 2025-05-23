<template>
  <h1 id="title">Klantenhulpportaal</h1>
  <div class="header">          
    <nav id="nav1">
      <RouterLink to="/">Home</RouterLink> 
    </nav>
    <nav id="nav2">

        <RouterLink to="/Login">Log in</RouterLink> |
        <RouterLink to="/Register">Register</RouterLink> |
        <button @click="logOut()">Logout</button>
    </nav>
  </div>
    <main>
        <RouterView />
    </main>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import axios from 'axios';
import { getRequest, postRequest } from './services/http';
import { router } from './router';

const logOut = async () => {
    axios.defaults.withCredentials = true;
    postRequest('/logout');
};

</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 1;
  
}

#nav1, #nav2 {
  display: flex;
  gap: 10px;
  
}

#title {
  font-size: 2em;
  text-align: center;
  z-index: 2;
  }

button {
  cursor: pointer;
}
</style>