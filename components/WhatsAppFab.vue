<template>
  <a
    :href="SITE.waLink"
    class="wa-fab"
    aria-label="WhatsApp Nexdia"
    :style="fabStyle"
    target="_blank"
  >
    <Icon name="wa" :size="30" color="#fff" />
    <span class="wa-tooltip" :style="tooltipStyle">Parler à un conseiller</span>
  </a>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE } from '~/data/site-data'

const fabStyle = {
  position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
  width: '64px', height: '64px', borderRadius: '50%', background: '#25D366',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: '0 8px 32px rgba(37,211,102,.5)', textDecoration: 'none', transition: 'all .25s',
}

const tooltipStyle = {
  position: 'absolute', right: '76px', top: '50%', transform: 'translateY(-50%)',
  background: theme.brown, color: theme.yellow, fontSize: '13px', fontWeight: 700,
  whiteSpace: 'nowrap', padding: '8px 16px', borderRadius: '50px',
  opacity: 0, pointerEvents: 'none', transition: 'opacity .25s', letterSpacing: '.3px',
}
</script>
