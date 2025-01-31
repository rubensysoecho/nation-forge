<script setup>
    import Button from './Button.vue';
</script>
<template>
    <div class="relative text-center text-white">
        <div class="relative">
            <img src="../assets/img/carousel_01.jpg" alt="Background Image" class="w-full h-auto object-cover">
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-9xl md:text-5xl">Nation Forge</h1>
            <h2 class="text-xl md:text-2xl italic">La historia es tuya</h2>
            <div class="p-5">
                <Button />
            </div>
        </div>
    </div>
</template>
