import { createApp } from 'vue';
import App from './App.vue';

// import say from './varsMain';
import { hello, vueMessage } from './vars';
import say from './varsMain';

say(hello);
say(vueMessage.mes);

createApp(App).mount('#app');
