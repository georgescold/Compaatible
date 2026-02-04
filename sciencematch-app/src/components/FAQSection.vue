<script setup lang="ts">
import { ref } from 'vue'
import FadeInSection from './FadeInSection.vue'

const faqs = [
  {
    question: 'Combien de matchs vais-je recevoir ?',
    answer: 'Tu peux recevoir jusqu\'à 5 matchs, classés par ordre de compatibilité. Avec l\'offre de lancement, tu as accès à ton match principal. Si tu souhaites découvrir les autres, tu pourras les débloquer individuellement. On préfère la transparence : pas de fausses promesses, juste des connexions qui ont du sens.'
  },
  {
    question: 'Comment calculez-vous la compatibilité ?',
    answer: 'Notre algorithme analyse tes réponses sur 16 dimensions clés : valeurs, vision du couple, mode de communication, style de vie... Chaque profil est comparé aux autres en tenant compte de tes critères (âge, localisation, etc.). Le résultat ? Un pourcentage de compatibilité qui reflète vraiment votre potentiel ensemble.'
  },
  {
    question: 'Et si je ne trouve pas l\'amour ?',
    answer: 'Notre objectif, c\'est que tu n\'aies plus jamais besoin de nous. Mais si ça ne marche pas du premier coup, tu pourras retenter l\'expérience à un tarif réduit. On croit en notre méthode, et on veut que tu trouves la bonne personne.'
  },
  {
    question: 'Combien de temps dure le test ?',
    answer: 'Environ 15 minutes. C\'est plus long qu\'un swipe, mais c\'est ce qui fait toute la différence. Prends ton temps, réponds honnêtement. Plus tes réponses sont sincères, plus ton match sera pertinent.'
  },
  {
    question: 'Mes données sont-elles protégées ?',
    answer: 'Tes données sont chiffrées et sécurisées. Ton identité reste confidentielle jusqu\'au match mutuel. On ne vend rien à personne. Point final.'
  },
  {
    question: 'Quand vais-je recevoir mes résultats ?',
    answer: 'Les résultats sont annoncés le 26 de chaque mois. Cette fenêtre nous permet de rassembler suffisamment de participants et d\'optimiser la qualité des matchs. Tu recevras une notification dès que tes compatibilités seront disponibles.'
  }
]

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="faq-section">
    <div class="container-main">
      <!-- Header -->
      <div class="section-header">
        <span class="section-label">FAQ</span>
        <h2>Questions fréquentes</h2>
        <p>Tout ce que tu dois savoir avant de te lancer.</p>
      </div>

      <!-- FAQ Items -->
      <div class="faq-list">
        <FadeInSection v-for="(faq, index) in faqs" :key="index">
          <div
            class="faq-item"
            :class="{ 'is-open': openIndex === index }"
          >
            <button
              class="faq-question"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <svg
                class="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 100px 0;
  background: var(--color-white);
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
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--color-white-cream);
  border-radius: 16px;
  border: 1px solid var(--color-gray-light);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--color-red-pure);
}

.faq-item.is-open {
  border-color: var(--color-red-pure);
}

.faq-question {
  width: 100%;
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-black);
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: var(--color-red-pure);
}

.faq-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-gray-dark);
  transition: transform 0.3s ease;
}

.faq-item.is-open .faq-icon {
  transform: rotate(180deg);
  color: var(--color-red-pure);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.is-open .faq-answer {
  max-height: 500px;
  padding: 0 28px 24px;
}

.faq-answer p {
  font-size: 1rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
}

@media (max-width: 600px) {
  .faq-section {
    padding: 70px 0;
  }

  .faq-question {
    padding: 20px;
    font-size: 0.95rem;
  }

  .faq-item.is-open .faq-answer {
    padding: 0 20px 20px;
  }
}
</style>
