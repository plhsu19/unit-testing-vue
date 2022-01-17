import MessageDisplay from '@/components/MessageDisplay.vue';
import { mount } from '@vue/test-utils';
import { getMessage } from '@/services/axios.js'
import flushPromises from 'flush-promises';

// create mock version of the getMessage in the axios module
jest.mock('@/services/axios.js');

// make sure the mocks (calls & properties instances) are cleared before each test
beforeEach(() => {
    jest.clearAllMocks();
})

describe('MessageDisplay', () => {
    it('Calls getMessage and displays message', async () => {

        // mock the API call
        const mockedMessage = 'Hello from the db!';
        getMessage.mockResolvedValueOnce({ text: mockedMessage }); // mocked the resolved response (input) we would get from the API call
        const wrapper = mount(MessageDisplay);

        // wait for all promise to be resolved/rejected
        await flushPromises(); // ensure getMessage' promise is resolved and DOM is updated before running our assertions

        // check that call happened once (output)
        expect(getMessage).toHaveBeenCalledTimes(1);
        
        // check that component displays message
        const message = wrapper.find('[data-testid="message"]').element.textContent;
        expect(message).toEqual(mockedMessage);
    })

    it('Displays an error when getMessage call fails', async () => {
        // mock the failed API call
        const mockedError = 'Oops! Something went wrong.';
        getMessage.mockRejectedValueOnce(mockedError); // return a promise that will be rejected with the value mockedError string
        const wrapper = mount(MessageDisplay);

        // wait for promise to resolve
        await flushPromises();

        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1);
        // check that component displays message
        const error = wrapper.find('[data-testid="message-error"]').element.textContent;
        expect(error).toEqual(mockedError);
    })

})