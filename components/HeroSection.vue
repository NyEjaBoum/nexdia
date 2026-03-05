<template>
  <section :style="heroStyle">
    <!-- Decorative blobs -->
    <div :style="{ position: 'absolute', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(248,199,58,.18) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }" />
    <div :style="{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(173,52,35,.35) 0%, transparent 70%)', bottom: '-100px', left: '-80px', borderRadius: '50%', pointerEvents: 'none' }" />
    <div :style="{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(248,199,58,.12) 0%, transparent 70%)', top: '40%', left: '30%', borderRadius: '50%', pointerEvents: 'none' }" />
    <div :style="{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', background: 'linear-gradient(135deg, rgba(173,52,35,.15) 0%, rgba(248,199,58,.08) 100%)', clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }" />

    <div :style="{ position: 'relative', zIndex: 2, padding: '0 40px', maxWidth: '1200px', margin: '0 auto', width: '100%' }">
      <!-- Active badge -->
      <div :style="badgeStyle">
        <div :style="{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', animation: 'hdot 2s infinite' }" />
        <span :style="{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: theme.yellow }">Accompagnement actif — 7 jours sur 7</span>
      </div>

      <!-- Title -->
      <h1 class="hero-title" :style="{ fontFamily: headingFont, fontSize: 'clamp(64px, 10vw, 148px)', lineHeight: 0.88, letterSpacing: '2px', color: '#fff', marginBottom: '36px' }">
        À VOUS<br />
        <span :style="{ color: theme.yellow }">LA FRANCE !</span><br />
        <span :style="{ WebkitTextStroke: '2.5px rgba(255,255,255,.35)', color: 'transparent' }">SEREINEMENT</span>
      </h1>

      <!-- Grid: desc + stats -->
      <div class="hero-grid" :style="{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'flex-end' }">
        <div>
          <p :style="{ fontSize: '18px', color: 'rgba(255,243,214,.75)', lineHeight: 1.75, maxWidth: '540px', marginBottom: '36px', fontWeight: 300 }">
            {{ SITE.description }}
          </p>
          <div :style="{ display: 'flex', gap: '14px', flexWrap: 'wrap' }">
            <NuxtLink to="/packs" class="btn-yellow" :style="btnYellowStyle">
              Découvrir les packs <Icon name="arrow" :size="18" :color="theme.brown" />
            </NuxtLink>
            <a :href="SITE.waLink" class="btn-ghost" :style="btnGhostStyle" target="_blank">
              <Icon name="wa" :size="18" color="#fff" /> Parler à un conseiller
            </a>
          </div>
        </div>

        <!-- Stats -->
        <div class="hero-stats" :style="{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '4px' }">
          <div v-for="s in STATS" :key="s.label">
            <span :style="{ fontFamily: headingFont, fontSize: '52px', color: theme.yellow, lineHeight: 1, display: 'block' }">{{ s.value }}</span>
            <span :style="{ fontSize: '13px', color: 'rgba(255,243,214,.6)', fontWeight: 400 }">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE, STATS } from '~/data/site-data'

const headingFont = "'Passion One', sans-serif"

const heroStyle = {
  minHeight: '100vh', background: theme.brown, position: 'relative', overflow: 'hidden',
  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '72px',
}

const badgeStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '10px',
  border: '1.5px solid rgba(248,199,58,.4)', background: 'rgba(248,199,58,.1)',
  padding: '8px 18px', borderRadius: '40px', marginBottom: '28px', backdropFilter: 'blur(8px)',
}

const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, fontFamily: 'inherit',
  transition: 'all .25s', cursor: 'pointer', boxShadow: '0 4px 20px rgba(248,199,58,.35)',
  textDecoration: 'none',
}

const btnGhostStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  border: '2px solid rgba(255,255,255,.4)', color: '#fff',
  background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(8px)',
  fontFamily: 'inherit', transition: 'all .25s', cursor: 'pointer', textDecoration: 'none',
}
</script>
