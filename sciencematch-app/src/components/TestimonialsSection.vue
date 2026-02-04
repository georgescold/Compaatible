<script setup lang="ts">
const testimonials = [
  {
    text: 'Compaatible m\'a proposé plusieurs matchs et j\'ai choisi celui avec la plus haute compatibilité. Merci à eux car ça fait 5 mois que je suis avec Léa.',
    names: 'Antoine & Léa',
    location: 'Lyon · Ensemble depuis 5 mois',
    compatibility: 78,
    emoji: '💕'
  },
  {
    text: 'Oui le test est long, mais franchement ça vaut le coup. Avec Claire on a matché à 82%, et honnêtement ça se ressent au quotidien.',
    names: 'Mathieu & Claire',
    location: 'Paris · Ensemble depuis 8 mois',
    compatibility: 82,
    emoji: '✨'
  },
  {
    text: 'J\'ai 34 ans, j\'en pouvais plus de Tinder. Là au moins c\'est pas du hasard. Julien et moi on a les mêmes délires, ça change.',
    names: 'Sophie & Julien',
    location: 'Bruxelles · Ensemble depuis 6 mois',
    compatibility: 74,
    emoji: '🎯'
  }
]
</script>

<template>
  <section class="testimonials-section">
    <div class="container-main">
      <!-- Header -->
      <div class="section-header">
        <span class="section-label">Ils l'ont trouvé</span>
        <h2>Des histoires qui commencent ici</h2>
        <p>
          Ces couples se sont rencontrés grâce à Compaatible. Aujourd'hui, ils construisent leur vie ensemble.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <!-- Compatibility badge -->
          <div class="compatibility-badge">
            <span class="compatibility-number">{{ testimonial.compatibility }}</span>
            <span class="compatibility-symbol">%</span>
          </div>

          <div class="testimonial-content">
            <p class="testimonial-text">
              "{{ testimonial.text }}"
            </p>

            <div class="testimonial-author">
              <div class="avatar-placeholder">
                <span class="avatar-emoji">{{ testimonial.emoji }}</span>
              </div>
              <div class="author-info">
                <h4>{{ testimonial.names }}</h4>
                <p>{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 100px 0;
  background: white;
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 600px;
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

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.testimonial-card {
  background: white;
  padding: 35px 30px 30px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  position: relative;
  height: 100%;
}

/* Compatibility badge - simple, sans cercle SVG */
.compatibility-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: baseline;
  gap: 1px;
  background: rgba(153, 0, 27, 0.08);
  padding: 8px 14px;
  border-radius: 50px;
}

.compatibility-number {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-red-pure);
}

.compatibility-symbol {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-red-pure);
}

.testimonial-content {
  position: relative;
  z-index: 1;
  padding-top: 15px;
}

.testimonial-text {
  font-size: 1.05rem;
  color: var(--color-black);
  margin-bottom: 30px;
  font-style: italic;
  line-height: 1.7;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar-placeholder {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(153, 0, 27, 0.1) 0%, rgba(153, 0, 27, 0.05) 100%);
  border: 2px solid var(--color-red-pure);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-emoji {
  font-size: 1.3rem;
}

.author-info h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 4px;
}

.author-info p {
  font-size: 0.85rem;
  color: var(--color-gray-dark);
}

/* Responsive */
@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 70px 0;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .testimonial-card {
    padding: 35px 25px 25px;
  }

  .compatibility-number {
    font-size: 1.1rem;
  }

  .testimonial-text {
    font-size: 1rem;
  }
}
</style>
