<script setup lang="ts">
import IconCheckCircle from './icons/IconCheckCircle.vue'
</script>

<template>
  <section class="bg-red-pure text-white py-20 text-center">
    <div class="container-main">
      <blockquote class="font-serif text-2xl md:text-3xl lg:text-4xl italic max-w-3xl mx-auto mb-5 leading-relaxed">
        "La compatibilité psychologique est le meilleur prédicteur de la satisfaction et de la longévité dans une relation."
      </blockquote>
      <cite class="text-white/90 not-italic">— Dr. John Gottman, psychologue spécialiste des relations de couple</cite>

      <div class="mt-6 text-sm opacity-85 flex items-center justify-center gap-2">
        <IconCheckCircle class="w-4.5 h-4.5 fill-current" />
        <span>40 ans de recherche sur les couples · 90% de précision dans ses prédictions.</span>
      </div>
    </div>
  </section>
</template>
