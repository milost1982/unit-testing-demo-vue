import { mount, shallowMount } from '@vue/test-utils'
import ItemList from '@/components/ItemList.vue'
import Item from '@/components/Item.vue'

const input = [
  { id: 10, name: 'Item 1' },
  { id: 20, name: 'Item 2' },
  { id: 30, name: 'Item 3' }
]

describe('ListItem Component', () => {
  it('renders items passed as props', () => {
    const wrapper = mount(ItemList, {
      propsData: {
        items: input
      }
    })

    let itemWrappers = wrapper.findAllComponents(Item)
    // console.log(JSON.stringify(itemWrappers.at(1).vm.value))

    expect(itemWrappers.length).toEqual(3)

    expect(itemWrappers.at(1).vm.value).toMatchObject(input[1])
    expect(wrapper).toMatchSnapshot()
  })

  it('renders header', () => {
    const wrapper = shallowMount(ItemList, {
      propsData: {
        items: input
      }
    })
    expect(wrapper.text()).toContain(`List of items:`)
    expect(wrapper).toMatchSnapshot()
  })
})
