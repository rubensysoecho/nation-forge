<script setup>
    const props = defineProps({
    });
</script>

<template>
    <button
        type="button"
        class="bg-blue-500 text-white px-5 py-2 rounded-lg"
        @click="$emit('fn')"
        >Boton 1</button>

</template>