<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Hero -->
    <section :style="{ background: theme.beige, padding: '80px 0 60px', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <span :style="labelTerraStyle">Centre d'aide</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,8vw,100px)', lineHeight: 0.88, color: theme.brown }">
            QUESTIONS <span :style="{ color: theme.terra }">FRÉQUENTES</span>
          </h1>
          <p :style="{ fontSize: '17px', color: '#8a6a4a', marginTop: '24px', lineHeight: 1.75, fontWeight: 300 }">
            Toutes les réponses aux questions les plus posées sur Nexdia, nos packs et nos services.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Recherche -->
    <section :style="{ background: theme.off, padding: '32px 0', borderBottom: `1px solid ${theme.beigeDk}` }">
      <div :style="{ maxWidth: '600px', margin: '0 auto', padding: '0 40px' }">
        <div :style="searchWrapStyle">
          <Icon name="help" :size="20" color="#b0906a" />
          <input
            v-model="search"
            type="text"
            placeholder="Rechercher une question..."
            :style="searchInputStyle"
          />
        </div>
      </div>
    </section>

    <!-- FAQs par catégorie -->
    <section :style="{ background: theme.off, padding: '60px 0 100px' }">
      <div :style="{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }">
        <div v-for="cat in filteredCategories" :key="cat.category" :style="{ marginBottom: '64px' }">
          <ScrollReveal>
            <div :style="catHeaderStyle">
              <span :style="{ fontFamily: headingFont, fontSize: '28px', color: theme.terra }">{{ cat.category }}</span>
              <span :style="{ fontSize: '13px', fontWeight: 700, color: '#b0906a' }">{{ cat.items.length }} question{{ cat.items.length > 1 ? 's' : '' }}</span>
            </div>
          </ScrollReveal>

          <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }">
            <div v-for="(item, i) in cat.items" :key="item.q" :style="faqItemStyle">
              <button :style="faqBtnStyle(isOpen(cat.category, i))" @click="toggle(cat.category, i)">
                <span :style="{ fontWeight: 700, fontSize: '15px', color: theme.brown, textAlign: 'left', flex: 1 }">{{ item.q }}</span>
                <div :style="{ width: '28px', height: '28px', borderRadius: '50%', background: isOpen(cat.category, i) ? theme.terra : theme.beige, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .25s' }">
                  <Icon name="arrow" :size="14" :color="isOpen(cat.category, i) ? '#fff' : theme.terra" :style="{ transform: isOpen(cat.category, i) ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform .25s' }" />
                </div>
              </button>
              <transition name="faq">
                <p v-if="isOpen(cat.category, i)" :style="{ padding: '0 24px 20px', fontSize: '14px', color: '#6a4a2a', lineHeight: 1.8, margin: 0 }">{{ item.a }}</p>
              </transition>
            </div>
          </div>
        </div>

        <!-- Aucun résultat -->
        <div v-if="filteredCategories.length === 0" :style="{ textAlign: 'center', padding: '80px 0' }">
          <Icon name="help" :size="56" color="#d4b896" />
          <h3 :style="{ fontFamily: headingFont, fontSize: '32px', color: theme.brown, margin: '16px 0 8px' }">Aucun résultat</h3>
          <p :style="{ color: '#8a6a4a', fontSize: '15px', marginBottom: '24px' }">Votre question n'est pas dans la FAQ ? Contactez-nous directement.</p>
          <a :href="SITE.waLink" :style="btnTerraStyle" target="_blank">
            <Icon name="wa" :size="18" color="#fff" /> Poser ma question sur WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Still need help -->
    <section :style="{ background: theme.brown, padding: '80px 0' }">
      <div :style="{ maxWidth: '800px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }">
        <ScrollReveal>
          <Icon name="chat" :size="52" :color="theme.yellow" />
          <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff', margin: '16px 0 12px' }">
            TOUJOURS UNE <span :style="{ color: theme.yellow }">QUESTION ?</span>
          </h2>
          <p :style="{ color: 'rgba(255,243,214,.7)', fontSize: '17px', marginBottom: '36px', lineHeight: 1.7 }">
            Notre équipe répond en moins de 2h sur WhatsApp, du lundi au samedi.
          </p>
          <div :style="{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }">
            <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
              <Icon name="wa" :size="18" :color="theme.brown" /> WhatsApp
            </a>
            <a :href="`mailto:${SITE.email}`" :style="btnGhostStyle">
              <Icon name="mail" :size="18" color="#fff" /> {{ SITE.email }}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { theme } from '~/data/theme'
import { SITE, FAQ } from '~/data/site-data'

useHead({ title: 'FAQ — Nexdia' })

const headingFont = "'Passion One', sans-serif"
const search = ref('')
const openItems = ref({})

const isOpen = (cat, i) => !!openItems.value[`${cat}-${i}`]
const toggle = (cat, i) => {
  const key = `${cat}-${i}`
  openItems.value = { ...openItems.value, [key]: !openItems.value[key] }
}

const filteredCategories = computed(() => {
  if (!search.value.trim()) return FAQ
  const q = search.value.toLowerCase()
  return FAQ
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      ),
    }))
    .filter(cat => cat.items.length > 0)
})

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const searchWrapStyle = {
  display: 'flex', alignItems: 'center', gap: '12px', background: '#fff',
  border: `2px solid ${theme.beigeDk}`, borderRadius: '50px', padding: '12px 20px',
  transition: 'border-color .25s',
}

const searchInputStyle = {
  flex: 1, border: 'none', outline: 'none', fontSize: '15px', color: theme.brown,
  background: 'transparent', fontFamily: "'Overpass', sans-serif",
}

const catHeaderStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  borderBottom: `2px solid ${theme.terra}`, paddingBottom: '12px',
}

const faqItemStyle = {
  background: '#fff', borderRadius: '16px', overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(43,18,1,.05)', transition: 'box-shadow .25s',
}

const faqBtnStyle = (open) => ({
  width: '100%', display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'space-between',
  padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
  borderBottom: open ? `1px solid ${theme.beige}` : 'none',
})

const btnTerraStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '16px 32px', borderRadius: '40px', fontSize: '15px', fontWeight: 700,
  background: theme.terra, color: '#fff', textDecoration: 'none', transition: 'all .25s',
}

const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}

const btnGhostStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.3)',
  textDecoration: 'none', transition: 'all .25s',
}
</script>

<style scoped>
.faq-enter-active, .faq-leave-active { transition: all .3s ease; overflow: hidden; }
.faq-enter-from, .faq-leave-to { opacity: 0; max-height: 0; padding: 0; }
.faq-enter-to, .faq-leave-from { opacity: 1; max-height: 300px; }
</style>
