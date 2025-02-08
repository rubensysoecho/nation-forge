<template>
    <div class="p-10">
        <form @submit.prevent="handleSubmit" class="flex flex-col max-w-md mx-auto">
            <div class="mb-4 flex flex-col">
                <label for="concept" class="mb-2 font-bold">Concepto de Nación:</label>
                <input type="text" id="concept" v-model="form.concept" required class="p-2 text-base border border-gray-300 rounded" />
            </div>
            <div class="mb-4 flex flex-col">
                <label for="governmentType" class="mb-2 font-bold">Tipo de Gobierno:</label>
                <input type="text" id="governmentType" v-model="form.governmentType" required class="p-2 text-base border border-gray-300 rounded" />
            </div>
            <div class="mb-4 flex flex-col">
                <label for="historicalPeriod" class="mb-2 font-bold">Época Histórica:</label>
                <input type="text" id="historicalPeriod" v-model="form.historicalPeriod" required class="p-2 text-base border border-gray-300 rounded" />
            </div>
            <button type="submit" class="p-2 text-base cursor-pointer bg-amber-500 text-white border-none rounded hover:bg-amber-600">Enviar</button>
        </form>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';

    export default {
        created() {
            this.router = useRouter();
        },
        data() {
            return {
                form: {
                    concept: '',
                    governmentType: '',
                    historicalPeriod: ''
                }
            };
        },
        methods: {
            handleSubmit() {
                const nation = {
                    nation_name: "",
                    historical_context: "",
                    geopolitical_context: "",
                    politics: "",
                    population: ""
                };
                this.router.push({ path: '/nations/data' + nation });
                }
            }
    }
</script>
