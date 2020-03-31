import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAkChGNTQHI1gSXnrZPEAyALS7j1ELEI7I",
  authDomain: "lalala1-a.firebaseapp.com",
  databaseURL: "https://lalala1-a.firebaseio.com",
  projectId: "lalala1-a",
  storageBucket: "lalala1-a.appspot.com",
  messagingSenderId: "995945793137",
  appId: "1:995945793137:web:233a3cbbda1e991511fdd0",
  measurementId: "G-NDMPRLXW73"
};
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
