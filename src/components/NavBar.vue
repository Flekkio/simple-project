<template>
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-white hover:text-gray-400 transition-colors duration-300" active-class="font-bold">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/gallery" class="text-white hover:text-gray-400 transition-colors duration-300" active-class="font-bold">
            Gallery
          </router-link>
        </li>
      </ul>
    </nav>
  </template>  