<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  direction: 'up'
})

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const getTransformClass = () => {
  if (isVisible.value) return 'opacity-100 translate-y-0 translate-x-0'

  switch (props.direction) {
    case 'down': return 'opacity-0 -translate-y-8'
    case 'left': return 'opacity-0 translate-x-8'
    case 'right': return 'opacity-0 -translate-x-8'
    default: return 'opacity-0 translate-y-8'
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true
          }, props.delay)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})
</script>

<template>
  <div
    ref="elementRef"
    class="fade-in-section"
    :class="getTransformClass()"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<style scoped>
.fade-in-section {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
