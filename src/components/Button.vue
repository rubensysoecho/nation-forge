<script> 
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter();

            function handleClick() {
                router.push('/nations/create');
            }

            return {
                handleClick
            }
        }
    }
</script>

<template>
    <button @click="handleClick" class="rounded-full px-4 py-2 bg-amber-500 text-white border-none cursor-pointer text-lg hover:bg-amber-700">Crear nación</button>
</template>