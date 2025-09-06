import { createApp } from 'vue'
import App from './App.vue'
import ForBusinessPage from './components/ForBusinessPage.vue'
import OurNetworkPage from './components/OurNetworkPage.vue'
import ContactPage from './components/ContactPage.vue'

// Simple routing based on current page
const path = window.location.pathname
let currentComponent = App

if (path.includes('for-business')) {
  currentComponent = ForBusinessPage
} else if (path.includes('our-network')) {
  currentComponent = OurNetworkPage
} else if (path.includes('contact')) {
  currentComponent = ContactPage
}

createApp(currentComponent).mount('#app')
