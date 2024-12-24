import ContadorComponent from '@/components/ContadorComponent.vue'
import ContadorStore from '@/store/ContadorStore'
import { mount } from '@vue/test-utils'

describe('ContadorComponent', () => {
  test('Test para comprobar que existe un valor incial en la variable count', () => {
    let wrapper = mount(ContadorComponent, {
      global: {
        plugins: [ContadorStore],
      },
    })

    let valor = wrapper.get('#valor')

    expect(valor.text()).toBe('0')
  })
})

describe('ContadorComponent', () => {
  test('Test para comprobar que existe aumento en la variable count', () => {
    let wrapper = mount(ContadorComponent, {
      global: {
        plugins: [ContadorStore],
      },
    })
    let valor = ContadorStore.state.count

    const boton = wrapper.get('#incrementar')
    boton.trigger('click')

    expect(valor).toBe(valor++)
  })
})

describe('ContadorComponent', () => {
  test('Test para comprobar que existe reduccion en la variable count', () => {
    let wrapper = mount(ContadorComponent, {
      global: {
        plugins: [ContadorStore],
      },
    })
    let valor = ContadorStore.state.count

    const boton = wrapper.get('#reducir')
    boton.trigger('click')

    expect(valor).toBe(valor--)
  })
})
