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
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <div class="mb-4">
            <label for="nationName" class="block text-gray-700 text-sm font-bold mb-2">Nombre de Nación:</label>
            <input type="text" id="nationName" v-model="formData.nationName"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="mb-4">
            <label for="governmentType" class="block text-gray-700 text-sm font-bold mb-2">Tipo de Gobierno:</label>
            <select id="governmentType" v-model="formData.governmentType"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                <option value="">Selecciona un tipo de gobierno</option>
                <option value="monarquia">Monarquía</option>
                <option value="republica">República</option>
                <option value="dictadura">Dictadura</option>
                <option value="teocracia">Teocracia</option>
            </select>
        </div>
        <div class="mb-6">
            <label for="age" class="block text-gray-700 text-sm font-bold mb-2">Época / Año:</label>
            <input type="text" id="age" v-model="formData.age"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <button type="submit"
            class="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Crear Nación
        </button>
        <div v-if="loading" class="mt-4 text-center">
            <p>Cargando{{ dots }}</p>
        </div>
    </form>
</template>
