<script setup lang="ts">
import IconArrowRight from './icons/IconArrowRight.vue'
</script>

<style scoped>
.final-cta {
  background: var(--color-white-cream);
  text-align: center;
  padding: 100px 0;
}

.free-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, var(--color-red-pure) 0%, var(--color-red-dark) 100%);
  color: white;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 30px;
}

.free-badge-icon {
  font-size: 1.2rem;
}

.final-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.2;
  margin-bottom: 20px;
}

.final-subtitle {
  font-size: 1.25rem;
  color: var(--color-gray-dark);
  max-width: 500px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.price-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.price-original {
  font-size: 1.5rem;
  color: var(--color-gray-main);
  text-decoration: line-through;
  opacity: 0.6;
}

.price-arrow {
  font-size: 1.5rem;
  color: var(--color-gray-main);
}

.price-free {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-red-pure);
}

.btn-large {
  font-size: 1.2rem;
  padding: 1.25rem 3rem;
}

.cta-note {
  margin-top: 20px;
  font-size: 0.9rem;
  color: var(--color-gray-dark);
  font-style: italic;
}

@media (max-width: 600px) {
  .final-cta {
    padding: 70px 0;
  }

  .price-display {
    gap: 10px;
  }

  .price-original {
    font-size: 1.2rem;
  }

  .price-free {
    font-size: 2.5rem;
  }

  .btn-large {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
}
</style>

<template>
  <section id="participer" class="final-cta">
    <div class="container-main">
      <div class="free-badge">
        <span class="free-badge-icon">🎁</span>
        <span>1ère édition · Accès 100% gratuit</span>
      </div>

      <h2 class="final-title">
        Prêt(e) à rencontrer<br>quelqu'un qui te comprend vraiment ?
      </h2>

      <p class="final-subtitle">
        Rejoins les personnes qui ont choisi une approche différente pour trouver l'amour.
      </p>

      <div class="price-display">
        <span class="price-original">19,99€</span>
        <span class="price-arrow">→</span>
        <span class="price-free">0€</span>
      </div>

      <a href="#" class="btn-primary btn-large">
        Participer gratuitement
        <IconArrowRight class="w-5 h-5 transition-transform duration-300" />
      </a>

      <p class="cta-note">
        Offre exclusive première édition · Avril 2025
      </p>
    </div>
  </section>
</template>
