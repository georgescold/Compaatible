<script setup lang="ts">
import IconBrain from './icons/IconBrain.vue'
import IconShieldHeart from './icons/IconShieldHeart.vue'
import IconAlgorithm from './icons/IconAlgorithm.vue'

const techCards = [
  {
    icon: 'brain',
    title: 'Test de personnalité approfondi',
    description: 'Inspiré du modèle psychométrique Big Five scientifiquement reconnu. Notre test combine plus de 50 questions pour comprendre qui tu es vraiment, au-delà des apparences.',
    stat: '50+',
    statLabel: 'questions'
  },
  {
    icon: 'shield',
    title: 'Anonymat total garanti',
    description: 'Personne ne saura que tu participes. Tes données sont soigneusement protégées et ton identité n\'est révélée qu\'à ton match.',
    stat: '100%',
    statLabel: 'confidentiel'
  },
  {
    icon: 'algorithm',
    title: 'Algorithme de compatibilité',
    description: 'Nous analysons plus de 16 dimensions de ta personnalité pour identifier la personne avec laquelle tu as le plus de chances de construire une relation durable.',
    stat: '16',
    statLabel: 'dimensions'
  }
]
</script>

<template>
  <section id="technologie" class="tech-section">
    <div class="container-main">
      <!-- Header -->
      <div class="section-header">
        <span class="section-label">Notre Technologie</span>
        <h2>La démarche scientifique au service de l'amour</h2>
        <p>
          Nous combinons les dernières avancées en psychologie de la personnalité avec un algorithme propriétaire pour des matchs d'une précision inégalée.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="cards-grid">
        <div v-for="(card, index) in techCards" :key="index" class="tech-card">
          <!-- Icon -->
          <div class="card-icon">
            <IconBrain v-if="card.icon === 'brain'" class="icon" />
            <IconShieldHeart v-if="card.icon === 'shield'" class="icon" />
            <IconAlgorithm v-if="card.icon === 'algorithm'" class="icon" />
          </div>

          <!-- Stat -->
          <div class="card-stat">
            <span class="stat-number">{{ card.stat }}</span>
            <span class="stat-label">{{ card.statLabel }}</span>
          </div>

          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  padding: 100px 0;
  background: white;
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-black);
  margin-bottom: 20px;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.tech-card {
  background: var(--color-white-cream);
  padding: 40px 30px;
  border-radius: 24px;
  border: 1px solid var(--color-gray-light);
  position: relative;
  height: 100%;
}

/* Icon */
.card-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--color-red-pure) 0%, var(--color-red-dark) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.icon {
  width: 32px;
  height: 32px;
  color: white;
}

/* Stat */
.card-stat {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 15px;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-red-pure);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-gray-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.tech-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 12px;
}

.tech-card p {
  font-size: 0.95rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .tech-section {
    padding: 70px 0;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .tech-card {
    padding: 30px 25px;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
