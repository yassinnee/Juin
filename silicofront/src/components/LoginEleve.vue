<template>
    <div>
      <h2>Élève - Cours Disponibles</h2>
      <div v-for="course in courses" :key="course.id" class="course">
        <h3>{{ course.name }}</h3>
        <p>{{ course.desc }}</p>
        <p>Date: {{ course.date_cours }}</p>
        <img v-if="course.pictures" :src="course.pictures" alt="Course Image" />
      </div>
    </div>
  </template>
  
  <script>
  import axiosCoursesInstance from '@/instanceProduct.js';
  
  export default {
    data() {
      return {
        courses: []
      };
    },
    async created() {
      try {
        const response = await axiosCoursesInstance.get('/');
        this.courses = response.data;
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .course {
    border: 1px solid #dee2e6;
    padding: 15px;
    margin-bottom: 15px;
  }
  </style>
  