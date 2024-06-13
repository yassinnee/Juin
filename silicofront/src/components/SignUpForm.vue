<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <h2 class="text-center mb-4">Inscription</h2>
       
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" class="form-control" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="lastname">Prenom</label>
        <input type="text" class="form-control" v-model="lastname" required>
      </div>
      <div class="form-group">
        <label for="date_birthday">Date de naissance</label>
        <input type="date" class="form-control" v-model="date_birthday" required>
      </div>
      <div class="form-group">
        <label for="email">Adresse e-mail</label>
        <input type="email" class="form-control" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="type">type</label>
        <input type="type" class="form-control" v-model="type" required>
      </div>
      <button type="submit" class="btn btn-dark btn-block">S'inscrire</button>
    </form>
  </div>
</template>

<script>

import axiosInstance from '@/InstanceAxios';

export default {
  data() {
    return {
      name: '',
      lastname: '',
      date_birthday: '',
      email: '',
      password: '',
      type: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('Submitting form with data:', {
        name: this.name,
        lastname: this.lastname,
        date_birthday: this.date_birthday,
        email: this.email,
        password: this.password,
        type: this.type
      }); // Log les données envoyées
      try {
        const response = await axiosInstance.post('/auth/signup', {
          name: this.name,
          lastname: this.lastname,
          date_birthday: this.date_birthday,
          email: this.email,
          password: this.password,
          type: this.type
        });
        console.log('Form submitted!', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>

<style scoped>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.form-container {
  padding: 30px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background: white;
  width: 100%;
  max-width: 400px;
}
footer {
  top: 20px;
  background: #f8f9fa;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
}
.footer-links a {
  padding: 0 10px;
  color: black;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
</style>
