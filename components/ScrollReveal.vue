<template>
  <div
    ref="el"
    :style="{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity .7s ease, transform .7s ease',
      transitionDelay: delay + 's',
    }"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
})

const el = ref(null)
const visible = ref(false)
let observer = null

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) visible.value = true
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )
  observer.observe(el.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
