<template>
  <nav :style="navStyle">
    <!-- Logo -->
    <NuxtLink to="/" :style="logoStyle">
      <div :style="logoBadgeStyle">
        <span :style="logoLetterStyle">N</span>
      </div>
      NEXDIA
    </NuxtLink>

    <!-- Desktop links -->
    <div class="nav-links-desktop" :style="{ display: 'flex', gap: '4px', alignItems: 'center' }">
      <NuxtLink
        v-for="item in NAV_ITEMS"
        :key="item.id"
        :to="item.to"
        class="nav-link"
        :style="linkStyle"
      >
        {{ item.label }}
      </NuxtLink>
    </div>

    <!-- Actions -->
    <div :style="{ display: 'flex', gap: '10px', alignItems: 'center' }">
      <a :href="SITE.waLink" class="btn-outline" :style="waButtonStyle" target="_blank">
        <Icon name="wa" :size="16" :color="theme.terra" /> WhatsApp
      </a>
      <NuxtLink to="/packs" class="btn-terra" :style="ctaButtonStyle">
        Nos packs <Icon name="arrow" :size="16" color="#fff" />
      </NuxtLink>
      <!-- Hamburger -->
      <button
        id="hamb"
        :style="{ display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer', padding: '8px', background: 'none', border: 'none' }"
        @click="menuOpen = !menuOpen"
      >
        <span
          v-for="i in 3"
          :key="i"
          :style="{
            width: '22px', height: '2px', background: theme.brown, borderRadius: '2px',
            display: 'block', transition: '.25s',
            transform: menuOpen ? (i === 1 ? 'rotate(45deg) translate(5px,5px)' : i === 3 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
            opacity: menuOpen && i === 2 ? 0 : 1,
          }"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" :style="mobileMenuStyle">
      <NuxtLink
        v-for="item in NAV_ITEMS"
        :key="item.id"
        :to="item.to"
        :style="mobileLinkStyle"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
      <a :href="SITE.waLink" class="btn-terra" :style="{ ...ctaButtonStyle, width: '100%', justifyContent: 'center' }" target="_blank" @click="menuOpen = false">
        <Icon name="wa" :size="16" color="#fff" /> Parler à un conseiller
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { theme } from '~/data/theme'
import { SITE, NAV_ITEMS } from '~/data/site-data'

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navStyle = computed(() => ({
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
  height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0 40px', background: 'rgba(253,250,244,.93)', backdropFilter: 'blur(18px)',
  borderBottom: '1px solid rgba(43,18,1,.07)',
  boxShadow: scrolled.value ? '0 4px 24px rgba(43,18,1,.08)' : 'none',
  transition: 'box-shadow .3s',
}))

const logoStyle = {
  display: 'flex', alignItems: 'center', gap: '10px',
  fontFamily: "'Passion One', sans-serif", fontSize: '30px',
  letterSpacing: '2px', color: theme.terra, textDecoration: 'none',
}

const logoBadgeStyle = {
  width: '36px', height: '36px', background: theme.terra, borderRadius: '8px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

const logoLetterStyle = {
  fontFamily: "'Passion One', sans-serif", fontSize: '22px', color: theme.yellow,
}

const linkStyle = {
  padding: '8px 16px', borderRadius: '40px', fontSize: '14px', fontWeight: 600,
  color: theme.brownMd, border: 'none', background: 'none', cursor: 'pointer',
  fontFamily: 'inherit', transition: 'all .2s', textDecoration: 'none',
}

const waButtonStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '10px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: 700,
  border: `2px solid ${theme.terra}`, color: theme.terra, background: 'transparent',
  fontFamily: 'inherit', transition: 'all .25s', cursor: 'pointer', textDecoration: 'none',
}

const ctaButtonStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '10px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: 700,
  background: theme.terra, color: '#fff', fontFamily: 'inherit', transition: 'all .25s',
  cursor: 'pointer', boxShadow: '0 4px 20px rgba(173,52,35,.3)', textDecoration: 'none',
}

const mobileMenuStyle = {
  position: 'absolute', top: '72px', left: 0, right: 0,
  background: 'rgba(253,250,244,.98)', backdropFilter: 'blur(18px)',
  padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: '8px',
  borderBottom: '1px solid rgba(43,18,1,.1)', boxShadow: '0 8px 32px rgba(43,18,1,.08)',
}

const mobileLinkStyle = {
  padding: '14px 20px', borderRadius: '12px', fontSize: '16px', fontWeight: 600,
  color: theme.brownMd, textDecoration: 'none', transition: 'all .2s',
}
</script>
