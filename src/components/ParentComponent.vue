<template>
    <div>
        <ChildComponent @enviar="recibir"/>
        <h2>{{ mostrar }}</h2>
    </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
    components:{
        ChildComponent
    },
    data(){
        return{
            mostrar: ""
        }
    },
    methods:{
        recibir(texto){
            this.mostrar = texto
        }
    }
}
</script>
<style>
    
</style>