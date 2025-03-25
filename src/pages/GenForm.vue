<script setup>
import NationForm from '../components/NationForm.vue';
import Carousel from '../components/Carousel.vue';
import NationsList from '../components/NationsList.vue';
</script>

<template>
    <div class="relative min-h-screen">
        <!-- Background with Carousel -->
        <div class="absolute inset-0 z-0">
            <Carousel />
            <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        <!-- Title -->
        <div class="absolute top-0 left-0 w-full text-center mt-12 z-20">
            <h1 class="text-7xl font-extrabold mb-4 text-white drop-shadow-lg">⚔️ Generador de Nación ⚔️</h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">Crea tu propio mundo y da vida a una nación única</p>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 flex justify-center items-center min-h-screen pt-32 pb-12">
            <div class="flex w-full max-w-7xl mx-auto px-4">
                <!-- Form Section -->
                <div class="w-1/2 pr-8">
                    <div class="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700/50">
                        <h2 class="text-2xl font-bold text-white mb-8 flex items-center">
                            <span class="mr-2">🎯</span>
                            Crea tu Nación
                        </h2>
                        <NationForm />
                    </div>
                </div>

                <!-- Divider -->
                <div class="w-px bg-gradient-to-b from-transparent via-gray-500/30 to-transparent"></div>

                <!-- Nations List Section -->
                <div class="w-1/2 pl-8">
                    <div class="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700/50">
                        <h2 class="text-2xl font-bold text-white mb-8 flex items-center">
                            <span class="mr-2">🌍</span>
                            Naciones Generadas
                        </h2>
                        <NationsList />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
