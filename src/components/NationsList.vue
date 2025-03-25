<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNationStore } from '../store/nationStore';

const nations = ref([]);
const router = useRouter();
const store = useNationStore()

async function listNations() {
    try {
        const response = await fetch('http://localhost:4000/api/nation');
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
    <div class="space-y-4">
        <div v-if="nations.length === 0" class="text-center py-8">
            <div class="text-4xl mb-4">🌍</div>
            <p class="text-gray-400">No hay naciones generadas aún</p>
            <p class="text-sm text-gray-500 mt-2">Crea tu primera nación para comenzar</p>
        </div>

        <div v-else class="space-y-4">
            <div v-for="nation in nations" :key="nation._id"
                class="group bg-gray-700/50 hover:bg-gray-700 rounded-lg p-6 cursor-pointer transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] border border-gray-600 hover:border-gray-500"
                @click="goToNation(nation)">
                <div class="flex items-start justify-between">
                    <h2 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {{ nation.nation_name }}
                    </h2>
                    <span class="text-gray-400 group-hover:text-blue-400 transition-colors">→</span>
                </div>
                <p class="mt-2 text-gray-300 line-clamp-2">{{ nation.historical_context }}</p>
                <div class="mt-4 flex items-center text-sm text-gray-400">
                    <span class="mr-4">Haz clic para explorar</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>