<template>
  <nav :style="navStyle">
    <!-- Logo -->
    <NuxtLink to="/" :style="logoStyle">
      <div :style="logoBadgeStyle">
        <span :style="logoLetterStyle">N</span>
      </div>
      <span :style="{ display: isMobile ? 'none' : 'inline' }">NEXDIA</span>
    </NuxtLink>

    <!-- Desktop links -->
    <div class="nav-links-desktop" :style="{ display: isMobile ? 'none' : 'flex', gap: '4px', alignItems: 'center' }">
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
    <div :style="{ display: 'flex', gap: isMobile ? '8px' : '10px', alignItems: 'center' }">
      <a v-if="!isMobile" :href="SITE.waLink" class="btn-outline" :style="waButtonStyle" target="_blank">
        <Icon name="wa" :size="16" :color="theme.terra" /> WhatsApp
      </a>
      <NuxtLink v-if="!isMobile" to="/packs" class="btn-terra" :style="ctaButtonStyle">
        Nos packs <Icon name="arrow" :size="16" color="#fff" />
      </NuxtLink>
      <!-- Hamburger -->
      <button
        v-if="isMobile"
        id="hamb"
        :style="hambStyle"
        @click="menuOpen = !menuOpen"
      >
        <span
          v-for="i in 3"
          :key="i"
          :style="{
            width: '22px', height: '2px', background: theme.brown, borderRadius: '2px',
            display: 'block', transition: '.25s',
            transform: menuOpen ? (i === 1 ? 'rotate(45deg) translate(8px,8px)' : i === 3 ? 'rotate(-45deg) translate(5px,-8px)' : 'none') : 'none',
            opacity: menuOpen && i === 2 ? 0 : 1,
          }"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen && isMobile" :style="mobileMenuStyle">
      <NuxtLink
        v-for="item in NAV_ITEMS"
        :key="item.id"
        :to="item.to"
        :style="mobileLinkStyle"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
      <a :href="SITE.waLink" class="btn-terra" :style="{ ...mobileCtaStyle }" target="_blank" @click="menuOpen = false">
        <Icon name="wa" :size="16" color="#fff" /> Parler à un conseiller
      </a>
      <NuxtLink to="/packs" class="btn-terra" :style="{ ...mobileCtaStyle }" @click="menuOpen = false">
        Nos packs <Icon name="arrow" :size="14" color="#fff" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { theme } from '~/data/theme'
import { SITE, NAV_ITEMS } from '~/data/site-data'

const scrolled = ref(false)
const menuOpen = ref(false)
const isMobile = ref(false)

// Détecte si l'écran est mobile
const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

const onScroll = () => { scrolled.value = window.scrollY > 40 }

onMounted(() => {
  updateScreenSize()
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateScreenSize)
})

const navStyle = computed(() => ({
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
  height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: isMobile.value ? '0 20px' : '0 40px',
  background: 'rgba(253,250,244,.93)', backdropFilter: 'blur(18px)',
  borderBottom: '1px solid rgba(43,18,1,.07)',
  boxShadow: scrolled.value ? '0 4px 24px rgba(43,18,1,.08)' : 'none',
  transition: 'box-shadow .3s',
}))

const logoStyle = {
  display: 'flex', alignItems: 'center', gap: '10px',
  fontFamily: "'Passion One', sans-serif", fontSize: isMobile.value ? '20px' : '30px',
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

const hambStyle = {
  display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer',
  padding: '8px', background: 'none', border: 'none',
}

const mobileMenuStyle = {
  position: 'absolute', top: '72px', left: 0, right: 0,
  background: 'rgba(253,250,244,.98)', backdropFilter: 'blur(18px)',
  padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px',
  borderBottom: '1px solid rgba(43,18,1,.1)', boxShadow: '0 8px 32px rgba(43,18,1,.08)',
  maxHeight: 'calc(100vh - 72px)', overflowY: 'auto',
}

const mobileLinkStyle = {
  padding: '12px 16px', borderRadius: '12px', fontSize: '15px', fontWeight: 600,
  color: theme.brownMd, textDecoration: 'none', transition: 'all .2s',
  borderBottom: '1px solid rgba(43,18,1,.05)',
}

const mobileCtaStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 700,
  background: theme.terra, color: '#fff', textDecoration: 'none', transition: 'all .2s',
  cursor: 'pointer', marginTop: '8px',
}
</script>
