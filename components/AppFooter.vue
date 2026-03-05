<template>
  <footer :style="{ background: theme.brown, color: 'rgba(255,243,214,.5)', padding: '80px 40px 36px' }">
    <div :style="{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 1fr', gap: '60px', maxWidth: '1200px', margin: '0 auto', paddingBottom: '56px', borderBottom: '1px solid rgba(255,243,214,.08)', marginBottom: '32px' }" class="grid-4">
      <!-- Brand -->
      <div>
        <div :style="{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }">
          <div :style="{ width: '40px', height: '40px', background: theme.terra, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
            <span :style="{ fontFamily: headingFont, fontSize: '22px', color: theme.yellow }">N</span>
          </div>
          <span :style="{ fontFamily: headingFont, fontSize: '26px', letterSpacing: '2px', color: theme.yellow }">NEXDIA</span>
        </div>
        <div :style="{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(255,243,214,.35)', marginBottom: '20px', lineHeight: 1.5 }">
          "Parce que chaque étudiant mérite un bon départ"
        </div>
        <p :style="{ fontSize: '14px', lineHeight: 1.8, marginBottom: '28px', maxWidth: '280px' }">
          L'accompagnement humain et complet pour les étudiants internationaux en France. De l'aéroport jusqu'à votre intégration réussie.
        </p>
        <div :style="{ display: 'flex', gap: '10px' }">
          <a
            v-for="social in ['facebook', 'instagram', 'linkedin']"
            :key="social"
            :href="SITE.socials[social]"
            class="social-btn"
            :style="socialBtnStyle"
            target="_blank"
          >
            <Icon :name="social" :size="16" color="rgba(255,243,214,.6)" />
          </a>
        </div>
      </div>

      <!-- Columns -->
      <div v-for="col in FOOTER_COLS" :key="col.title">
        <h4 :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,243,214,.3)', marginBottom: '20px' }">
          {{ col.title }}
        </h4>
        <ul :style="{ display: 'flex', flexDirection: 'column', gap: '11px' }">
          <li v-for="item in col.items" :key="item.label">
            <NuxtLink
              v-if="!item.external"
              :to="item.href"
              class="footer-link"
              :style="footerLinkStyle"
            >
              <Icon name="arrow" :size="14" color="currentColor" /> {{ item.label }}
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              class="footer-link"
              :style="footerLinkStyle"
              target="_blank"
            >
              <Icon name="arrow" :size="14" color="currentColor" /> {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div :style="{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '12px' }">
      <span>© {{ new Date().getFullYear() }} Nexdia — Fondé par Cathy Rakotovao avec amour</span>
      <div :style="{ display: 'flex', gap: '20px', flexWrap: 'wrap' }">
        <a v-for="l in legalLinks" :key="l" href="#" class="footer-link" :style="{ color: 'rgba(255,243,214,.3)', textDecoration: 'none', transition: 'color .2s' }">{{ l }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE, FOOTER_COLS } from '~/data/site-data'

const headingFont = "'Passion One', sans-serif"
const legalLinks = ['Mentions légales', 'Confidentialité', 'RGPD', 'CGV']

const socialBtnStyle = {
  width: '38px', height: '38px', borderRadius: '50%',
  background: 'rgba(255,243,214,.07)', border: '1px solid rgba(255,243,214,.1)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'all .2s', cursor: 'pointer',
}

const footerLinkStyle = {
  fontSize: '14px', color: 'rgba(255,243,214,.5)', textDecoration: 'none',
  transition: 'color .2s', display: 'flex', alignItems: 'center', gap: '8px',
}
</script>
