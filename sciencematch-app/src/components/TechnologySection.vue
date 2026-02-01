<script setup lang="ts">
import FadeInSection from './FadeInSection.vue'
import IconBrain from './icons/IconBrain.vue'
import IconShieldHeart from './icons/IconShieldHeart.vue'
import IconAlgorithm from './icons/IconAlgorithm.vue'

const techCards = [
  {
    icon: 'brain',
    title: 'Test de personnalité approfondi',
    description: 'Inspiré du modèle psychométrique Big Five scientifiquement reconnu. Notre test combine plus de 50 questions pour comprendre qui tu es vraiment, au-delà des apparences.'
  },
  {
    icon: 'shield',
    title: 'Anonymat total garanti',
    description: 'Personne ne saura que tu participes. Tes données sont soigneusement protégées et ton identité n\'est révélée qu\'à ton match.'
  },
  {
    icon: 'algorithm',
    title: 'Algorithme de compatibilité',
    description: 'Nous analysons plus de 16 dimensions de ta personnalité pour identifier la personne avec laquelle tu as le plus de chances de construire une relation durable.'
  }
]
</script>

<template>
  <section id="technologie" class="py-24 bg-white">
    <div class="container-main">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="section-label">Notre Technologie</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl text-black mb-5">La démarche scientifique au service de l'amour</h2>
        <p class="text-lg text-gray-main">
          Nous combinons les dernières avancées en psychologie de la personnalité avec un algorithme propriétaire pour des matchs d'une précision inégalée.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FadeInSection v-for="(card, index) in techCards" :key="index">
          <div class="bg-white-cream p-10 rounded-3xl border border-gray-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
            <div class="w-16 h-16 bg-gradient-to-br from-red-pure to-red-dark rounded-2xl flex items-center justify-center mb-6">
              <IconBrain v-if="card.icon === 'brain'" class="w-7 h-7 text-white" />
              <IconShieldHeart v-if="card.icon === 'shield'" class="w-7 h-7 text-white" />
              <IconAlgorithm v-if="card.icon === 'algorithm'" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-black mb-3">{{ card.title }}</h3>
            <p class="text-gray-main">{{ card.description }}</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>
