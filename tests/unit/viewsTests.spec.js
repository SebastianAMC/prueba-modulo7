import HomeView from "@/views/HomeView.vue"
import { createRouter, createWebHistory } from "vue-router"
import { mount, shallowMount } from "@vue/test-utils"
import AboutView from "@/views/AboutView.vue"
import ContadorView from "@/views/ContadorView.vue"
import ParentComponent from "@/components/ParentComponent.vue"

describe('HomeView', () => {
    test('Probando la existencia del componente o vista HomeView ', async () => {

    const router = createRouter({
            history: createWebHistory(),
            routes: [{
            path: '/',
            name: 'HomeView',
            component: HomeView
             }]
            })

    router.push('/')
    await router.isReady()

    const wrapper = mount(HomeView, {
                    global: {
                        plugins: [router]
                        }
                    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })
})

describe('AboutView', () => {
    test('Probando la existencia del componente o vista AboutView ', async () => {

    const router = createRouter({
            history: createWebHistory(),
            routes: [{
            path: '/about',
            name: 'AboutView',
            component: AboutView
             }]
            })

    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
                    global: {
                        plugins: [router]
                        }
                    })

    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
})

describe('ContadorView', () => {
    test('Probando la existencia del componente o vista ContadorView ', async () => {

    const router = createRouter({
            history: createWebHistory(),
            routes: [{
            path: '/counter',
            name: 'counter',
            component: ContadorView
             }]
            })

    router.push('/counter')
    await router.isReady()

    const wrapper = shallowMount(ContadorView, {
                    global: {
                        plugins: [router]
                        }
                    })

    expect(wrapper.findComponent(ContadorView).exists()).toBe(true)
    })
})

describe('ej3', () => {
    test('Probando la existencia del componente o vista ParentComponent ', async () => {

    const router = createRouter({
            history: createWebHistory(),
            routes: [{
            path: '/ej3',
            name: 'ej3',
            component: ParentComponent
             }]
            })

    router.push('/ej3')
    await router.isReady()

    const wrapper = shallowMount( ParentComponent, {
                    global: {
                        plugins: [router]
                        }
                    })

    expect(wrapper.findComponent(ParentComponent).exists()).toBe(true)
    })
})