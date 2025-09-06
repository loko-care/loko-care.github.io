<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between py-4">
        <a href="/" @click="navigateTo('')">
          <img class="h-8" :src="logoSrc" alt="Loko logo" @error="onLogoError">
        </a>
        <nav class="hidden md:flex items-center space-x-6">
          <a 
            href="index" 
            :class="currentPage === 'home' ? 'text-loko-green font-bold' : 'text-loko-muted font-medium'"
            class="hover:text-loko-green transition-colors"
            @click="navigateTo('')"
          >
            Home
          </a>
          <a 
            href="for-business" 
            :class="currentPage === 'for-business' ? 'text-loko-green font-bold' : 'text-loko-muted font-medium'"
            class="hover:text-loko-green transition-colors"
            @click="navigateTo('for-business')"
          >
            For Business
          </a>
          <a 
            href="our-network" 
            :class="currentPage === 'our-network' ? 'text-loko-green font-bold' : 'text-loko-muted font-medium'"
            class="hover:text-loko-green transition-colors"
            @click="navigateTo('our-network')"
          >
            Our Network
          </a>
          <a 
            href="contact" 
            :class="currentPage === 'contact' ? 'bg-loko-green text-white px-4 py-2 rounded-lg font-bold' : 'bg-loko-green text-white px-4 py-2 rounded-lg font-semibold'"
            class="hover:bg-opacity-90 transition-all"
            @click="navigateTo('contact')"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    currentPage: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      logoSrc: '/lo_ko_logo.jpg'
    }
  },
  methods: {
    onLogoError(event) {
      event.target.style.display = 'none'
    },
    scrollToContact(e) {
      e.preventDefault()
      const target = document.querySelector('#contact')
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    },
    navigateTo(url) {
      window.location.href = url
    }
  }
}
</script>
