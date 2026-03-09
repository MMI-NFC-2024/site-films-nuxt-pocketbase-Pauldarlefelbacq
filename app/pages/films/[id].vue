<script setup lang="ts">
import ImgPb from '~/components/ImgPb.vue';


const route = useRoute();
const id = route.params.id as string;
const nuxtApp = useNuxtApp();
const film = await nuxtApp.$pb.collection("film").getOne(id);

</script>

<template>
    <h1 class="font-bold text-3xl">{{ film.titre }}</h1>
    <ImgPb :record="film" :filename="film.image" />
    <p v-html="film.synopsis"></p>
    <NuxtLink :to="{name:'films-edit-id', params:{id: film.id} }">Modifier le film</NuxtLink>
</template>