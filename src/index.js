import Vue from 'vue'

import './assets/styles/test.css'
import './assets/styles//test.styl'
import './assets/images/background-image.jpg'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root)