<script setup lang="ts">
const film = ref({} as FilmResponse)
const nuxtApp = useNuxtApp();
const route = useRoute();
const id = route.params.id;

async function submitFilm() {
    if (id)
    {
        const filmEdite = await nuxtApp.$pb.collection("film").update(id as string, {
            ...film.value,
            user:nuxtApp.$user.value?.id,
        });
        if (filmEdite) 
            {
                useRouter().push({name:"films-id", params:{id:filmEdite.id}})
            }
    }
    else
    {
        const filmAjoute = await nuxtApp.$pb.collection("film").create({
                ...film.value,
                user:nuxtApp.$user.value?.id,
            });
            if (filmAjoute) 
            {
                useRouter().push({name:"films-id", params:{id:filmAjoute.id}})
            }
    }
    
}
</script>

<template>

    <form class="flex flex-col" @submit.prevent="submitFilm">
        <label>
            Titre
            <input type="text" v-model="film.titre">
        </label>

        <label>
            Date de sortie
            <input type="date" v-model="film.date_sortie">
        </label>

        <label>
            Synopsis
            <textarea v-model="film.synopsis" rows="5"></textarea>
        </label>

        <label>
            Langue
            <input type="text" v-model="film.langue">
        </label>

        <label>
            Durée
            <input type="number" v-model="film.duree">
        </label>

        <label>
            Genre
            <select v-model="film.genre" multiple>
                <option v-for="genre in FilmGenreOptions" :value="genre">{{ genre }}</option>
            </select>
        </label>
        <button>Envoyer</button>
    </form>

</template>