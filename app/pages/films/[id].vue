<script setup lang="ts">

const route = useRoute();
const id = route.params.id as string;
const nuxtApp = useNuxtApp();
const film = await nuxtApp.$pb.collection("film").getOne(id);

</script>

<template>
    <h1 class="font-bold text-3xl">{{ film.titre }}</h1>
    <p>{{ film.image }}</p>
</template>