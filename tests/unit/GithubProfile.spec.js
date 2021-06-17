import { mount } from '@vue/test-utils'
import axios from 'axios'
import GithubProfile from '@/components/GithubProfile.vue'

describe('GithubProfile Component', () => {
  it('renders proper html from github profile data', async () => {
    // arrange
    const mockData = JSON.parse(`{
      "avatar_url": "https://avatars.githubusercontent.com/u/150330?v=4",
      "name": "Kyle Simpson",
      "login": "getify",
      "company": "Getify Solutions",
      "location": "Austin, TX",
      "html_url": "https://github.com/getify",
      "blog": "http://getify.me"
    }`)

    const originalAxiosGet = axios.get
    async function mockAxiosGet () {
      return { data: mockData }
    }
    axios.get = jest.fn(mockAxiosGet);

    const username = 'getify'
    const expectedUrl = `https://api.github.com/users/${username}`

    const wrapper = mount(GithubProfile)
    // await wrapper.find('input[type=submit]').trigger('submit')
    await wrapper.vm.getGithubProfile(username)

    // asserts

    // asserts for mocked function
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(expectedUrl)
    expect(wrapper.vm.$data.profile).toEqual(mockData)

    // asserts for rendered HTML
    // expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find('.avatar').attributes().src).toBe(mockData.avatar_url)
    expect(wrapper.find('.profile-name').text()).toMatch(mockData.name)
    expect(wrapper.find('.profile-login').text()).toMatch(mockData.login)
    expect(wrapper.find('.profile-company').text()).toMatch(mockData.company)
    expect(wrapper.find('.profile-location').text()).toMatch(mockData.location)
    expect(wrapper.find('.profile-blog').text()).toMatch(mockData.blog)
    expect(wrapper.find('.profile-url > a').attributes().href).toBe(mockData.html_url)

    expect(wrapper).toMatchSnapshot()

    // cleanup
    axios.get = originalAxiosGet
  })
})
