<template>
  <div :style="{ background: theme.terra, borderTop: '3px solid rgba(43,18,1,.2)', borderBottom: '3px solid rgba(43,18,1,.2)', overflow: 'hidden', padding: '16px 0' }">
    <div class="ticker-track">
      <div v-for="(item, i) in doubledItems" :key="i" :style="{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 28px', whiteSpace: 'nowrap' }">
        <span :style="{ fontFamily: headingFont, fontSize: '15px', letterSpacing: '3px', color: theme.yellow, textTransform: 'uppercase' }">{{ item }}</span>
        <span :style="{ width: '6px', height: '6px', borderRadius: '50%', background: theme.yellow, opacity: .5, display: 'inline-block' }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { theme } from '~/data/theme'
import { TICKER_ITEMS } from '~/data/site-data'

const headingFont = "'Passion One', sans-serif"
const doubledItems = computed(() => [...TICKER_ITEMS, ...TICKER_ITEMS])
</script>
