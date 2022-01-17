import MessageContainer from '@/components/MessageContainer.vue';
import { mount } from '@vue/test-utils'
// import StubComponent from './setup/StubComponent.vue'

describe('MessageContainer', () => {
    it('Wrap the MessageDisplay component', () => {
        const wrapper = mount(MessageContainer, {
            stubs: {
                // old way to define the stubbed component
                // MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
                // MessageDisplay: StubComponent,
                MessageDisplay: {
                    template: '<p data-testid="message">Hello from the db!</p>'
                }
            }
        });
        const message = wrapper.find('[data-testid="message"]').element.textContent;
        expect(message).toEqual('Hello from the db!');
    })
})