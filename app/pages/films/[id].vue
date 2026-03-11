<script setup lang="ts">
import ImgPb from '~/components/ImgPb.vue';
import Multiselect from 'vue-multiselect';

import type {
  FilmResponse,
  PersonneResponse,
  RoleResponse,
} from "../../utils/pocketbase-types";
import LinkPersonne from '~/components/LinkPersonne.vue';
1

const route = useRoute();
const id = route.params.id as string;
const nuxtApp = useNuxtApp();

type FilmAvecExpand = FilmResponse<{
    producteur: PersonneResponse;
    realisateurs: PersonneResponse[];
    Role_via_film: RoleResponse<{
        acteur: PersonneResponse;
    }>[];
}>;
    const film= ref({} as FilmAvecExpand)
    await miseAJourFilm();

async function miseAJourFilm() {
    film.value = await nuxtApp.$pb.collection<FilmAvecExpand>('film').getOne(id, {
        expand: "producteur, realisateurs, Role_via_film.acteur"
    });
}

const role = ref({} as RoleRecord);
const personnes = await nuxtApp.$pb.collection("personne").getFullList();

async function addRole() {
    const nouveauRole = await nuxtApp.$pb.collection("role").create({
        nom: role.value.nom,
        acteur: role.value.acteur?.id || role.value.acteur,
        film: id,
    })
    await miseAJourFilm();
};

async function deleteRole(id: string) {
    await nuxtApp.$pb.collection('role').delete(id)
    await miseAJourFilm()
}

</script>

<template>
    <h1 class="font-bold text-3xl">{{ film.titre }}</h1>
    <ImgPb :record="film" :filename="film.image" />
    <p v-html="film.synopsis"></p>
    <h3>Producteur</h3>
    <LinkPersonne v-if="film.expand?.producteur" :personne="film.expand.producteur" />
    <p v-else>Aucun producteur pour ce film</p>

    <h3>Réalisateur</h3>
    <LinkPersonne v-if="film.expand?.realisateur" :personne="film.expand.realisateur" />
    <p v-else>Aucun réalisateur pour ce film</p>

    <h3>Roles</h3>
    <ul>
        <li class="flex flex-col mx-auto w-fit text-center" v-for="role in film.expand?.Role_via_film">
            Role de {{ role.nom }} joué par 
            <span class="link font-bold">
                <LinkPersonne  v-if="role.expand?.acteur" :personne="role.expand.acteur" />
                <div class="w-0 h-0.5 link-hover:w-full bg-black"></div>
            </span>
            <button @click="deleteRole(role.id)">Supprimer</button>
        </li>
    </ul>

    <p>Ajouter un nouveau role :</p>
    <label>
        Nom du role
        <input type="text" v-model="role.nom">
        <Multiselect 
            v-model="role.acteur"
            :options="personnes"
            label="nom"
            value-prop="id"
        />
            <button @click="addRole">ajouter un role</button>
    </label>

    <NuxtLink :to="{name:'films-edit-id', params:{id} }">Modifier le film</NuxtLink>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
