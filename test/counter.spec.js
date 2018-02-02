import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.js';
import expect from 'expect';

describe ('Counter', () => {
  it ('defaults to a count of 0', () => {
    let wrapper = mount(Counter);
    console.log(wrapper);

    expect(wrapper.vm.count).toBe(0);
  })
})
