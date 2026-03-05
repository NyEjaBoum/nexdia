<template>
  <div :class="'testi-card'" :style="cardStyle">
    <!-- Globe badge -->
    <div :style="{ position: 'absolute', top: '24px', right: '24px', width: '28px', height: '28px', borderRadius: '50%', background: darkMode ? 'rgba(255,255,255,.08)' : 'rgba(43,18,1,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
      <Icon name="globe" :size="14" :color="darkMode ? 'rgba(255,243,214,.4)' : 'rgba(43,18,1,.25)'" />
    </div>

    <!-- Quote icon -->
    <div :style="{ width: '36px', height: '36px', borderRadius: '10px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }">
      <Icon name="quote" :size="18" :color="theme.yellow" />
    </div>

    <!-- Stars -->
    <div :style="{ display: 'flex', gap: '3px', marginBottom: '14px' }">
      <Icon v-for="j in (testimonial.stars || 5)" :key="j" name="star" :size="14" :color="theme.yellow" />
    </div>

    <!-- Text -->
    <p :style="{ fontSize: '15px', color: darkMode ? 'rgba(255,243,214,.8)' : 'rgba(43,18,1,.75)', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }">
      «{{ testimonial.text }}»
    </p>

    <!-- Author -->
    <div :style="{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: 'auto' }">
      <div :style="{ width: '46px', height: '46px', borderRadius: '50%', background: `linear-gradient(135deg, ${theme.terra}, ${theme.yellow})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
        <Icon name="people" :size="22" color="#fff" />
      </div>
      <div>
        <strong :style="{ display: 'block', fontSize: '14px', fontWeight: 700, color: darkMode ? '#fff' : theme.brown }">{{ testimonial.name }}</strong>
        <span :style="{ fontSize: '13px', color: darkMode ? 'rgba(255,243,214,.5)' : 'rgba(43,18,1,.45)' }">{{ testimonial.sub }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { theme } from '~/data/theme'

const props = defineProps({
  testimonial: { type: Object, required: true },
  darkMode: { type: Boolean, default: true },
})

const cardStyle = computed(() => ({
  background: props.darkMode ? 'rgba(255,243,214,.04)' : '#fff',
  border: `1.5px solid ${props.darkMode ? 'rgba(255,243,214,.08)' : 'rgba(43,18,1,.08)'}`,
  borderRadius: '24px', padding: '32px', transition: 'all .3s',
  position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
}))
</script>
