<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNationStore } from '../store/nationStore';

const nations = ref([]);
const router = useRouter();
const store = useNationStore()

async function listNations() {
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
    store.setNationData(nation)
    router.push({ path: '/nation/data' })
};
</script>

<template>
    <div v-for="nation in nations" :key="nation._id"
        class="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors duration-300 mb-4"
        @click="goToNation(nation)">
        <h2 class="text-2xl font-semibold mb-2 text-white">{{ nation.nation_name }}</h2>
        <p class="text-gray-300">{{ nation.historical_context.substring(0, 150) }}...</p>
    </div>
</template>