<script setup>
  import Header from './components/Header.vue';
  import Button from './components/Button.vue';
  import { ref, reactive } from 'vue';

  const cantidad = ref(0);
  const state = reactive({
    cantidad: 0,
  })

  function handleClick() {
    console.log('Click');
  }
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <div class="flex justify-between mt-10">
      <Button
        @fn = "handleClick"/>
    </div>
    <div class="my-5">
      <input 
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        @input="handleChange"
      />
      {{ cantidad }}
    </div>
    <div class="bg-cover" style="background-image: url('./assets/logo.png'); height: 400px"></div>
    <div class="my-5">
      <img src="./assets/logo.png" alt="Logo" class="w-full h-auto" />
    </div>
  </div>
</template>