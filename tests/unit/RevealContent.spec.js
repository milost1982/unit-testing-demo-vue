import { mount } from '@vue/test-utils'
import RevealContent from '@/components/RevealContent.vue'

describe('RevealContent Component', () => {
  it('by default checkbox is unchecked and content is hidden', () => {
    let wrapper = mount(RevealContent)

    expect(wrapper.find('.checkbox').exists()).toBe(true)
    expect(wrapper.find('.content').exists()).toBe(false)
  })

  it('toggle checkbox will toggle content visibility', async () => {
    let wrapper = mount(RevealContent)

    // check checkbox
    await wrapper.find('.checkbox').trigger('click')
    expect(wrapper.find('.content').exists()).toBe(true)

    // uncheck checkbox
    await wrapper.find('.checkbox').trigger('click')
    expect(wrapper.find('.content').exists()).toBe(false)
  })
})
