<script setup>
import { reactive } from 'vue';
import Carousel from '../components/Carousel.vue';
import { useNationStore } from '../store/nationStore';

const dropdowns = reactive({
    historical: false,
    geopolitical: false,
    politics: false,
    population: false,
    curiosities: false
});

const store = useNationStore()

</script>

<template>
    <div class="relative min-h-screen overflow-y-auto">
        <Carousel />
        <div class="absolute inset-0 z-10 p-8 text-white">
            <h1 class="text-5xl font-bold mb-6 text-center">⚔️ {{ store.nationData.nation_name }} ⚔️</h1>

            <div class="mb-4">
                <button @click="dropdowns.historical = !dropdowns.historical"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Contexto Histórico</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.historical }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.historical" class="mt-2">
                    <p class="text-base">{{ store.nationData.historical_context }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.geopolitical = !dropdowns.geopolitical"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Contexto Geopolítico</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.geopolitical }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.geopolitical" class="mt-2">
                    <p class="text-base">{{ store.nationData.geopolitical_context }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.politics = !dropdowns.politics"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Política</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.politics }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.politics" class="mt-2">
                    <p class="text-base">{{ store.nationData.politics }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.population = !dropdowns.population"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Población</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.population }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.population" class="mt-2">
                    <p class="text-base">{{ store.nationData.population }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.curiosities = !dropdowns.curiosities"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Curiosidades Históricas</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.curiosities }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.curiosities" class="mt-2">
                    <ul>
                        <li v-for="(curiosity, index) in store.nationData.historical_curiosities" :key="index"
                            class="text-base">
                            {{ curiosity }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.characters = !dropdowns.characters"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Personajes Importantes</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.characters }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.characters" class="mt-2">
                    <ul>
                        <li v-for="(character, index) in store.nationData.important_characters" :key="index"
                            class="text-base">
                            {{ character }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>