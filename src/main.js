import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  data: function() {
    return {
      

      items: [{ 
        vendorClass: 'evil-corp',
        cardNumber: '11111 2222 3333 4444',
        cardHolder: 'Josef Eriksson',
        date: '',
        vendor: 'Evil',

      },
      { 
        vendorClass: 'bitcoin',
        cardNumber: '11111 2222 3333 6666',
        cardHolder: 'Margaret Karlsson',
        date: '',
        vendor: 'Bitcoin',
      },
      { 
        vendorClass: 'ninja-bank',
        cardNumber: '11111 4444 3333 7777',
        cardHolder: 'Kim Jong',
        date: '',
        vendor: 'Ninja',
      }
    
    
    
    
    
    ]
    } 


}, 
  render: h => h(App)
}).$mount('#app')
