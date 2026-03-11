<script setup lang="ts">
import Multiselect from 'vue-multiselect';
const props = defineProps <{
    personne: PersonneResponse[];
    name: string;
    value: string[];
    multiple: boolean;
}>();

const personneId = ref(props.value);

</script>

<template>
    <div>
        <Multiselect 
        v-model="role.acteur"
        :options="personnes"
        label="nom"
        value-prop="id"
    />
    Valeur : {{ personneId }}
    <!-- <input v-for="p in multiple ? personneId : [personneId]" type="hidden" :value="p" :name="name" :key="p" /> -->
    </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>