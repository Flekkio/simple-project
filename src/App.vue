<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-4">
        <li><a href="#" @click="currentPage = 'home'" class="text-white">Home</a></li>
        <li><a href="#" @click="currentPage = 'gallery'" class="text-white">Gallery</a></li>
      </ul>
    </nav>

    <!-- Changer de page en fonction de currentPage -->
    <div v-if="currentPage === 'home'">
      <Home /> <!-- Ou ton contenu principal -->
    </div>
    <div v-if="currentPage === 'gallery'">
      <Gallery />
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'; // Si nécessaire
import Gallery from './components/Gallery.vue';

export default {
  data() {
    return {
      currentPage: 'home', // Par défaut, la page est "home"
    };
  },
  components: {
    Home,
    Gallery,
  },
};
</script>