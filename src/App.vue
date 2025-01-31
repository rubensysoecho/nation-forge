<script setup>
  import Header from './components/Header.vue';
  import Carousel from './components/Carousel.vue';
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
  <div style="position: relative; z-index: 2;">
    <Header />
  </div>
  <div style="position: relative; z-index: 1;">
    <Carousel />
  </div>
</template>