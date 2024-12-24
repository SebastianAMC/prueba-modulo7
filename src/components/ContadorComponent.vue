<template>
    <div class="contador">
        <h1 style="color:white; margin:10px;">Contador</h1>

        <h2 style="color: white; font-size: 80pt; text-align: center;" id="valor">{{ count }}</h2>

        <button class="boton" @click="incrementar" id="incrementar">+</button>
        <button class="boton" style="background-color: red;" @click="reducir" id="reducir">-</button>
    </div>
</template>


<script>
import { mapState } from 'vuex';

export default {

    computed: mapState([
        'count'
    ]),
    methods: {
        incrementar() {
            this.$store.commit('sumarNumero')
        },
        reducir() {
            this.$store.commit('restarNumero')
        }
    }


}
</script>
<style>
.contador {
    display: block;
    margin: auto;
}

.boton {
    background-color: green;
    color: white;
    width: 10vh;
    height: 10vh;
    border-radius: 50px;
    font-size: xx-large;
    margin: auto
}
</style>