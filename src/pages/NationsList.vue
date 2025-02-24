<script setup>
import Carousel from '../components/Carousel.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const nations = ref([]);
const router = useRouter();

async function listNations()  {
    try {
        const response = await fetch('http://localhost:4000/api/nation'); // Asegúrate de que la ruta sea correcta
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        nations.value = await response.json();
    } catch (error) {
        console.error('Error fetching nations:', error);
    }
}

onMounted(async () => {
    await listNations()
    console.log('Naciones listadas ✅')
});

const goToNation = (nation) => {
    router.push({ name: 'NationDetail', params: { id: nation._id }, query: { nation: JSON.stringify(nation) } });
};
</script>

<template>
    <div class="relative min-h-screen overflow-y-auto">
        <Carousel />
        <div class="absolute inset-0 z-10">
            <div class="container mx-auto p-4">
                <h1 class="text-4xl font-bold mb-6 text-center text-white">⚙️ Naciones Generadas ⚙️</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="nation in nations" :key="nation._id"
                        class="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                        @click="goToNation(nation)">
                        <h2 class="text-2xl font-semibold mb-2 text-white">{{ nation.nation_name }}</h2>
                        <p class="text-gray-300">{{ nation.historical_context.substring(0, 150) }}...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>