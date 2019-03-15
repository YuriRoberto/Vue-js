import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/Titulo.vue';
import NovoJogo from './components/NovoJogo.vue';
import TabelaClubes from './components/TabelaClubes.vue';

Vue.config.productionTip = false

Vue.component('titulo', Titulo);
Vue.component('novojogo', NovoJogo);
Vue.component('tabelaclubes', TabelaClubes);

new Vue({
  render: h => h(App),
}).$mount('#app')
