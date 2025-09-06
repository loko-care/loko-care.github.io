<template>
  <div class="font-inter bg-white text-loko-ink leading-relaxed">
    <AppHeader currentPage="contact" />

    <main>
      <!-- Hero -->
      <section class="pt-36 pb-16 bg-gradient-to-br from-loko-beige to-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h1 class="text-5xl font-bold text-loko-green leading-tight mb-6">
            Get in Touch
          </h1>
          <p class="text-xl text-loko-muted mb-8 leading-relaxed">
            Have questions about our work or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      <!-- Contact Information -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Details -->
            <div>
              <h2 class="text-3xl font-bold text-loko-green mb-8">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-loko-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-loko-green mb-2">Email</h3>
                    <p class="text-loko-muted mb-1">For all inquiries and questions</p>
                    <a href="mailto:sdemizike@gmail.com" class="text-loko-green hover:underline font-medium">sdemizike@gmail.com</a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-loko-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-loko-green mb-2">Location</h3>
                    <p class="text-loko-muted mb-1">Headquartered in</p>
                    <p class="text-loko-green font-medium">South Jakarta, Indonesia</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-loko-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-loko-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-loko-green mb-2">LinkedIn</h3>
                    <p class="text-loko-muted mb-1">Connect with us professionally</p>
                    <a href="https://www.linkedin.com/company/lo-ko/" target="_blank" rel="noopener" class="text-loko-green hover:underline font-medium">Follow us on LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- About Section -->
            <div>
              <h2 class="text-3xl font-bold text-loko-green mb-8">About Loko</h2>
              <div class="bg-loko-beige p-8 rounded-2xl">
                <div class="space-y-6">
                  <div>
                    <h3 class="text-lg font-semibold text-loko-green mb-2">Our Mission</h3>
                    <p class="text-loko-muted leading-relaxed">
                      We deliver care that is mobile, culturally appropriate, and affordable to hard-to-reach groups across Indonesia.
                    </p>
                  </div>
                  
                  <div>
                    <h3 class="text-lg font-semibold text-loko-green mb-2">Who We Serve</h3>
                    <p class="text-loko-muted leading-relaxed">
                      From Indigenous communities facing healthcare barriers to landfill workers needing accessible care, we bridge the gap where traditional healthcare falls short.
                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-loko-green mb-2">Our Approach</h3>
                    <p class="text-loko-muted leading-relaxed">
                      Through our telehealth platform and Community Health Workers, we create seamless care journeys that are approachable, appropriate, and affordable.
                    </p>
                  </div>

                  <div class="pt-4 border-t border-loko-green/20">
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <div class="text-sm text-loko-muted">Founded</div>
                        <div class="font-semibold text-loko-green">2024</div>
                      </div>
                      <div>
                        <div class="text-sm text-loko-muted">Focus Area</div>
                        <div class="font-semibold text-loko-green">Healthcare Access</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-loko-green text-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-6">We're Here to Help</h2>
          <p class="text-xl mb-8 opacity-90">
            Whether you have questions, want to learn more about our work, or are interested in getting involved, we'd love to connect with you.
          </p>
          <a href="mailto:sdemizike@gmail.com" class="bg-white text-loko-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
            Send us an Email
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-loko-ink text-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <img class="h-8 brightness-0 invert mb-3" src="/lo_ko_logo.jpg" alt="Loko logo">
            <p class="text-white/70 mb-4">Healthcare that reaches everyone</p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">Quick Links</h4>
            <div class="space-y-2">
              <a href="#" @click="navigateToHome" class="block text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#" @click="navigateToForBusiness" class="block text-white/70 hover:text-white transition-colors">For Business</a>
              <a href="#" @click="navigateToOurNetwork" class="block text-white/70 hover:text-white transition-colors">Our Network</a>
              <a href="#" @click="navigateToContact" class="block text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">Contact</h4>
            <p class="text-white/70 mb-2">
              <a href="mailto:sdemizike@gmail.com" class="hover:text-white transition-colors">sdemizike@gmail.com</a>
            </p>
            <p class="text-white/70 mb-4">South Jakarta, Indonesia</p>
            <a 
              href="https://www.linkedin.com/company/lo-ko/" 
              target="_blank" 
              rel="noopener" 
              class="text-white/70 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="inline">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us on LinkedIn
            </a>
          </div>
        </div>
        <div class="border-t border-white/10 pt-5 text-center">
          <p class="text-white/50">© {{ new Date().getFullYear() }} Loko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from './Header.vue'

export default {
  name: 'ContactPage',
  components: {
    AppHeader
  },
  methods: {
    navigateToHome() {
      window.location.href = '/'
    },
    navigateToForBusiness() {
      window.location.href = '/for-business'
    },
    navigateToOurNetwork() {
      window.location.href = '/our-network'
    },
    navigateToContact() {
      window.location.href = '/contact'
    }
  }
}
</script>
