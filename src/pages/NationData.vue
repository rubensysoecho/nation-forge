<script setup>
import { reactive } from 'vue';
import Carousel from '../components/Carousel.vue';
import TextHeader from '../components/TextHeader.vue';
import { useNationStore } from '../store/nationStore';

const dropdowns = reactive({
    historical: false,
    geopolitical: false,
    politics: false,
    population: false,
    curiosities: false,
    characters: false
});

const store = useNationStore()

</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <!-- Hero Section with Carousel -->
        <div class="relative h-[40vh] overflow-hidden">
            <Carousel />
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <h1 class="text-5xl md:text-6xl font-bold text-white text-center">
                    {{ store.nationData.nation_name }}
                </h1>
            </div>
        </div>

        <!-- Content Section -->
        <div class="container mx-auto px-4 py-12">
            <div class="max-w-4xl mx-auto space-y-6">
                <!-- Historical Context -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <button @click="dropdowns.historical = !dropdowns.historical"
                        class="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                        <h2 class="text-2xl font-bold text-white">Contexto Histórico</h2>
                        <svg class="w-6 h-6 text-white transform transition-transform duration-200" 
                            :class="{ 'rotate-180': dropdowns.historical }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div v-if="dropdowns.historical" class="p-6">
                        <p class="text-gray-300 leading-relaxed">{{ store.nationData.historical_context }}</p>
                    </div>
                </div>

                <!-- Geopolitical Context -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <button @click="dropdowns.geopolitical = !dropdowns.geopolitical"
                        class="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                        <h2 class="text-2xl font-bold text-white">Contexto Geopolítico</h2>
                        <svg class="w-6 h-6 text-white transform transition-transform duration-200" 
                            :class="{ 'rotate-180': dropdowns.geopolitical }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div v-if="dropdowns.geopolitical" class="p-6">
                        <p class="text-gray-300 leading-relaxed">{{ store.nationData.geopolitical_context }}</p>
                    </div>
                </div>

                <!-- Politics -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <button @click="dropdowns.politics = !dropdowns.politics"
                        class="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                        <h2 class="text-2xl font-bold text-white">Política</h2>
                        <svg class="w-6 h-6 text-white transform transition-transform duration-200" 
                            :class="{ 'rotate-180': dropdowns.politics }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div v-if="dropdowns.politics" class="p-6">
                        <p class="text-gray-300 leading-relaxed">{{ store.nationData.politics }}</p>
                    </div>
                </div>

                <!-- Population -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <button @click="dropdowns.population = !dropdowns.population"
                        class="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                        <h2 class="text-2xl font-bold text-white">Población</h2>
                        <svg class="w-6 h-6 text-white transform transition-transform duration-200" 
                            :class="{ 'rotate-180': dropdowns.population }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div v-if="dropdowns.population" class="p-6">
                        <p class="text-gray-300 leading-relaxed">{{ store.nationData.population }}</p>
                    </div>
                </div>

                <!-- Historical Curiosities -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <button @click="dropdowns.curiosities = !dropdowns.curiosities"
                        class="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                        <h2 class="text-2xl font-bold text-white">Curiosidades Históricas</h2>
                        <svg class="w-6 h-6 text-white transform transition-transform duration-200" 
                            :class="{ 'rotate-180': dropdowns.curiosities }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div v-if="dropdowns.curiosities" class="p-6">
                        <ul class="space-y-4">
                            <li v-for="(curiosity, index) in store.nationData.historical_curiosities" 
                                :key="index"
                                class="text-gray-300 leading-relaxed flex items-start">
                                <span class="text-blue-400 mr-2">•</span>
                                {{ curiosity }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Important Characters -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <button @click="dropdowns.characters = !dropdowns.characters"
                        class="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                        <h2 class="text-2xl font-bold text-white">Personajes Importantes</h2>
                        <svg class="w-6 h-6 text-white transform transition-transform duration-200" 
                            :class="{ 'rotate-180': dropdowns.characters }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div v-if="dropdowns.characters" class="p-6">
                        <ul class="space-y-4">
                            <li v-for="(character, index) in store.nationData.important_characters" 
                                :key="index"
                                class="text-gray-300 leading-relaxed flex items-start">
                                <span class="text-blue-400 mr-2">•</span>
                                {{ character }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>