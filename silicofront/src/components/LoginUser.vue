<template>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <h2 class="text-center mb-4">Connexion</h2>
        <div class="form-group">
          <label for="email">Adresse e-mail</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-dark btn-block">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  import LoginInstance from '@/LoginInstance';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async submitForm() {
        console.log('Submitting form with data:', {
          email: this.email,
          password: this.password
        });
        try {
          const response = await LoginInstance.post('/auth/login', {
            email: this.email,
            password: this.password
          });
          console.log('Login successful!', response.data);
        console.log('Response Data:', response.data); // Affiche les données de réponse du backend
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userType', response.data.user.type);

        if (response.data.user.type === 'P') {
          console.log('Redirecting to /prof');
          this.$router.push('/prof');
        } else if (response.data.user.type === 'E') {
          console.log('Redirecting to /eleve');
          this.$router.push('/eleve');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  }
};
</script>
  
  <style scoped>
  .form-container {
    padding: 30px;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    background: white;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  