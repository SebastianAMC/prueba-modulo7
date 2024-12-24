<template>
    <div>
    <input type="text" v-model="texto"/>
    <button @click="enviar" id="enviar" >Enviar</button>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            texto:""
        }
    },
    methods:{
        enviar(){
            this.$emit('enviar', this.texto)
        }
    }
}
</script>
<style lang="">
    
</style>