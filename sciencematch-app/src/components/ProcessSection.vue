<script setup lang="ts">
import FadeInSection from './FadeInSection.vue'

const steps = [
  {
    number: 1,
    emoji: '📝',
    title: 'Tu réponds au test',
    description: '15 minutes pour révéler ta personnalité profonde et ce que tu recherches vraiment.',
    date: '1er - 19 avril'
  },
  {
    number: 2,
    emoji: '🔬',
    title: 'On analyse',
    description: 'Notre algorithme compare ton profil aux autres participants sur 16 dimensions.',
    date: '19 - 25 avril'
  },
  {
    number: 3,
    emoji: '💘',
    title: 'Tu découvres ton match',
    description: 'Tu reçois la personne la plus compatible avec toi. À toi de jouer !',
    date: '26 avril'
  }
]
</script>

<template>
  <section id="process" class="process-section">
    <div class="container-main">
      <!-- Header -->
      <FadeInSection>
        <div class="section-header">
          <span class="section-label">Comment ça marche</span>
          <h2>Simple comme 1, 2, 3</h2>
        </div>
      </FadeInSection>

      <!-- Steps Grid -->
      <div class="steps-grid">
        <FadeInSection v-for="(step, index) in steps" :key="index" :delay="index * 100">
          <div class="step-card">
            <!-- Step number badge -->
            <div class="step-number">{{ step.number }}</div>

            <!-- Emoji -->
            <div class="step-emoji">{{ step.emoji }}</div>

            <!-- Content -->
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>

            <!-- Date -->
            <span class="step-date">{{ step.date }}</span>
          </div>
        </FadeInSection>
      </div>

      <!-- Arrow connectors (desktop only) -->
      <div class="arrows-container">
        <div class="arrow"></div>
        <div class="arrow"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  padding: 80px 0;
  background: var(--color-white-cream);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--color-black);
  margin: 0;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.step-card {
  background: white;
  border-radius: 20px;
  padding: 35px 25px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(153, 0, 27, 0.1);
}

/* Step number */
.step-number {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  background: var(--color-red-pure);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 700;
}

/* Emoji */
.step-emoji {
  font-size: 2.5rem;
  margin-bottom: 15px;
  line-height: 1;
}

/* Title */
.step-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 10px;
}

/* Description */
.step-description {
  font-size: 0.95rem;
  color: var(--color-gray-dark);
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Date */
.step-date {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-red-pure);
  background: rgba(153, 0, 27, 0.08);
  padding: 6px 14px;
  border-radius: 20px;
}

/* Arrow connectors */
.arrows-container {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  padding: 0 180px;
  pointer-events: none;
}

.arrow {
  width: 40px;
  height: 40px;
  position: relative;
}

.arrow::before {
  content: '→';
  font-size: 1.5rem;
  color: var(--color-red-pure);
  opacity: 0.4;
}

/* Responsive */
@media (min-width: 900px) {
  .arrows-container {
    display: flex;
  }
}

@media (max-width: 900px) {
  .steps-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 40px;
  }

  .step-card {
    padding: 30px 25px;
  }
}

@media (max-width: 600px) {
  .process-section {
    padding: 60px 0;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .step-emoji {
    font-size: 2rem;
  }

  .step-title {
    font-size: 1.1rem;
  }

  .step-description {
    font-size: 0.9rem;
  }
}
</style>
