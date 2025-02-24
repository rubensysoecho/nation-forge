<script setup>
import NationForm from '../components/NationForm.vue';
import Carousel from '../components/Carousel.vue';
import NationsList from '../components/NationsList.vue';
</script>

<template>
    <div class="absolute top-0 left-0 w-full text-center mt-8 z-20">
        <h1 class="text-6xl font-extrabold mb-8 text-white">⚔️ Generador de Nación ⚔️</h1>
    </div>
    <div class="relative flex justify-center items-center min-h-screen">
        <div class="absolute inset-0 z-0">
            <Carousel />
        </div>
        <div class="relative z-10 flex w-full">
            <div class="w-1/2 p-8">
            <NationForm />
            </div>
            <div class="w-px bg-gray-300"></div>
            <div class="w-1/2 p-8">
            <NationsList />
            </div>
        </div>
    </div>
</template>
