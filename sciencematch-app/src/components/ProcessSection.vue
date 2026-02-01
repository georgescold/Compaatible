<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FadeInSection from './FadeInSection.vue'

const steps = [
  {
    number: 1,
    date: 'Du 1er au 19',
    title: 'Passe le test',
    description: '50 questions pour cerner ta personnalité, tes valeurs et ta vision du couple.',
    features: ['Test scientifiquement validé', 'Profil 100% confidentiel']
  },
  {
    number: 2,
    date: 'Du 19 au 25',
    title: 'Analyse & Matching',
    description: 'Nous comparons ton profil à celui des autres participants selon tes critères.',
    features: ['Compatibilité sur 16 dimensions', 'Respect de tes préférences']
  },
  {
    number: 3,
    date: 'Le 26',
    title: 'Découvre tes matchs',
    description: 'Tu reçois tes compatibilités avec leur pourcentage. À toi de faire le premier pas sur Insta.',
    features: ['Matchs classés par compatibilité', 'Contact via Instagram']
  }
]

// Scroll progress tracking
const sectionRef = ref<HTMLElement | null>(null)
const progress1 = ref(0)
const progress2 = ref(0)

const updateProgress = () => {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const sectionHeight = rect.height
  const viewportHeight = window.innerHeight

  const scrolled = viewportHeight - rect.top
  const totalScroll = sectionHeight + viewportHeight * 0.5
  const scrollPercent = Math.max(0, Math.min(1, scrolled / totalScroll))

  progress1.value = Math.max(0, Math.min(1, (scrollPercent - 0.15) / 0.35))
  progress2.value = Math.max(0, Math.min(1, (scrollPercent - 0.5) / 0.35))
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <section id="process" ref="sectionRef" class="process-section">
    <div class="container-main">
      <!-- Header -->
      <div class="section-header">
        <span class="section-label">Comment ça marche ?</span>
        <h2>3 étapes, un seul objectif</h2>
        <p>Une méthode simple mais rigoureuse qui maximise tes chances de trouver la bonne personne.</p>
      </div>

      <!-- Steps Container -->
      <div class="steps-container">
        <template v-for="(step, index) in steps" :key="index">
          <FadeInSection>
            <div class="step-card">
              <!-- Left side: Number -->
              <div class="step-left">
                <div class="step-number">
                  <span class="number-inner">{{ step.number }}</span>
                </div>
              </div>

              <!-- Right side: Content -->
              <div class="step-right">
                <!-- Date Badge -->
                <span class="step-date">{{ step.date }}</span>

                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>

                <!-- Features -->
                <ul class="step-features">
                  <li v-for="(feature, fIndex) in step.features" :key="fIndex">
                    <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>

          <!-- Elegant connector between cards -->
          <div v-if="index < steps.length - 1" class="step-connector">
            <div class="connector-line">
              <div
                class="connector-fill"
                :style="{ height: (index === 0 ? progress1 : progress2) * 100 + '%' }"
              ></div>
            </div>
            <div
              class="connector-chevron"
              :class="{ active: (index === 0 ? progress1 : progress2) >= 1 }"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  padding: 100px 0;
  background: var(--color-white-cream);
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 70px;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-black);
  margin-bottom: 20px;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--color-gray-main);
}

.steps-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 600px;
  margin: 0 auto;
}

.step-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  gap: 28px;
  width: 100%;
  position: relative;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(153, 0, 27, 0.1);
}

.step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  width: 60px;
  height: 60px;
  position: relative;
  flex-shrink: 0;
}

.step-number::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-red-pure) 0%, #b8001f 100%);
  border-radius: 18px;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.step-card:hover .step-number::before {
  transform: rotate(50deg);
}

.number-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
}

.step-right {
  flex: 1;
}

.step-date {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
  background: var(--color-red-pure);
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.step-right h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 10px;
}

.step-right p {
  font-size: 0.95rem;
  color: var(--color-gray-main);
  line-height: 1.6;
  margin-bottom: 16px;
}

.step-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.step-features li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--color-black);
  font-weight: 500;
  background: var(--color-white-cream);
  padding: 6px 12px;
  border-radius: 20px;
}

.feature-icon {
  width: 14px;
  height: 14px;
  color: var(--color-red-pure);
  flex-shrink: 0;
}

/* Elegant connector */
.step-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
  padding: 8px 0;
  position: relative;
}

.connector-line {
  width: 2px;
  flex: 1;
  background: rgba(153, 0, 27, 0.15);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.connector-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--color-red-pure);
  border-radius: 2px;
  transition: height 0.2s ease-out;
}

.connector-chevron {
  margin-top: 4px;
  color: rgba(153, 0, 27, 0.25);
  transition: all 0.4s ease;
}

.connector-chevron svg {
  width: 20px;
  height: 20px;
}

.connector-chevron.active {
  color: var(--color-red-pure);
  animation: bounce-down 1s ease-in-out infinite;
}

@keyframes bounce-down {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}

/* Responsive */
@media (max-width: 600px) {
  .process-section {
    padding: 70px 0;
  }

  .step-card {
    padding: 24px;
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .step-left {
    align-items: center;
  }

  .step-number {
    width: 52px;
    height: 52px;
  }

  .number-inner {
    font-size: 1.4rem;
  }

  .step-date {
    font-size: 0.85rem;
  }

  .step-right h3 {
    font-size: 1.25rem;
  }

  .step-features {
    justify-content: center;
  }

  .step-connector {
    height: 45px;
  }
}
</style>
