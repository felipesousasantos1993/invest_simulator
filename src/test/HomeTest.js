import { mount } from '@vue/test-utils';
import Home from '../views/Home.vue';

describe('Home', () => {
	test('is a Vue instance', () => {
		const wrapper = mount(Home);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});
