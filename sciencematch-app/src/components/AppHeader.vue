<script setup lang="ts">
import logoImage from '../assets/Logo compaatible.png'
</script>

<template>
  <header class="header">
    <div class="container-main header-container">
      <!-- Logo -->
      <a href="#" class="logo">
        <img :src="logoImage" alt="Logo Compaatible" class="logo-icon" />
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
  width: 52px;
  height: auto;
  object-fit: contain;
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
  color: var(--color-gray-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-red-pure);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-red-pure);
}

.nav-link:hover::after {
  width: 100%;
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
