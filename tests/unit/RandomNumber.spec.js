import { mount } from '@vue/test-utils';
import RandomNumber from '@/components/RandomNumber.vue';

describe('RandomNumber', () => {
    test('By default, randomNumber data value should be 0', () => {
        const wrapper = mount(RandomNumber);
        expect(wrapper.html()).toContain('<span>0</span>');
    })

    test('If button is clicked, randomNumber should be between 1 and 10', async () => {
        const wrapper = mount(RandomNumber);
        // find the button in the component and trigger the 'click' event on the button
        // trigger returns a Promise, which when resolved, guarantees the component is updated. 
        wrapper.find('button').trigger('click');

        // wait until the DOM update is finished (make the following code asynchrounously)
        await wrapper.vm.$nextTick();

        // check if the content of the output <span></span> is within the expected range
        const randomNumber = parseInt(wrapper.find('span').element.textContent);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
    })

    test('If button is clicked, randomNumber should be between 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
            propsData: {
                min: 200,
                max: 300,
            }
        });
        await wrapper.find('button').trigger('click'); // trigger() gauranted the element is updated when resolved

        // check if the content of the output <span></span> is within the expected range
        const randomNumber = parseInt(wrapper.find('span').element.textContent);
        expect(randomNumber).toBeGreaterThanOrEqual(200);
        expect(randomNumber).toBeLessThanOrEqual(300);
    })
})