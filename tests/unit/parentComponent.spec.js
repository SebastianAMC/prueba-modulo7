import ParentComponent from "@/components/ParentComponent.vue";
import { mount } from "@vue/test-utils";

describe('ParentComponent',  ()=>{
    test('Comprobar si se envía texto al presionar el botón', () =>{
        const wrapper = mount(ParentComponent)

        const boton = wrapper.get('#enviar')
        boton.trigger('click')

        let texto = wrapper.get('h2')

        expect(texto.text()).not.toBe('')

        //Para modificar el comportamiento y que la prueba pase hay que modificar la variable de estado "mostrar" 
        //en el componente ParentComponent.vue
    })
})