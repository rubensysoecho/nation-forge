<script setup>
  import { RouterView } from 'vue-router';
  import { ref, reactive } from 'vue';

  const cantidad = ref(0);

  const state = reactive({
    cantidad: 0,
  })
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>