<script setup lang="ts">
import IconStar from './icons/IconStar.vue'
import IconShield from './icons/IconShield.vue'
import IconCheck from './icons/IconCheck.vue'
import IconCheckCircle from './icons/IconCheckCircle.vue'
import IconArrowRight from './icons/IconArrowRight.vue'
import heroBackground from '../assets/image test site (2).jpg'
</script>

<template>
  <section class="hero">
    <!-- Background Image -->
    <div class="hero-bg">
      <img :src="heroBackground" alt="" />
      <div class="hero-bg-overlay"></div>
    </div>

    <!-- Decorative gradients (like original) -->
    <div class="hero-decoration-1"></div>
    <div class="hero-decoration-2"></div>

    <div class="container-main hero-content">
      <!-- Badge -->
      <div class="hero-badge">
        <IconStar class="hero-badge-icon" />
        Basé sur la science de la personnalité
      </div>

      <!-- Title -->
      <h1 class="hero-title">
        Ton <span>âme sœur</span> existe.<br>On va la trouver.
      </h1>

      <!-- Subtitle -->
      <p class="hero-subtitle">
        Fini les dates décevants et la solitude prolongée. Compaatible analyse ta personnalité en profondeur pour te présenter <strong>la personne la plus compatible avec toi</strong>.
      </p>

      <!-- CTA Group -->
      <div class="hero-cta-group">
        <a href="#participer" class="btn-primary">
          Participe à l'expérience
          <IconArrowRight class="w-5 h-5" />
        </a>
        <span class="discount-badge">-50% offre de lancement</span>
      </div>


      <!-- Trust badges -->
      <div class="hero-trust">
        <div class="hero-trust-item">
          <IconShield class="hero-trust-icon" />
          Données 100% confidentielles
        </div>
        <div class="hero-trust-item">
          <IconCheck class="hero-trust-icon" />
          1 seul match par mois
        </div>
        <div class="hero-trust-item">
          <IconCheckCircle class="hero-trust-icon" />
          Sans abonnement
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0 100px;
  background: var(--color-white-cream);
  position: relative;
  overflow: hidden;
}

/* Background image */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(251, 249, 247, 0.78);
}

/* Decorative gradients */
.hero-decoration-1 {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(153, 0, 27, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

.hero-decoration-2 {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(153, 0, 27, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-light);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--color-gray-main);
  margin-bottom: 30px;
  animation: fadeInUp 0.6s ease;
}

.hero-badge-icon {
  width: 16px;
  height: 16px;
  fill: var(--color-red-pure);
}

.hero-title {
  font-family: 'Playfair Display', serif !important;
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-black);
  margin-bottom: 24px;
  animation: fadeInUp 0.6s ease 0.1s both;
}

.hero-title span {
  color: var(--color-red-pure);
  position: relative;
  font-family: 'Playfair Display', serif !important;
}

.hero-title span::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(153, 0, 27, 0.2);
  z-index: -1;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: var(--color-gray-main);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.hero-subtitle strong {
  color: var(--color-black);
}

.hero-cta-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: fadeInUp 0.6s ease 0.3s both;
}

.discount-badge {
  background: white;
  color: var(--color-black);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 10px;
  border: 1px solid var(--color-gray-light);
}

.hero-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease 0.4s both;
}

.hero-trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--color-gray-main);
}

.hero-trust-icon {
  width: 18px;
  height: 18px;
  fill: var(--color-red-pure);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 600px) {
  .hero {
    padding: 50px 0 70px;
  }

  .hero-trust {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
