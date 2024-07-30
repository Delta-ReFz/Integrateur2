import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { testApiConnection } from './api'

const app = createApp(App);

app.use(router);

testApiConnection().then(isConnected => {
  if (isConnected) {
    console.log('Connected to API');
  } else {
    console.error('Not connected to API');
  }
});

app.mount('#app');


