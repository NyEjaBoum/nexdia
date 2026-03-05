<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Hero -->
    <section :style="{ background: `linear-gradient(135deg, ${theme.terra} 0%, #8A2518 100%)`, padding: '80px 0 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }">
      <div :style="{ position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'rgba(248,199,58,.08)', borderRadius: '50%', pointerEvents: 'none' }" />
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }">
        <ScrollReveal>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '16px' }">Contactez-nous</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,8vw,100px)', lineHeight: 0.88, color: '#fff', marginBottom: '24px' }">
            ON EST <span :style="{ color: theme.yellow }">LÀ.</span>
          </h1>
          <p :style="{ fontSize: '18px', color: 'rgba(255,255,255,.8)', lineHeight: 1.75, fontWeight: 300 }">
            Une question ? Un doute ? Une urgence ? Notre équipe répond en moins de 2h sur WhatsApp.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Canaux de contact -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <!-- WhatsApp (principal) -->
        <ScrollReveal>
          <a :href="SITE.waLink" target="_blank" :style="waMainCardStyle">
            <div :style="{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }">
              <div :style="{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
                <Icon name="wa" :size="36" color="#fff" />
              </div>
              <div>
                <div :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '6px' }">Moyen préféré · Réponse &lt; 2h</div>
                <div :style="{ fontFamily: headingFont, fontSize: '36px', color: '#fff', lineHeight: 1 }">WhatsApp</div>
                <div :style="{ fontSize: '15px', color: 'rgba(255,255,255,.7)', marginTop: '4px' }">{{ SITE.phone }}</div>
              </div>
            </div>
            <div :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: theme.yellow, color: theme.brown, padding: '14px 28px', borderRadius: '50px', fontWeight: 800, fontSize: '15px', flexShrink: 0 }">
              Ouvrir WhatsApp <Icon name="arrow" :size="18" :color="theme.brown" />
            </div>
          </a>
        </ScrollReveal>

        <!-- Autres canaux -->
        <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '28px' }">
          <ScrollReveal v-for="(channel, i) in channels" :key="channel.title" :delay="i * 0.08">
            <a :href="channel.href" :target="channel.external ? '_blank' : undefined" :style="channelCardStyle">
              <div :style="{ width: '48px', height: '48px', borderRadius: '14px', background: `rgba(173,52,35,.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }">
                <Icon :name="channel.icon" :size="24" :color="theme.terra" />
              </div>
              <div :style="{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#b0906a', marginBottom: '6px' }">{{ channel.type }}</div>
              <div :style="{ fontSize: '17px', fontWeight: 800, color: theme.brown, marginBottom: '4px' }">{{ channel.title }}</div>
              <div :style="{ fontSize: '13px', color: '#8a6a4a' }">{{ channel.sub }}</div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Horaires -->
    <section :style="{ background: theme.beige, padding: '80px 0' }">
      <div :style="{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }">
          <ScrollReveal>
            <span :style="labelTerraStyle">Disponibilité</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: theme.brown, marginBottom: '32px' }">
              NOS <span :style="{ color: theme.terra }">HORAIRES</span>
            </h2>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '12px' }">
              <div v-for="h in horaires" :key="h.day" :style="horaireRowStyle(h.active)">
                <span :style="{ fontWeight: 700, fontSize: '14px', color: h.active ? theme.brown : '#b0906a' }">{{ h.day }}</span>
                <span :style="{ fontSize: '14px', color: h.active ? theme.terra : '#b0906a', fontWeight: h.active ? 700 : 400 }">{{ h.time }}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal :delay="0.15">
            <div :style="{ background: theme.brown, borderRadius: '28px', padding: '40px 36px', boxShadow: '0 20px 60px rgba(43,18,1,.12)' }">
              <Icon name="shield" :size="40" :color="theme.yellow" />
              <h3 :style="{ fontFamily: headingFont, fontSize: '28px', color: '#fff', margin: '14px 0 12px' }">URGENCES 7J/7</h3>
              <p :style="{ fontSize: '14px', color: 'rgba(255,243,214,.65)', lineHeight: 1.75, marginBottom: '24px' }">
                Pour les clients ayant souscrit au Pack Tranquillité ou Pack Solidaire, une ligne urgence est disponible 7j/7, même les week-ends et jours fériés.
              </p>
              <NuxtLink to="/packs/tranquillite" :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: theme.yellow, textDecoration: 'none' }">
                Découvrir le Pack Tranquillité <Icon name="arrow" :size="16" :color="theme.yellow" />
              </NuxtLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Réseaux sociaux -->
    <section :style="{ background: theme.brown, padding: '80px 0', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Suivez-nous</span>
          <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(32px,5vw,56px)', color: '#fff', marginBottom: '32px' }">
            RETROUVEZ-NOUS <span :style="{ color: theme.yellow }">EN LIGNE</span>
          </h2>
          <div :style="{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }">
            <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank" :style="socialBtnStyle">
              <Icon :name="social.icon" :size="22" :color="social.color" />
              {{ social.name }}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE } from '~/data/site-data'

useHead({ title: 'Contact — Nexdia' })

const headingFont = "'Passion One', sans-serif"

const channels = [
  { icon: 'mail', type: 'Email', title: SITE.email, sub: 'Réponse sous 24h', href: `mailto:${SITE.email}`, external: false },
  { icon: 'phone', type: 'Téléphone', title: SITE.phone, sub: 'Lun–Sam · 9h–19h', href: `tel:${SITE.phone}`, external: false },
  { icon: 'map', type: 'Adresse', title: 'Paris, France', sub: SITE.address, href: 'https://maps.google.com/?q=Paris', external: true },
]

const socials = [
  { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com', color: '#E1306C' },
  { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com', color: '#1877F2' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com', color: '#0077B5' },
]

const horaires = [
  { day: 'Lundi – Vendredi', time: '9h00 – 19h00', active: true },
  { day: 'Samedi', time: '10h00 – 17h00', active: true },
  { day: 'Dimanche', time: 'Fermé', active: false },
  { day: 'Jours fériés', time: 'Fermé (hors urgences)', active: false },
]

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const waMainCardStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
  background: `linear-gradient(135deg, #25D366, #128C7E)`,
  borderRadius: '24px', padding: '36px 40px', textDecoration: 'none', boxShadow: '0 20px 60px rgba(37,211,102,.25)',
  transition: 'transform .25s, box-shadow .25s',
}

const channelCardStyle = {
  display: 'block', background: '#fff', borderRadius: '20px', padding: '28px 24px',
  boxShadow: '0 4px 20px rgba(43,18,1,.06)', textDecoration: 'none', transition: 'all .25s',
  borderBottom: `3px solid ${theme.terra}`,
}

const horaireRowStyle = (active) => ({
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderRadius: '12px', background: active ? '#fff' : 'rgba(176,144,106,.1)',
  boxShadow: active ? '0 2px 10px rgba(43,18,1,.05)' : 'none',
})

const socialBtnStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '14px 28px', borderRadius: '50px', fontSize: '14px', fontWeight: 700,
  background: 'rgba(255,255,255,.06)', color: '#fff', border: '1px solid rgba(255,255,255,.12)',
  textDecoration: 'none', transition: 'all .25s',
}
</script>
