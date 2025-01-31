<template>
    <div class="p-10">
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="concept">Concepto de Nación:</label>
                <input type="text" id="concept" v-model="form.concept" required />
            </div>
            <div>
                <label for="governmentType">Tipo de Gobierno:</label>
                <input type="text" id="governmentType" v-model="form.governmentType" required />
            </div>
            <div>
                <label for="historicalPeriod">Época Histórica:</label>
                <input type="text" id="historicalPeriod" v-model="form.historicalPeriod" required />
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: auto;
        display: flex;
    }

    div {
        margin-bottom: 1em;
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 0.5em;
        font-weight: bold;
    }

    input {
        padding: 0.5em;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.5em;
        font-size: 1em;
        cursor: pointer;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>

<script>
    export default {
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
                console.log(this.form);
                // Aquí puedes agregar la lógica para manejar el envío del formulario
            }
        }
    };
</script>