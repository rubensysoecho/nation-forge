<script setup>
    import RouteButton from '../components/RouteButton.vue';
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
        <!-- Hero Section -->
        <div class="relative h-screen flex items-center justify-center">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute inset-0 bg-[url('/world-map.png')] bg-cover bg-center opacity-20"></div>
            
            <div class="relative z-10 text-center px-4">
                <h1 class="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Nation Forge
                </h1>
                <h2 class="text-xl md:text-3xl italic mb-8 text-gray-300">
                    Forja tu propia nación y escribe su historia
                </h2>
                <div class="flex justify-center">
                    <RouteButton routeTo="/nation" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                        Comenzar Aventura
                    </RouteButton>
                </div>
            </div>
        </div>

        <!-- Features Section -->
        <div class="py-20 px-4 bg-gray-800">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center mb-12">Características Principales</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <div class="text-3xl mb-4">🌍</div>
                        <h3 class="text-xl font-semibold mb-2">Creación de Naciones</h3>
                        <p class="text-gray-300">Diseña tu nación desde cero, definiendo su geografía, cultura y sociedad.</p>
                    </div>
                    <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <div class="text-3xl mb-4">📚</div>
                        <h3 class="text-xl font-semibold mb-2">Historia Dinámica</h3>
                        <p class="text-gray-300">Desarrolla la historia de tu nación a través de eventos y decisiones importantes.</p>
                    </div>
                    <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <div class="text-3xl mb-4">🎮</div>
                        <h3 class="text-xl font-semibold mb-2">Interactivo</h3>
                        <p class="text-gray-300">Explora y modifica tu nación de forma interactiva y visual.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-to-br {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
</style>