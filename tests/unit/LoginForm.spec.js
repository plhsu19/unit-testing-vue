import LoginForm from '@/components/LoginForm.vue';
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
    it('emits an event with a user data payload', () => {
        const wrapper = mount(LoginForm);
        // writing tests by mimicing how user would interact with the component
        // 1. Find text input
        const input = wrapper.find('input[type="text"');

        // 2. Set value for text input
        input.setValue('Adam Jahr');

        // 3. Simulate form submission
        // directly trigger the from's submit event instead of triggering the click event on the button => ...
        // ... decouple the implementation of the component from the testing
        wrapper.trigger('submit'); // submit is a event of <form></form> element. don't have to find('form')

        // 4. Assert event has been emitted
        const formSubmittedCalls = wrapper.emitted('formSubmitted');
        expect(formSubmittedCalls).toHaveLength(1);

        // 5. Assert payload is correct
        const expectedPayload = { name: 'Adam Jahr' };
        expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload);
    })
})