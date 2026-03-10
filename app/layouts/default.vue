<!-- <script setup lang="ts">
// import Login from '~/components/Login.vue';

</script> -->

<template>
  <div>
    <nav>
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="/films">Films</nuxt-link>
      <nuxt-link to="/personnes">Personnes</nuxt-link>
      <login />
    </nav>
    <slot />
  </div>
</template>