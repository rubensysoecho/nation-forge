<script setup>
import { reactive } from 'vue';
import Carousel from '../components/Carousel.vue';



const nationData = reactive({
    "nation_name": "Imperio de Teruel",
    "historical_context": "El Imperio de Teruel surgió en 1670 como resultado de la unión de varios pequeños reinos y territorios en la península ibérica, que se unieron bajo el liderazgo del Duque Fernando de Teruel. La región, rica en recursos naturales y estratégicamente situada entre Aragón y Valencia, logró consolidarse tras la Guerra de los Comuneros, donde los nobles locales buscaron una mayor autonomía del reino de Castilla. A través de alianzas matrimoniales y tácticas diplomáticas, el Duque Fernando logró unir a las casas nobles de la región, estableciendo un gobierno monárquico que prometía prosperidad y estabilidad a sus súbditos.",
    "geopolitical_context": "La existencia del Imperio de Teruel alteró el equilibrio de poder en la península ibérica. En 1672, el Imperio entró en conflicto con el Reino de Aragón por el control de las rutas comerciales hacia el Mediterráneo, lo que culminó en la Guerra de Teruel (1672-1675). El Duque Fernando, conocido como 'El Estratega', lideró a sus tropas en una serie de victorias decisivas que le permitieron expandir su territorio hacia el sur, incorporando partes de Valencia. En 1675, se firmó el Tratado de Alcañiz, que reconoció la soberanía del Imperio sobre las tierras conquistadas y estableció una alianza con el Reino de Francia, lo que fortaleció su posición frente a otras potencias europeas.",
    "politics": "El Imperio de Teruel era una monarquía absoluta gobernada por el Duque Fernando, quien implementó un sistema feudal donde los nobles tenían un papel significativo en la administración local. Sin embargo, también enfrentó luchas internas con facciones nobiliarias que deseaban mayor autonomía y poder. En 1680, la revuelta de los Barones, liderada por el noble Rodrigo de Villanueva, puso a prueba la autoridad del duque, pero fue sofocada gracias a la lealtad del ejército imperial. La política exterior estuvo marcada por una orientación pro-francesa, buscando apoyo militar y económico ante las amenazas de Castilla y Aragón.",
    "population": "La población del Imperio de Teruel en 1670 era aproximadamente de 300,000 habitantes. La mayoría eran hispanos con una mezcla significativa de culturas musulmanas y judías que habían coexistido durante siglos. El idioma predominante era el español, aunque también se hablaban dialectos locales como el aragonés y el valenciano.",
    "historical_curiosities": [
        "El Duque Fernando estableció la primera Academia Militar de Teruel en 1671, donde se formaron algunos de los mejores generales de su tiempo.",
        "La arquitectura del Imperio se caracterizó por una fusión de estilos gótico y mudéjar, visible en la Catedral de San Salvador, construida entre 1673 y 1680."
    ],
    "important_characters": [
        "Duque Fernando de Teruel - Conocido como 'El Estratega', fue fundamental en la creación del imperio y en su expansión territorial.",
        "Rodrigo de Villanueva - Noble rebelde que lideró la revuelta contra el duque en 1680, simbolizando las tensiones entre la nobleza y el poder central."
    ],
    "_id": "67bc50c282432f37bd55941d",
    "id": {
        "type": "Buffer",
        "data": [
            226,
            230,
            135,
            57,
            210,
            160,
            64,
            128,
            148,
            47,
            83,
            6,
            9,
            210,
            37,
            170
        ]
    },
    "created_at": "2025-02-24T10:58:10.333Z",
    "__v": 0
})
</script>

<template>
    <div class="relative min-h-screen overflow-y-auto">
        <Carousel />
        <div class="absolute inset-0 z-10 p-8 text-white">
            <h1 class="text-5xl font-bold mb-6 text-center">⚔️ {{ nationData.nation_name }} ⚔️</h1>

            <div class="mb-4">
                <button @click="dropdowns.historical = !dropdowns.historical"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Contexto Histórico</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.historical }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.historical" class="mt-2">
                    <p class="text-base">{{ nationData.historical_context }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.geopolitical = !dropdowns.geopolitical"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Contexto Geopolítico</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.geopolitical }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.geopolitical" class="mt-2">
                    <p class="text-base">{{ nationData.geopolitical_context }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.politics = !dropdowns.politics"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Política</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.politics }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.politics" class="mt-2">
                    <p class="text-base">{{ nationData.politics }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.population = !dropdowns.population"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Población</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.population }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.population" class="mt-2">
                    <p class="text-base">{{ nationData.population }}</p>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.curiosities = !dropdowns.curiosities"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Curiosidades Históricas</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.curiosities }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.curiosities" class="mt-2">
                    <ul>
                        <li v-for="(curiosity, index) in nationData.historical_curiosities" :key="index"
                            class="text-base">
                            {{ curiosity }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mb-4">
                <button @click="dropdowns.characters = !dropdowns.characters"
                    class="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-700 rounded-md hover:bg-gray-600">
                    <h2 class="text-2xl font-semibold">Personajes Importantes</h2>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-180': dropdowns.characters }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div v-if="dropdowns.characters" class="mt-2">
                    <ul>
                        <li v-for="(character, index) in nationData.important_characters" :key="index"
                            class="text-base">
                            {{ character }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>