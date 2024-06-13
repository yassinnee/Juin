<template>
    <div>
      <h2>Prof - Ajouter un Cours</h2>
      <form @submit.prevent="addCourse">
        <div class="form-group">
          <label for="name">Nom du cours</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="date_cours">Date du cours</label>
          <input type="date" class="form-control" id="date_cours" v-model="date_cours" required>
        </div>
        <div class="form-group">
          <label for="desc">Description du cours</label>
          <textarea class="form-control" id="desc" v-model="desc" required></textarea>
        </div>
        <div class="form-group">
          <label for="pictures">URL de l'image du cours</label>
          <input type="text" class="form-control" id="pictures" v-model="pictures">
        </div>
        <button type="submit" class="btn btn-dark">Ajouter le Cours</button>
      </form>
    </div>
  </template>
  
  <script>
  import axiosCoursesInstance from '@/instanceProduct.js';
  
  export default {
    data() {
      return {
        name: '',
        date_cours: '',
        desc: '',
        pictures: ''
      };
    },
    methods: {
      async addCourse() {
        try {
          const userId = localStorage.getItem('userId');
          const response = await axiosCoursesInstance.post('/products', {
            name: this.name,
            date_cours: this.date_cours,
            desc: this.desc,
            pictures: this.pictures,
            idUsers: userId
          });
          console.log('Course added successfully!', response.data);
        } catch (error) {
          console.error('Error adding course:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  