<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Page Header -->
    <section :style="{ background: theme.brown, padding: '80px 0 100px' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <NuxtLink to="/" :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,243,214,.5)', fontSize: '14px', marginBottom: '32px', textDecoration: 'none' }">
            <Icon name="arrow" :size="16" color="currentColor" :style="{ transform: 'rotate(180deg)' }" /> Retour à l'accueil
          </NuxtLink>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Nos formules</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(48px,7vw,100px)', lineHeight: 0.9, color: '#fff', marginBottom: '24px' }">
            CHOISISSEZ <span :style="{ color: theme.yellow }">VOTRE PACK</span>
          </h1>
          <p :style="{ fontSize: '18px', color: 'rgba(255,243,214,.65)', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300 }">
            Des formules pensées pour chaque besoin et chaque budget. Pas de superflu, que de l'essentiel.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Packs Grid -->
    <section :style="{ background: theme.brown, padding: '0 0 100px' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }">
          <ScrollReveal v-for="(pack, i) in PACKS" :key="pack.slug" :delay="i * 0.1">
            <PackCard :pack="pack" :featured="pack.featured" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Tableau comparatif -->
    <section :style="{ background: theme.beige, padding: '100px 0' }">
      <div :style="{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="labelTerraStyle">Tableau comparatif</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: theme.brown }">
              QUEL PACK POUR <span :style="{ color: theme.terra }">VOUS ?</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div :style="{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(43,18,1,.08)' }">
            <!-- Header -->
            <div :style="{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', background: theme.brown }">
              <div :style="{ padding: '20px 24px', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,243,214,.4)' }">Fonctionnalité</div>
              <div v-for="pack in PACKS" :key="pack.slug" :style="{ padding: '20px 16px', textAlign: 'center', fontFamily: headingFont, fontSize: '16px', letterSpacing: '1px', color: pack.featured ? theme.yellow : 'rgba(255,243,214,.7)', borderLeft: '1px solid rgba(255,255,255,.05)' }">
                {{ pack.name }}
              </div>
            </div>
            <!-- Rows -->
            <div v-for="(row, i) in comparisonRows" :key="row.feature" :style="{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', background: i % 2 === 0 ? '#fff' : theme.beige, borderBottom: '1px solid rgba(43,18,1,.05)' }">
              <div :style="{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: theme.brown }">{{ row.feature }}</div>
              <div v-for="pack in PACKS" :key="pack.slug" :style="{ padding: '16px', textAlign: 'center', borderLeft: '1px solid rgba(43,18,1,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
                <Icon v-if="row[pack.slug]" name="check" :size="20" :color="theme.terra" />
                <span v-else :style="{ width: '20px', height: '2px', background: 'rgba(43,18,1,.15)', display: 'block', margin: '0 auto' }" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- FAQ packs -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="labelTerraStyle">Questions fréquentes</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: theme.brown }">
              VOS <span :style="{ color: theme.terra }">QUESTIONS</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div v-for="(item, i) in packFaq" :key="i" class="faq-item" :style="{ borderBottom: '1px solid rgba(43,18,1,.08)' }">
            <button
              @click="toggleFaq(i)"
              :style="{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', gap: '16px' }"
            >
              <span :style="{ fontSize: '16px', fontWeight: 700, color: theme.brown }">{{ item.q }}</span>
              <Icon :name="openFaq === i ? 'warn' : 'arrow'" :size="20" :color="theme.terra" :style="{ flexShrink: 0, transform: openFaq === i ? 'rotate(90deg)' : 'none', transition: 'transform .3s' }" />
            </button>
            <div :style="{ maxHeight: openFaq === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height .35s ease' }">
              <p :style="{ fontSize: '15px', color: '#6b4c30', lineHeight: 1.75, paddingBottom: '20px' }">{{ item.a }}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginTop: '48px' }">
            <NuxtLink to="/faq" :style="btnOutlineStyle">
              Voir toutes les questions <Icon name="arrow" :size="16" :color="theme.terra" />
            </NuxtLink>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- CTA -->
    <section :style="{ background: theme.terra, padding: '80px 0', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff', marginBottom: '16px' }">
          ENCORE DES <span :style="{ color: theme.yellow }">DOUTES ?</span>
        </h2>
        <p :style="{ color: 'rgba(255,255,255,.8)', fontSize: '17px', marginBottom: '32px', lineHeight: 1.7 }">Parlez à un conseiller en quelques secondes — sans engagement.</p>
        <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
          <Icon name="wa" :size="18" :color="theme.brown" /> Contacter sur WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { theme } from '~/data/theme'
import { SITE, PACKS, FAQ } from '~/data/site-data'

useHead({ title: 'Nos packs — Nexdia' })

const headingFont = "'Passion One', sans-serif"
const openFaq = ref(null)

const packFaq = FAQ.find(c => c.category === 'Packs & tarifs')?.items || []

const comparisonRows = [
  { feature: "Accueil aéroport + kit bienvenue", logement: false, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Recherche logement personnalisée", logement: true, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Garant solidaire Nexdia", logement: true, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Vérification bail & propriétaire", logement: true, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Ouverture compte bancaire", logement: false, administratif: true, tranquillite: true, solidaire: false },
  { feature: "Inscription CAF & Ameli", logement: false, administratif: true, tranquillite: true, solidaire: false },
  { feature: "Aide inscription université", logement: false, administratif: true, tranquillite: true, solidaire: false },
  { feature: "Hotline démarches 3 mois", logement: false, administratif: true, tranquillite: true, solidaire: false },
  { feature: "Conseiller dédié 6 mois", logement: false, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Communauté Nexdia 1 an", logement: false, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Aide recherche job étudiant", logement: false, administratif: false, tranquillite: true, solidaire: false },
  { feature: "Consultation personnalisée", logement: false, administratif: false, tranquillite: true, solidaire: true },
  { feature: "Accès communauté 6 mois", logement: false, administratif: false, tranquillite: false, solidaire: true },
  { feature: "Ressources numériques illimitées", logement: false, administratif: false, tranquillite: true, solidaire: true },
]

const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}
const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}
const btnOutlineStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '14px 28px', borderRadius: '40px', fontSize: '14px', fontWeight: 700,
  border: `2px solid ${theme.terra}`, color: theme.terra, background: 'transparent',
  textDecoration: 'none', transition: 'all .25s',
}
</script>
