<script setup lang="ts">
const props = defineProps<{
    personne: PersonneResponse;
}>()
</script>

<template>
    <NuxtLink
        :to="{name:'personnes-id', params:{id:personne.id}}"
    >
    {{ personne.nom }} {{ personne.prenom }}
    </NuxtLink>
</template>