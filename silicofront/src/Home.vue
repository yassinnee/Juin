<!-- src/App.vue ou src/views/Home.vue -->
<template>
  <div id="app">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from './components/SignUpForm.vue';

export default {
  components: {
    SignUpForm
  }
};
</script>

<style>
/* Vos styles globaux ici */
</style>
