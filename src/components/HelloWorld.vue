<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.

      <RouterLink to="/counter"><button class="boton-contador">Click AQUÍ para ir al contador</button></RouterLink>
      <RouterLink to="/ej3"><button class="boton-ej3">Click AQUÍ para ir al Ejercicio 3</button></RouterLink>
    </h3>
  </div>
</template>

<style scoped>
.boton-contador{
  background-color: red;
  color: white;
  width: 50vh;
  padding: 35px;
  border-radius: 15px;
  margin: 45px 5px;
  font-weight: bolder;
  font-size: large;
}

.boton-contador:hover{
    background-color: green;
  }

.boton-ej3{
  background-color: blue;
  color: white;
  width: 50vh;
  padding: 35px;
  border-radius: 15px;
  margin: 45px 5px;
  font-weight: bolder;
  font-size: large;
}

.boton-ej3:hover{
    background-color: purple;
  }


h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
