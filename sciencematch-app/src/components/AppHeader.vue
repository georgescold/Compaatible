<script setup lang="ts">
import IconHeart from './icons/IconHeart.vue'
</script>

<template>
  <header class="header">
    <div class="container-main header-container">
      <!-- Logo -->
      <a href="#" class="logo">
        <div class="logo-icon">
          <IconHeart class="w-5 h-5 fill-white" />
        </div>
        Compaatible
      </a>

      <!-- Navigation -->
      <nav class="nav-menu">
        <a href="#technologie" class="nav-link">Le principe</a>
        <a href="#process" class="nav-link">Comment ça marche ?</a>
        <a href="#faq" class="nav-link">FAQ</a>
        <a href="#blog" class="nav-link">Blog</a>
      </nav>

      <!-- CTA Button -->
      <a href="#participer" class="btn-secondary header-cta">
        Participer
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  background: white;
}

.header-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-black);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: start;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: var(--color-red-pure);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-gray-main);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-red-pure);
}

.header-cta {
  justify-self: end;
}

/* Responsive */
@media (max-width: 900px) {
  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .nav-menu {
    display: none;
  }
}
</style>
