<script setup lang="ts">
import ImgPb from '~/components/ImgPb.vue';


const route = useRoute();
const id = route.params.id as string;
const nuxtApp = useNuxtApp();
const personne = await nuxtApp.$pb.collection("personne").getOne(id);

</script>

<template>
    <h1 class="font-bold text-3xl">{{ personne.nom }} - {{ personne.prenom }}</h1>
    <ImgPb :record="personne" :filename="personne.image" />
    <NuxtLink :to="{name:'personnes-edit-id', params:{id: personne.id} }">Modifier le personne</NuxtLink>
</template>