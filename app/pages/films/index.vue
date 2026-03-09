<script setup lang="ts">
import ImgPb from '~/components/ImgPb.vue';

const nuxtApp = useNuxtApp();

const films = await nuxtApp.$pb.collection("film").getFullList();
</script>

<template>
    <h1 class="text-3xl font-bold">index films</h1>
    <ul>
        <li v-for="film in films">
            <NuxtLink :to="{ name: 'films-id', params: { id: film.id } }">{{ film.titre }}</NuxtLink>
            <ImgPb class="size-12" :record="film" :filename="film.image" />
        </li>
    </ul>
    <NuxtLink to="/films/edit/:id?">Ajouter un film</NuxtLink>
</template>