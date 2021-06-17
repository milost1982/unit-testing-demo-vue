import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld Component', () => {
  it('renders props.msg when passed', () => {
    const msg = 'test message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    expect(wrapper.text()).toMatch(msg)
  })
})
