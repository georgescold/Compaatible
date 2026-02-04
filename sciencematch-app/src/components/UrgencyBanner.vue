<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown'

const { formattedHours, formattedMinutes, formattedSeconds } = useCountdown(47, 23)
</script>

<template>
  <div class="urgency-banner">
    <p class="banner-content">
      <span class="badge-free">1ère ÉDITION</span>
      <span class="separator">·</span>
      <span class="price-crossed">19,99€</span>
      <span class="price-new">GRATUIT</span>
      <span class="limited">Places limitées</span>
      <span class="countdown">
        <span>{{ formattedHours }}</span>h
        <span>{{ formattedMinutes }}</span>m
        <span>{{ formattedSeconds }}</span>s
      </span>
    </p>
  </div>
</template>

<style scoped>
.urgency-banner {
  background: linear-gradient(135deg, var(--color-red-pure) 0%, var(--color-red-dark) 100%);
  color: white;
  padding: 14px 20px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.banner-content {
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.separator {
  opacity: 0.8;
}

.price-crossed {
  text-decoration: line-through;
  opacity: 0.7;
}

.price-new {
  font-weight: 700;
  font-size: 1.1rem;
  background: white;
  color: var(--color-red-pure);
  padding: 2px 10px;
  border-radius: 4px;
}

.badge-free {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.limited {
  opacity: 0.9;
  font-style: italic;
}

.countdown {
  display: inline-flex;
  gap: 6px;
  margin-left: 8px;
}

.countdown span {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 600px) {
  .banner-content {
    font-size: 0.85rem;
  }

  .countdown span {
    padding: 3px 8px;
    font-size: 0.85rem;
  }
}
</style>
