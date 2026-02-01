import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useCountdown(initialHours: number = 47, initialMinutes: number = 23) {
  const totalSeconds = ref(initialHours * 3600 + initialMinutes * 60 + 41)
  let intervalId: number | null = null

  const hours = computed(() => Math.floor(totalSeconds.value / 3600))
  const minutes = computed(() => Math.floor((totalSeconds.value % 3600) / 60))
  const seconds = computed(() => totalSeconds.value % 60)

  const formattedHours = computed(() => hours.value.toString().padStart(2, '0'))
  const formattedMinutes = computed(() => minutes.value.toString().padStart(2, '0'))
  const formattedSeconds = computed(() => seconds.value.toString().padStart(2, '0'))

  const start = () => {
    if (intervalId) return
    intervalId = window.setInterval(() => {
      if (totalSeconds.value > 0) {
        totalSeconds.value--
      }
    }, 1000)
  }

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onMounted(start)
  onUnmounted(stop)

  return {
    hours,
    minutes,
    seconds,
    formattedHours,
    formattedMinutes,
    formattedSeconds,
    totalSeconds,
    start,
    stop
  }
}
