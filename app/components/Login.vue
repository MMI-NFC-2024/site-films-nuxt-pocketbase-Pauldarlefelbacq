<script setup lang="ts">

const nuxtApp = useNuxtApp();
async function loginGit() {
    const authData = await nuxtApp.$pb.collection("users").authWithOAuth2({ provider: "github" })
    console.log("login réussi avec github : ", authData);
}
const user = nuxtApp.$user;

</script>

<template>
    <button v-if="user" @click="nuxtApp.$pb.authStore.clear">Se déconnecter {{ user?.name || user?.email }}</button>
    <button v-else @click="loginGit">Se connecter avec github</button>
</template>