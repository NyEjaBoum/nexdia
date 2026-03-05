<template>
  <section :style="{ background: theme.brown, padding: '100px 0' }">
    <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
      <ScrollReveal>
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end', marginBottom: '64px' }">
          <div>
            <span :style="labelStyle">Ce que vous vivez</span>
            <h2 class="section-title" :style="{ fontFamily: headingFont, fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: 0.92, color: '#fff' }">
              L'ARRIVÉE<br />EN FRANCE<br /><span :style="{ color: '#C94030' }">ÇA STRESSE.</span>
            </h2>
          </div>
          <div>
            <p :style="{ fontSize: '17px', color: 'rgba(255,243,214,.6)', lineHeight: 1.8, fontWeight: 300, maxWidth: '420px' }">
              Vous n'êtes pas seul·e. Des milliers d'étudiants affrontent les mêmes obstacles chaque année. Nexdia est né précisément pour changer ça.
            </p>
            <NuxtLink to="/#solution" :style="{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', color: theme.yellow, fontWeight: 700, fontSize: '14px', textDecoration: 'none' }">
              Voir notre solution <Icon name="arrow" :size="16" :color="theme.yellow" />
            </NuxtLink>
          </div>
        </div>
      </ScrollReveal>

      <div class="grid-5" :style="{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }">
        <ScrollReveal v-for="(p, i) in PROBLEMS" :key="p.title" :delay="i * 0.08">
          <div class="prob-card" :style="probCardStyle">
            <div :style="iconBoxStyle">
              <Icon :name="p.icon" :size="40" :color="theme.yellow" />
            </div>
            <div :style="{ fontSize: '15px', fontWeight: 800, color: '#fff', marginBottom: '10px' }">{{ p.title }}</div>
            <div :style="{ fontSize: '13px', color: 'rgba(255,243,214,.5)', lineHeight: 1.65 }">{{ p.desc }}</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { theme } from '~/data/theme'
import { PROBLEMS } from '~/data/site-data'

const headingFont = "'Passion One', sans-serif"

const labelStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: 'rgba(248,199,58,.7)', marginBottom: '16px',
}

const probCardStyle = {
  background: 'rgba(255,243,214,.04)', border: '1.5px solid rgba(255,243,214,.08)',
  borderRadius: '20px', padding: '32px 20px', transition: 'all .35s',
  cursor: 'default', position: 'relative', overflow: 'hidden',
}

const iconBoxStyle = {
  width: '52px', height: '52px', background: 'rgba(248,199,58,.1)',
  borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
  marginBottom: '18px',
}
</script>
