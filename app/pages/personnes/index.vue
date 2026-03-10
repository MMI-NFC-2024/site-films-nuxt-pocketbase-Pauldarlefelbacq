<script setup lang="ts">
import ImgPb from '~/components/ImgPb.vue';

const nuxtApp = useNuxtApp();

const personnes = await nuxtApp.$pb.collection("personne").getFullList();
</script>

<template>
    <h1 class="text-3xl font-bold">index personnes</h1>
    <ul>
        <li v-for="personne in personnes">
            <NuxtLink :to="{ name: 'personnes-id', params: { id: personne.id } }">{{ personne.nom }} - {{ personne.prenom }}</NuxtLink>
            <ImgPb class="size-12" :record="personne" :filename="personne.image" />
        </li>
    </ul>
    <NuxtLink to="/personnes/edit/:id?">Ajouter un personne</NuxtLink>
</template>