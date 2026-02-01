<script setup lang="ts">
import UrgencyBanner from './components/UrgencyBanner.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TechnologySection from './components/TechnologySection.vue'
import ComparisonSection from './components/ComparisonSection.vue'
import PourQuiSection from './components/PourQuiSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import StorySection from './components/StorySection.vue'
import QuoteSection from './components/QuoteSection.vue'
import FAQSection from './components/FAQSection.vue'
import FinalCTASection from './components/FinalCTASection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <UrgencyBanner />
    <AppHeader />
    <main>
      <HeroSection />
      <TechnologySection />
      <ComparisonSection />
      <PourQuiSection />
      <TestimonialsSection />
      <ProcessSection />
      <StorySection />
      <QuoteSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <AppFooter />
  </div>
</template>
