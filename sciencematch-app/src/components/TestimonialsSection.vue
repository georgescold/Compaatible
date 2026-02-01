<script setup lang="ts">
import FadeInSection from './FadeInSection.vue'

const testimonials = [
  {
    text: 'Compaatible m\'a proposé plusieurs matchs et j\'ai choisi celui avec la plus haute compatibilité. Merci à eux car ça fait 5 mois que je suis avec Léa.',
    names: 'Antoine & Léa',
    location: 'Lyon · Ensemble depuis 5 mois',
    compatibility: 78
  },
  {
    text: 'Oui le test est long, mais franchement ça vaut le coup. Avec Claire on a matché à 82%, et honnêtement ça se ressent au quotidien.',
    names: 'Mathieu & Claire',
    location: 'Paris · Ensemble depuis 8 mois',
    compatibility: 82
  },
  {
    text: 'J\'ai 34 ans, j\'en pouvais plus de Tinder. Là au moins c\'est pas du hasard. Julien et moi on a les mêmes délires, ça change.',
    names: 'Sophie & Julien',
    location: 'Bruxelles · Ensemble depuis 6 mois',
    compatibility: 74
  }
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container-main">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="section-label">Ils l'ont trouvé</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl text-black mb-5">Des histoires qui commencent ici</h2>
        <p class="text-lg text-gray-main">
          Ces couples se sont rencontrés grâce à Compaatible. Aujourd'hui, ils construisent leur vie ensemble.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FadeInSection v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <!-- Quote mark -->
            <span class="quote-mark">"</span>

            <div class="testimonial-content">
              <p class="testimonial-text">
                "{{ testimonial.text }}"
              </p>

              <div class="testimonial-author">
                <div class="avatar-placeholder"></div>
                <div class="author-info">
                  <h4>{{ testimonial.names }}</h4>
                  <p>{{ testimonial.location }}</p>
                  <span class="compatibility-badge">
                    {{ testimonial.compatibility }}% de compatibilité
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  height: 100%;
}

.quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 8rem;
  color: var(--color-red-pure);
  opacity: 0.1;
  position: absolute;
  top: 10px;
  left: 20px;
  line-height: 1;
}

.testimonial-content {
  position: relative;
  z-index: 1;
}

.testimonial-text {
  font-size: 1.1rem;
  color: var(--color-black);
  margin-bottom: 32px;
  font-style: italic;
  line-height: 1.8;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar-placeholder {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-gray-light) 0%, #D1D1D1 100%);
  border: 3px solid var(--color-red-pure);
  flex-shrink: 0;
}

.author-info h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 4px;
}

.author-info p {
  font-size: 0.9rem;
  color: var(--color-gray-main);
  margin-bottom: 8px;
}

.compatibility-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(153, 0, 27, 0.1);
  color: var(--color-red-pure);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

@media (max-width: 600px) {
  .testimonial-card {
    padding: 28px;
  }

  .testimonial-text {
    font-size: 1rem;
  }
}
</style>
