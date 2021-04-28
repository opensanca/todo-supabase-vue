import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'papercss/dist/paper.min.css';
import './estilos.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   render: h => ( // eslint-disable-line
//     <div>
//       <p class='main-perigo'>linha2</p>
//     </div>
//   ),
// }).$mount('#app')
