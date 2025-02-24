<script setup>
    import Carousel from '../components/Carousel.vue';
    import RouteButton from '../components/RouteButton.vue';
</script>

<template>
    <div class="relative">
        <Carousel />
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 class="text-5xl md:text-7xl font-bold drop-shadow-lg">Nation Forge</h1>
            <h2 class="text-lg md:text-2xl italic opacity-90 mt-2">La historia es tuya</h2>
            <div class="mt-6">
                <RouteButton routeTo="/nation/generate"></RouteButton>
            </div>
        </div>
    </div>
</template>