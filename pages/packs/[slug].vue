<template>
  <div v-if="pack" :style="{ paddingTop: '72px' }">
    <!-- Hero Pack -->
    <section :style="{ background: theme.brown, padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }">
      <div :style="{ position: 'absolute', top: '-150px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(248,199,58,.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }" />
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }">
        <NuxtLink to="/packs" :style="backLinkStyle">
          <Icon name="arrow" :size="16" color="currentColor" :style="{ transform: 'rotate(180deg)' }" /> Tous les packs
        </NuxtLink>

        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginTop: '40px' }">
          <ScrollReveal>
            <!-- Featured badge -->
            <div v-if="pack.featured" :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: theme.yellow, color: theme.brown, fontSize: '12px', fontWeight: 800, padding: '6px 16px', borderRadius: '50px', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }">
              ⭐ Top vente
            </div>
            <div :style="{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(248,199,58,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }">
              <Icon :name="pack.icon" :size="44" :color="theme.yellow" />
            </div>
            <span :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '12px', display: 'block' }">Pack Nexdia</span>
            <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,7vw,88px)', lineHeight: 0.9, color: '#fff', marginBottom: '24px' }">
              {{ pack.heroTitle }}
            </h1>
            <p :style="{ fontSize: '17px', color: 'rgba(255,243,214,.7)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '36px', fontWeight: 300 }">
              {{ pack.fullDesc }}
            </p>
            <div :style="{ display: 'flex', gap: '14px', flexWrap: 'wrap' }">
              <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
                <Icon name="wa" :size="18" :color="theme.brown" /> Choisir ce pack
              </a>
              <NuxtLink to="/packs" :style="btnGhostStyle">
                Comparer les packs <Icon name="arrow" :size="16" color="#fff" />
              </NuxtLink>
            </div>
          </ScrollReveal>

          <!-- Price card -->
          <ScrollReveal :delay="0.2">
            <div :style="priceCardStyle">
              <div :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: pack.featured ? 'rgba(43,18,1,.4)' : 'rgba(248,199,58,.6)', marginBottom: '8px' }">
                {{ pack.featured ? 'Pack complet' : 'Paiement unique' }}
              </div>
              <div :style="{ fontFamily: headingFont, fontSize: '80px', lineHeight: 0.9, color: pack.featured ? theme.terra : theme.yellow, marginBottom: '8px' }">
                {{ pack.price }}
              </div>
              <div :style="{ fontSize: '15px', color: pack.featured ? 'rgba(43,18,1,.4)' : 'rgba(255,243,214,.45)', marginBottom: '28px' }">{{ pack.note }}</div>
              <ul :style="{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }">
                <li v-for="item in pack.items" :key="item" :style="{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: pack.featured ? 'rgba(43,18,1,.7)' : 'rgba(255,243,214,.7)', lineHeight: 1.4 }">
                  <Icon name="check" :size="16" :color="pack.featured ? theme.terra : '#4ADE80'" :style="{ marginTop: '2px', flexShrink: 0 }" />
                  {{ item }}
                </li>
              </ul>
              <a :href="SITE.waLink" :style="{ ...ctaBtnStyle, background: pack.featured ? theme.terra : theme.yellow, color: pack.featured ? '#fff' : theme.brown }" target="_blank">
                Commencer maintenant <Icon name="arrow" :size="16" :color="pack.featured ? '#fff' : theme.brown" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '64px' }">
            <span :style="labelTerraStyle">Comment ça marche</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: theme.brown }">
              LE PROCESSUS <span :style="{ color: theme.terra }">NEXDIA</span>
            </h2>
          </div>
        </ScrollReveal>

        <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }">
          <ScrollReveal v-for="(step, i) in pack.process" :key="step.step" :delay="i * 0.08">
            <div :style="processStepStyle">
              <div :style="{ width: '56px', height: '56px', borderRadius: '16px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
                <span :style="{ fontFamily: headingFont, fontSize: '24px', color: theme.yellow }">{{ String(step.step).padStart(2, '0') }}</span>
              </div>
              <div>
                <strong :style="{ display: 'block', fontSize: '17px', fontWeight: 800, color: theme.brown, marginBottom: '6px' }">{{ step.title }}</strong>
                <p :style="{ fontSize: '15px', color: '#6b4c30', lineHeight: 1.65 }">{{ step.desc }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Cities (logement only) -->
    <section v-if="pack.cities" :style="{ background: theme.beige, padding: '80px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '40px' }">
            <span :style="labelTerraStyle">Disponible dans</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(32px,4vw,56px)', color: theme.brown }">
              NOS <span :style="{ color: theme.terra }">VILLES</span>
            </h2>
          </div>
          <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }">
            <div v-for="city in pack.cities" :key="city" :style="cityBadgeStyle">
              <Icon name="map" :size="16" :color="theme.terra" /> {{ city }}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Eligibility (solidaire only) -->
    <section v-if="pack.eligibility" :style="{ background: theme.beige, padding: '80px 0' }">
      <div :style="{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '40px' }">
            <span :style="labelTerraStyle">Critères d'éligibilité</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(32px,4vw,56px)', color: theme.brown }">
              SUIS-JE <span :style="{ color: theme.terra }">ÉLIGIBLE ?</span>
            </h2>
          </div>
          <div :style="{ display: 'flex', flexDirection: 'column', gap: '14px' }">
            <div v-for="item in pack.eligibility" :key="item" :style="{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: '#fff', borderRadius: '14px', padding: '16px 20px', borderLeft: `4px solid ${theme.terra}` }">
              <Icon name="check" :size="18" :color="theme.terra" :style="{ marginTop: '2px', flexShrink: 0 }" />
              <span :style="{ fontSize: '15px', color: theme.brown, lineHeight: 1.5 }">{{ item }}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Témoignages liés -->
    <section :style="{ background: theme.brown, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Ils ont choisi ce pack</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff' }">
              CE QU'ILS <span :style="{ color: theme.yellow }">DISENT</span>
            </h2>
          </div>
        </ScrollReveal>
        <div class="grid-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
          <ScrollReveal v-for="(t, i) in packTestimonials" :key="t.name" :delay="i * 0.1">
            <TestimonialCard :testimonial="t" :dark-mode="true" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- FAQ du pack -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '48px' }">
            <span :style="labelTerraStyle">Questions fréquentes</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(32px,4vw,56px)', color: theme.brown }">
              VOS <span :style="{ color: theme.terra }">QUESTIONS</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div v-for="(item, i) in pack.faq" :key="i" :style="{ borderBottom: '1px solid rgba(43,18,1,.08)' }">
            <button @click="toggleFaq(i)" :style="{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', gap: '16px' }">
              <span :style="{ fontSize: '16px', fontWeight: 700, color: theme.brown }">{{ item.q }}</span>
              <Icon name="arrow" :size="20" :color="theme.terra" :style="{ flexShrink: 0, transform: openFaq === i ? 'rotate(90deg)' : 'none', transition: 'transform .3s' }" />
            </button>
            <div :style="{ maxHeight: openFaq === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height .35s ease' }">
              <p :style="{ fontSize: '15px', color: '#6b4c30', lineHeight: 1.75, paddingBottom: '20px' }">{{ item.a }}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- CTA -->
    <section :style="{ background: theme.terra, padding: '80px 0', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff', marginBottom: '16px' }">
          PRÊT·E À <span :style="{ color: theme.yellow }">COMMENCER ?</span>
        </h2>
        <p :style="{ color: 'rgba(255,255,255,.8)', fontSize: '17px', marginBottom: '32px', lineHeight: 1.7 }">Contactez-nous maintenant — premier échange gratuit et sans engagement.</p>
        <div :style="{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }">
          <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
            <Icon name="wa" :size="18" :color="theme.brown" /> Réserver ce pack
          </a>
          <NuxtLink to="/packs" :style="btnGhostStyle">Voir les autres packs</NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 pack -->
  <div v-else :style="{ paddingTop: '72px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px', background: theme.off }">
    <h1 :style="{ fontFamily: 'Passion One, sans-serif', fontSize: '64px', color: theme.terra }">404</h1>
    <p>Pack introuvable.</p>
    <NuxtLink to="/packs" :style="{ color: theme.terra, fontWeight: 700 }">← Voir tous les packs</NuxtLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { theme } from '~/data/theme'
import { SITE, PACKS, TESTIMONIALS } from '~/data/site-data'

const route = useRoute()
const openFaq = ref(null)

const pack = computed(() => PACKS.find(p => p.slug === route.params.slug))

const packTestimonials = computed(() => {
  if (!pack.value) return []
  const related = TESTIMONIALS.filter(t => t.pack === pack.value.slug)
  return related.length >= 2 ? related : TESTIMONIALS.slice(0, 3)
})

useHead(() => ({
  title: pack.value ? `Pack ${pack.value.name} — Nexdia` : 'Pack — Nexdia',
}))

const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const headingFont = "'Passion One', sans-serif"

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const backLinkStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  color: 'rgba(255,243,214,.5)', fontSize: '14px', textDecoration: 'none', transition: 'color .2s',
}

const priceCardStyle = computed(() => ({
  background: pack.value?.featured ? theme.yellow : 'rgba(255,243,214,.06)',
  border: `2px solid ${pack.value?.featured ? theme.yellow : 'rgba(255,243,214,.12)'}`,
  borderRadius: '28px', padding: '40px 36px',
}))

const processStepStyle = {
  display: 'flex', gap: '20px', alignItems: 'flex-start',
  background: '#fff', borderRadius: '20px', padding: '24px 28px',
  boxShadow: '0 4px 20px rgba(43,18,1,.06)', borderLeft: `4px solid ${theme.terra}`,
}

const cityBadgeStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  background: '#fff', border: `1.5px solid rgba(173,52,35,.15)`,
  borderRadius: '50px', padding: '10px 20px', fontSize: '14px', fontWeight: 700,
  color: theme.brown, boxShadow: '0 2px 12px rgba(43,18,1,.05)',
}

const ctaBtnStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  padding: '16px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: 800,
  textDecoration: 'none', transition: 'all .25s',
}

const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}

const btnGhostStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  border: '2px solid rgba(255,255,255,.4)', color: '#fff', background: 'rgba(255,255,255,.08)',
  textDecoration: 'none', transition: 'all .25s',
}
</script>
