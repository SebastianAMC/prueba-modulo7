import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            count: 0
        }
    },
   mutations: {
        sumarNumero(state){
            state.count++;
        },
        restarNumero(state){
            state.count--;
        }
    }
})