<script setup>
    import { defineProps } from 'vue'
    import { useRouter } from 'vue-router'

    defineProps({
        text: String
    })

    const router = useRouter()
    const goBack = () => {
        router.back()
    }
</script>

<template>
    <div class="flex items-center">
        <button @click="goBack" class="mr-4 px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition duration-300 ease-in-out">
            Atras
        </button>
        <h1 class="text-6xl font-bold mb-6 text-center flex-1 text-white">{{ text }}</h1>
    </div>
</template>

