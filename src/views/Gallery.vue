<template>
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8">Gallery</h1>
      <div class="inline-grid grid-cols-3 gap-4"> <!-- Utiliser inline-grid pour ajuster la largeur au contenu -->
        <!-- Afficher les images récupérées depuis Strapi -->
        <div v-for="image in gallery" :key="image.id">
          <!-- Redimensionner les images -->
          <img :src="getImageUrl(image)" alt="Gallery Image" class="w-48 h-auto" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        gallery: [],
      };
    },
    mounted() {
      // Requête pour récupérer les images de la collection "Gallery"
      axios.get('http://localhost:1337/api/galleries?populate=*')
        .then(response => {
          this.gallery = response.data.data[0].attributes.Media.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      getImageUrl(image) {
        return `http://localhost:1337${image.attributes.url}`;
      }
    }
  };
  </script>