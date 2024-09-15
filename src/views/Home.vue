<template>
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8">Liste des Articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id" class="mb-4 p-4 border-b">
          <h2 class="text-2xl font-semibold">{{ article.attributes.Title }}</h2>
          
          <!-- Parcourir chaque bloc dans Content -->
          <div v-html="renderContent(article.attributes.Content)"></div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        articles: [],
      };
    },
    mounted() {
      axios.get('http://localhost:1337/api/articles')
        .then(response => {
          this.articles = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      renderContent(contentBlocks) {
        // Parcours chaque bloc du contenu
        return contentBlocks.map(block => {
          if (block.type === 'paragraph') {
            // Récupère le texte des enfants du bloc paragraphe
            return block.children.map(child => child.text).join(' ');
          }
          return ''; // Retourne une chaîne vide pour les autres types de blocs
        }).join('<br>'); // Ajoute un retour à la ligne entre les paragraphes
      }
    }
  };
  </script>  