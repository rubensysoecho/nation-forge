<script>
    export default {
        props: {
            nation: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div v-if="nation">
        <h1 class="text-2xl mb-2">{{ nation.nation_name }}</h1>
        <p><strong>Historical Context:</strong> {{ nation.historical_context }}</p>
        <p><strong>Geopolitical Context:</strong> {{ nation.geopolitical_context }}</p>
        <p><strong>Politics:</strong> {{ nation.politics }}</p>
        <p><strong>Population:</strong> {{ nation.population }}</p>
        <p><strong>Historical Curiosities:</strong></p>
        <ul>
            <li v-for="(curiosity, index) in nation.historical_curiosities" :key="index">{{ curiosity }}</li>
        </ul>
        <p><strong>Important Characters:</strong></p>
        <ul>
            <li v-for="(character, index) in nation.important_characters" :key="index">{{ character }}</li>
        </ul>
    </div>
    <div v-else>
        <p>No nation data available.</p>
    </div>
</template>