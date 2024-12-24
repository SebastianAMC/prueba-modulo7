<template>
    <div class="counter">
        <ContadorComponent />
    </div>
</template>

<script setup>
import ContadorComponent from '@/components/ContadorComponent.vue';

</script>
<style>
    @media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>