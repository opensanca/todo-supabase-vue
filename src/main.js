import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './estilo.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   render: h => h('p', [ 'linha1', h('h2', [ 'subtítulo' ]) ]),
// }).$mount('#app')

// new Vue({
//   render: h => ( // eslint-disable-line
//     <p style='color: purple'>
//       linha1
//       <h2>subtítulo2</h2>
//     </p>
//   ),
// }).$mount('#app')
