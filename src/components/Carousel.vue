<script setup>
    import Button from './Button.vue';
</script>

<template>
    <div class="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        <div class="absolute inset-0">
            <img src="../assets/img/carousel_02.jpg" alt="Background Image"
                class="w-full h-full object-cover brightness-75 bg-gray-800">
        </div>

        <div class="absolute inset-0 bg-black opacity-50"></div>

        <div class="relative z-10 text-center px-5">
            <h1 class="text-5xl md:text-7xl font-bold drop-shadow-lg">Nation Forge</h1>
            <h2 class="text-lg md:text-2xl italic opacity-90 mt-2">La historia es tuya</h2>

            <div class="mt-6">
                <Button />
            </div>
        </div>
    </div>
</template>