<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const props = defineProps({
        routeTo:    {
            type: String,
        }
    })

    function handleClick() {
        router.push(props.routeTo);
        console.log('Redireccionando a => ', props.routeTo);
    }
</script>

<template>
    <button @click="handleClick" class="rounded-full px-4 py-2 bg-amber-500 text-white border-none cursor-pointer text-lg hover:bg-amber-700">
        Crear nación
    </button>
</template>