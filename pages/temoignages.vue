<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Hero -->
    <section :style="{ background: theme.brown, padding: '80px 0 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }">
      <div :style="{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(248,199,58,.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }" />
      <div :style="{ maxWidth: '800px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }">
        <ScrollReveal>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Ce qu'ils disent</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,8vw,110px)', lineHeight: 0.88, color: '#fff', marginBottom: '24px' }">
            ILS <span :style="{ color: theme.yellow }">TÉMOIGNENT.</span>
          </h1>
          <p :style="{ fontSize: '18px', color: 'rgba(255,243,214,.7)', lineHeight: 1.75, fontWeight: 300 }">
            Des centaines d'étudiants internationaux ont fait confiance à Nexdia. Voici leurs histoires.
          </p>
        </ScrollReveal>

        <!-- Stats -->
        <ScrollReveal :delay="0.15">
          <div :style="{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '56px', flexWrap: 'wrap' }">
            <div v-for="s in STATS_TEMOIGNAGES" :key="s.label" :style="{ textAlign: 'center' }">
              <div :style="{ fontFamily: headingFont, fontSize: '56px', color: theme.yellow, lineHeight: 1 }">{{ s.value }}</div>
              <div :style="{ fontSize: '13px', color: 'rgba(255,243,214,.6)', marginTop: '4px' }">{{ s.label }}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Filtre par pack -->
    <section :style="{ background: theme.beige, padding: '32px 0', borderBottom: `1px solid ${theme.beigeDk}` }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }">
        <button
          v-for="f in filters"
          :key="f.value"
          :style="filterBtnStyle(activeFilter === f.value)"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>
    </section>

    <!-- Témoignages grid -->
    <section :style="{ background: theme.off, padding: '80px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
          <ScrollReveal
            v-for="(t, i) in filteredTestimonials"
            :key="t.name"
            :delay="(i % 3) * 0.1"
          >
            <TestimonialCard :testimonial="t" :dark-mode="false" />
          </ScrollReveal>
        </div>

        <div v-if="filteredTestimonials.length === 0" :style="{ textAlign: 'center', padding: '60px 0', color: '#8a6a4a' }">
          <Icon name="chat" :size="48" color="#d4b896" />
          <p :style="{ marginTop: '16px', fontSize: '16px' }">Aucun témoignage pour ce filtre.</p>
        </div>
      </div>
    </section>

    <!-- Partenaires -->
    <section :style="{ background: theme.beige, padding: '60px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <p :style="{ textAlign: 'center', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#b0906a', marginBottom: '32px' }">Ils font confiance à Nexdia</p>
          <div :style="{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 40px' }">
            <span v-for="p in PARTNERS" :key="p.label" :style="{ fontSize: '15px', fontWeight: 700, color: '#b0906a', padding: '8px 20px', background: '#fff', borderRadius: '50px', opacity: .7 }">{{ p.label }}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- CTA -->
    <section :style="{ background: theme.terra, padding: '80px 0', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff', marginBottom: '16px' }">
          À VOTRE TOUR <span :style="{ color: theme.yellow }">!</span>
        </h2>
        <p :style="{ color: 'rgba(255,255,255,.8)', fontSize: '17px', marginBottom: '32px', lineHeight: 1.7 }">Rejoignez les centaines d'étudiants qui ont choisi Nexdia pour leur installation en France.</p>
        <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
          <Icon name="wa" :size="18" :color="theme.brown" /> Commencer maintenant
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { theme } from '~/data/theme'
import { SITE, TESTIMONIALS, STATS_TEMOIGNAGES, PARTNERS } from '~/data/site-data'

useHead({ title: 'Témoignages — Nexdia' })

const headingFont = "'Passion One', sans-serif"
const activeFilter = ref('all')

const filters = [
  { value: 'all', label: 'Tous les témoignages' },
  { value: 'logement', label: 'Pack Logement' },
  { value: 'administratif', label: 'Pack Administratif' },
  { value: 'tranquillite', label: 'Pack Tranquillité' },
  { value: 'solidaire', label: 'Pack Solidaire' },
]

const filteredTestimonials = computed(() =>
  activeFilter.value === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.pack === activeFilter.value)
)

const filterBtnStyle = (active) => ({
  padding: '10px 22px', borderRadius: '50px', border: 'none', cursor: 'pointer',
  fontSize: '13px', fontWeight: 700, transition: 'all .2s',
  background: active ? theme.terra : '#fff',
  color: active ? '#fff' : theme.brown,
  boxShadow: active ? `0 4px 16px rgba(173,52,35,.25)` : '0 2px 8px rgba(43,18,1,.06)',
})

const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}
</script>
