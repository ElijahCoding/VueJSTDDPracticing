import { mount } from 'vue-test-utils';
import expect from 'expect';
import Question from '../src/components/Question.vue';

describe ('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Question, {
      propsData: {
        question: {
          title: 'The title',
          body: 'The body'
        }
      }
    });
  });

  it ('presents the title and the body', () => {
    see('The title');
    see('The body');
    // expect(wrapper.html()).toContain('The title');
    // expect(wrapper.html()).toContain('The body');
  });

  it ('can be edited', () => {
    expect(wrapper.contains('input[name=title]')).toBe(false);

    wrapper.find('#edit').trigger('click');

    expect(wrapper.find('input[name=title]').element.value).toBe('The title');
  });

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrapper.html()).toContain(text);
  }
});
