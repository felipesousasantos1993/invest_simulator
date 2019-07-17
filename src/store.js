import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

import axios from 'axios';

const URL_API = 'http://api.mathjs.org/v4/';

export default new Vuex.Store({
	strict: false,
	state: {
		form: {
			nome: '',
			mensalidade: '',
			tempo: ''
		},
		resultado: ''
	},
	actions: {
		async simular() {
			const periodo = parseInt(this.state.form.tempo) * 12;
			const body = {
				expr: `${this.state.form.mensalidade} * (((1 + 0.00517) ^ ${periodo} - 1) / 0.00517)`
			};
			const result = await axios.post(URL_API, body);
			this.state.resultado = result.data.result;
		}
	},
	getters: {
		getField
	},
	mutations: {
		updateField
	}
});
