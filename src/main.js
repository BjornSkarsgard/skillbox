import { createApp } from 'vue';
import App from './App.vue';

import { hello, vueMessage } from './vars';
import say from './varsMain';

const message = `${hello} ${vueMessage.mes}`;

say(message);

createApp(App).mount('#app');
