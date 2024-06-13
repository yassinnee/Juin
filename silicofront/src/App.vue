<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/Prof">Prof</router-link>
        <router-link to="/eleve">eleve</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 My Vue App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
