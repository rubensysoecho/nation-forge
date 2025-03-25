<script setup>
import { reactive, ref, onMounted } from 'vue';

const formData = reactive({
    nationName: '',
    governmentType: '',
    age: '',
});

const loading = ref(false);
const dots = ref('');

function animateDots() {
    const dotInterval = setInterval(() => {
        if (dots.value.length < 3) {
            dots.value += '.';
        } else {
            dots.value = '';
        }
    }, 500);

    onMounted(() => {
        clearInterval(dotInterval);
    });
}

function generateNation() {
    loading.value = true;
    animateDots();

    fetch('http://localhost:4000/api/nation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            loading.value = false;
            dots.value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
            loading.value = false;
            dots.value = '';
        });
}

const handleSubmit = () => {
    if (formData.nationName == "" || formData.governmentType == "" || formData.age == "") {
        console.log('Hay datos sin rellenar');
    } else {
        generateNation();
    }
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="space-y-2">
            <label for="nationName" class="block text-sm font-medium text-gray-300">Nombre de Nación</label>
            <input type="text" id="nationName" v-model="formData.nationName"
                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Ingresa el nombre de tu nación" />
        </div>

        <div class="space-y-2">
            <label for="governmentType" class="block text-sm font-medium text-gray-300">Tipo de Gobierno</label>
            <select id="governmentType" v-model="formData.governmentType"
                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                <option value="" class="bg-gray-700">Selecciona un tipo de gobierno</option>
                <option value="monarquia" class="bg-gray-700">Monarquía</option>
                <option value="republica" class="bg-gray-700">República</option>
                <option value="dictadura" class="bg-gray-700">Dictadura</option>
                <option value="teocracia" class="bg-gray-700">Teocracia</option>
            </select>
        </div>

        <div class="space-y-2">
            <label for="age" class="block text-sm font-medium text-gray-300">Época / Año</label>
            <input type="text" id="age" v-model="formData.age"
                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Ej: Edad Media, 1500 d.C." />
        </div>

        <button type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
            Crear Nación
        </button>

        <div v-if="loading" class="flex items-center justify-center space-x-2 text-gray-300">
            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Generando tu nación{{ dots }}</span>
        </div>
    </form>
</template>
