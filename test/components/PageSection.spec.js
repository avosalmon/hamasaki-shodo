import { mount } from '@vue/test-utils'
import PageSection from '@/components/PageSection.vue'

describe('PageSection', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PageSection)
    expect(wrapper.vm).toBeTruthy()
  })
})
