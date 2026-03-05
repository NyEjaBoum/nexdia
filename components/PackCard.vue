<template>
  <div
    :class="featured ? 'pack-featured' : 'pack-card'"
    :style="cardStyle"
  >
    <!-- TOP VENTE badge -->
    <div v-if="featured" :style="topBadgeStyle">TOP VENTE</div>

    <!-- Icon -->
    <div :style="iconBoxStyle">
      <Icon :name="pack.icon" :size="40" :color="featured ? theme.brown : theme.yellow" />
    </div>

    <!-- Name -->
    <div :style="{ fontFamily: headingFont, fontSize: '28px', letterSpacing: '1px', marginBottom: '8px', color: featured ? theme.brown : '#fff' }">
      {{ pack.name }}
    </div>

    <!-- Tagline -->
    <div :style="{ fontSize: '14px', color: featured ? 'rgba(43,18,1,.55)' : 'rgba(255,243,214,.55)', marginBottom: '24px', lineHeight: 1.5 }">
      {{ pack.tagline }}
    </div>

    <!-- Items -->
    <ul :style="{ flex: 1, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '11px' }">
      <li
        v-for="item in pack.items"
        :key="item"
        :style="{
          display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px',
          color: featured ? 'rgba(43,18,1,.75)' : 'rgba(255,243,214,.75)',
          lineHeight: 1.4, paddingBottom: '10px',
          borderBottom: `1px solid ${featured ? 'rgba(43,18,1,.08)' : 'rgba(255,255,255,.05)'}`,
        }"
      >
        <Icon name="check" :size="16" :color="featured ? theme.terra : '#C94030'" :style="{ marginTop: '2px', flexShrink: 0 }" />
        {{ item }}
      </li>
    </ul>

    <!-- Price -->
    <div :style="{ fontFamily: headingFont, fontSize: '48px', color: featured ? theme.terra : theme.yellow, lineHeight: 1, marginBottom: '4px' }">
      {{ pack.price }}
    </div>
    <div :style="{ fontSize: '13px', color: featured ? 'rgba(43,18,1,.45)' : 'rgba(255,243,214,.45)', marginBottom: '20px' }">
      {{ pack.note }}
    </div>

    <!-- CTA -->
    <NuxtLink :to="`/packs/${pack.slug}`" :style="buttonStyle">
      Voir ce pack <Icon name="arrow" :size="16" color="#fff" />
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { theme } from '~/data/theme'

const props = defineProps({
  pack: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

const headingFont = "'Passion One', sans-serif"

const cardStyle = computed(() => ({
  background: props.featured ? theme.yellow : 'rgba(255,243,214,.04)',
  border: `1.5px solid ${props.featured ? theme.yellow : 'rgba(255,243,214,.1)'}`,
  borderRadius: '24px', padding: '36px 24px', display: 'flex', flexDirection: 'column',
  position: 'relative', transition: 'all .35s', overflow: 'hidden', height: '100%', boxSizing: 'border-box',
}))

const topBadgeStyle = {
  position: 'absolute', top: '-1px', right: '20px',
  background: theme.terra, color: theme.yellow, fontSize: '10px',
  fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase',
  padding: '6px 16px', borderRadius: '0 0 12px 12px',
}

const iconBoxStyle = computed(() => ({
  width: '56px', height: '56px', borderRadius: '16px',
  background: props.featured ? 'rgba(43,18,1,.1)' : 'rgba(248,199,58,.12)',
  marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
}))

const buttonStyle = computed(() => ({
  width: '100%', padding: '14px', borderRadius: '50px',
  border: props.featured ? 'none' : '2px solid rgba(255,255,255,.2)',
  background: props.featured ? theme.terra : 'transparent',
  color: '#fff', fontFamily: 'inherit', fontSize: '14px', fontWeight: 800,
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  cursor: 'pointer', transition: 'all .25s', textDecoration: 'none',
}))
</script>
