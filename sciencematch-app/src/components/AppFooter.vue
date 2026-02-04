<script setup lang="ts">
import logoImage from '../assets/Logo compaatible.png'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black text-white py-16 pb-8">
    <div class="container-main">
      <!-- Footer Content -->
      <div class="flex flex-wrap justify-between items-start gap-10 mb-10">
        <!-- Brand -->
        <div class="max-w-xs">
          <a href="#" class="font-serif text-2xl font-bold text-white no-underline flex items-center gap-2.5 mb-4">
            <img :src="logoImage" alt="Compaatible" class="w-10 h-10 object-contain">
            Compaatible
          </a>
          <p class="text-white/60 text-sm leading-relaxed">
            Une approche différente des rencontres pour des relations qui durent.
          </p>
        </div>

        <!-- Legal Links -->
        <div>
          <h4 class="font-sans font-semibold text-white mb-4">Légal</h4>
          <nav class="flex flex-col gap-2.5">
            <a href="#" class="text-white/60 text-sm no-underline hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" class="text-white/60 text-sm no-underline hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" class="text-white/60 text-sm no-underline hover:text-white transition-colors">Mentions légales</a>
          </nav>
        </div>

        <!-- Contact Links -->
        <div>
          <h4 class="font-sans font-semibold text-white mb-4">Contact</h4>
          <nav class="flex flex-col gap-2.5">
            <a href="mailto:contact@compaatible.fr" class="text-white/60 text-sm no-underline hover:text-white transition-colors">contact@compaatible.fr</a>
            <a href="#" class="text-white/60 text-sm no-underline hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
        <p>© {{ currentYear }} Compaatible. Tous droits réservés. Fait avec ❤️ pour ceux qui cherchent l'amour.</p>
      </div>
    </div>
  </footer>
</template>
