import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => { // test suite defined by describe()
    test('if user is not logged in, do not show logout button', () => {
        const wrapper = mount(AppHeader);
        expect(wrapper.find('button').isVisible()).toBe(false);
    })

    test('if user is logged in, show logout button', async () => {
        const wrapper = mount(AppHeader);
        wrapper.setData({ loggedIn: true });

        
        // await will return the resolved value of the returned promise
        await wrapper.vm.$nextTick() // if no callback is provided, nextTick() returns a Promise after DOM is updated ...
        //... if no callback is provided
        expect(wrapper.find('button').isVisible()).toBe(true);
    })

})