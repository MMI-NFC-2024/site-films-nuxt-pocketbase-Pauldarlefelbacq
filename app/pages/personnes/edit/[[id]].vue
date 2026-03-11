<script setup lang="ts">
import ImgPb from '~/components/ImgPb.vue';
import MultiSelectPersonnes from '~/components/MultiSelectPersonnes.vue';

const nuxtApp = useNuxtApp();
const route = useRoute();

const personne = ref({} as PersonneResponse)
const personnes = await nuxtApp.$pb.collection("personne").getFullList();
const id = route.params.id;
const URL = globalThis.URL;
console.log(id);


onMounted(async () => {
    if (id != ':id') {
        personne.value = await nuxtApp.$pb.collection("personne").getOne(id as string);
        personne.value.date_naissance = (new Date(personne.value.date_naissance)).toISOString().split("T")[0] as string;
    }
});

async function submitpersonne() {
    if (id != ':id')
    {
        const personneEdite = await nuxtApp.$pb.collection("personne").update(id as string, {
            ...personne.value,
            user:nuxtApp.$user.value?.id,
        });
        if (personneEdite)
            {
                useRouter().push({name:"personnes-id", params:{id:personneEdite.id}})
            }
    }
    else
    {
        const personneAjoute = await nuxtApp.$pb.collection("personne").create({
                ...personne.value,
                user:nuxtApp.$user.value?.id,
            });
            if (personneAjoute) 
            {
                useRouter().push({name:"personnes-id", params:{id:personneAjoute.id}})
            }
    }
    
}
</script>

<template>

    <form class="flex flex-col" @submit.prevent="submitpersonne">
        <div v-if="personne.image">
            <ImgPb v-if="typeof personne.image === 'string'" :record="personne" :filename="personne.image" />
            <img v-else :src="URL.createObjectURL(personne.image)" alt="" />
            <button @click.prevent="personne.image=null">Supprimer l'image</button>
        </div>
        <label v-else>
            <input type="file" @change="personne.image = ($event.target as HTMLInputElement)?.files?.[0]" />
        </label>
        <label>
            Nom
            <input type="text" v-model="personne.nom">
        </label>

        <label>
            Prénom
            <input type="text" v-model="personne.prenom">
        </label>

        <label>
            Date de naissance
            <input type="date" v-model="personne.date_naissance">
        </label>

        <label>
            Langue
            <input type="text" v-model="personne.nationalite">
        </label>

        <label>
            Profession
            <select v-model="personne.profession" multiple>
                <option v-for="profession in PersonneProfessionOptions" :value="profession">{{ profession }}</option>
            </select>
        </label>

        <MultiSelectPersonnes :personne="[personne]" name="profession" :value="personne.profession" multiple client:load />


        <button>Envoyer</button>
    </form>

</template>