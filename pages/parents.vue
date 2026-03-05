<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Hero -->
    <section :style="{ background: `linear-gradient(135deg, ${theme.terra} 0%, #8A2518 100%)`, padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }">
      <div :style="{ position: 'absolute', top: '-120px', right: '-80px', width: '500px', height: '500px', background: 'rgba(248,199,58,.12)', borderRadius: '50%', pointerEvents: 'none' }" />
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }">
        <ScrollReveal>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.7)', marginBottom: '16px' }">Espace parents</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,8vw,100px)', lineHeight: 0.88, color: '#fff', marginBottom: '24px' }">
            VOTRE ENFANT<br /><span :style="{ color: theme.yellow }">ENTRE DE<br />BONNES MAINS.</span>
          </h1>
          <p :style="{ fontSize: '18px', color: 'rgba(255,255,255,.8)', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300, marginBottom: '40px' }">
            Votre enfant part étudier en France ? Nexdia veille sur lui à chaque étape. Parce que vous avez besoin de dormir sur vos deux oreilles.
          </p>
          <a :href="SITE.waLink" :style="btnWhiteStyle" target="_blank">
            <Icon name="wa" :size="18" :color="theme.terra" /> Parler à l'équipe parents
          </a>
        </ScrollReveal>
      </div>
    </section>

    <!-- Stat bannière -->
    <section :style="{ background: theme.yellow, padding: '40px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }">
        <span :style="{ fontFamily: headingFont, fontSize: '64px', color: theme.brown, lineHeight: 1 }">97%</span>
        <p :style="{ fontSize: '18px', color: theme.brown, fontWeight: 700, maxWidth: '400px' }">des parents Nexdia déclarent avoir eu l'esprit tranquille durant toute l'installation de leur enfant.</p>
      </div>
    </section>

    <!-- Garanties -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '64px' }">
            <span :style="labelTerraStyle">Nos engagements</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,72px)', color: theme.brown }">
              NOS <span :style="{ color: theme.terra }">GARANTIES</span><br />PARENTS
            </h2>
          </div>
        </ScrollReveal>

        <div class="grid-3" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }">
          <ScrollReveal v-for="(g, i) in GUARANTEES" :key="g.title" :delay="i * 0.08">
            <div :style="guaranteeCardStyle">
              <div :style="{ width: '56px', height: '56px', borderRadius: '16px', background: `linear-gradient(135deg, ${theme.terra}, #C94030)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }">
                <Icon :name="g.icon" :size="28" :color="theme.yellow" />
              </div>
              <h3 :style="{ fontSize: '18px', fontWeight: 800, color: theme.brown, marginBottom: '10px' }">{{ g.title }}</h3>
              <p :style="{ fontSize: '14px', color: '#7a5a3a', lineHeight: 1.7 }">{{ g.sub }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Comment ça marche pour les parents -->
    <section :style="{ background: theme.beige, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }">
          <ScrollReveal>
            <span :style="labelTerraStyle">Transparent &amp; rassurant</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: theme.brown, marginBottom: '32px', lineHeight: 1.05 }">
              VOUS RESTEZ<br /><span :style="{ color: theme.terra }">INFORMÉS.</span>
            </h2>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
              <div v-for="step in parentSteps" :key="step.num" :style="{ display: 'flex', alignItems: 'flex-start', gap: '16px' }">
                <div :style="{ width: '36px', height: '36px', borderRadius: '50%', background: theme.terra, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', flexShrink: 0 }">{{ step.num }}</div>
                <div>
                  <strong :style="{ display: 'block', fontWeight: 700, fontSize: '16px', color: theme.brown }">{{ step.title }}</strong>
                  <span :style="{ fontSize: '14px', color: '#8a6a4a' }">{{ step.desc }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal :delay="0.15">
            <div :style="reassuranceBoxStyle">
              <Icon name="shield" :size="48" :color="theme.yellow" />
              <h3 :style="{ fontFamily: headingFont, fontSize: '36px', color: '#fff', margin: '16px 0 12px' }">PACK TRANQUILLITÉ</h3>
              <p :style="{ color: 'rgba(255,255,255,.75)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }">Conçu spécialement pour les parents qui veulent déléguer 100% de l'installation. Suivi personnalisé, bilan hebdomadaire, accompagnement logement.</p>
              <NuxtLink to="/packs/tranquillite" :style="btnYellowStyle">
                Découvrir ce pack <Icon name="arrow" :size="18" :color="theme.brown" />
              </NuxtLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- FAQ Parents -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="labelTerraStyle">Questions fréquentes</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(32px,5vw,60px)', color: theme.brown }">
              PARENTS, <span :style="{ color: theme.terra }">ON RÉPOND.</span>
            </h2>
          </div>
        </ScrollReveal>
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '12px' }">
          <div v-for="(faq, i) in parentFaq" :key="faq.q" :style="faqItemStyle">
            <button :style="faqBtnStyle(openFaq === i)" @click="openFaq = openFaq === i ? null : i">
              <span :style="{ fontWeight: 700, fontSize: '15px', color: theme.brown }">{{ faq.q }}</span>
              <Icon name="arrow" :size="18" :color="theme.terra" :style="{ transform: openFaq === i ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform .25s' }" />
            </button>
            <transition name="faq">
              <p v-if="openFaq === i" :style="{ padding: '0 24px 20px', fontSize: '14px', color: '#7a5a3a', lineHeight: 1.75, margin: 0 }">{{ faq.a }}</p>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section :style="{ background: theme.brown, padding: '80px 0', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff', marginBottom: '16px' }">
          PARLONS-EN <span :style="{ color: theme.yellow }">ENSEMBLE</span>
        </h2>
        <p :style="{ color: 'rgba(255,243,214,.7)', fontSize: '17px', marginBottom: '32px', lineHeight: 1.7 }">Notre équipe est disponible pour répondre à toutes vos questions en tant que parents.</p>
        <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
          <Icon name="wa" :size="18" :color="theme.brown" /> Contacter l'équipe parents
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { theme } from '~/data/theme'
import { SITE, GUARANTEES } from '~/data/site-data'

useHead({ title: 'Parents — Nexdia' })

const headingFont = "'Passion One', sans-serif"
const openFaq = ref(null)

const parentSteps = [
  { num: 1, title: 'Consultation initiale offerte', desc: 'Un conseiller vous appelle pour comprendre la situation et les besoins spécifiques de votre enfant.' },
  { num: 2, title: 'Suivi en temps réel', desc: 'Vous recevez des bilans réguliers sur l\'avancement des démarches administratives et du logement.' },
  { num: 3, title: 'Contact direct garanti', desc: 'Un référent dédié joignable à tout moment pour répondre à vos questions.' },
  { num: 4, title: 'Bilan final complet', desc: 'À la fin du pack, un compte-rendu détaillé de tout ce qui a été réalisé.' },
]

const parentFaq = [
  { q: 'Puis-je payer directement les services pour mon enfant ?', a: 'Oui, absolument. Les parents peuvent régler le pack directement depuis leur pays. Nous acceptons les virements internationaux et cartes bancaires étrangères.' },
  { q: 'Comment puis-je suivre les progrès de mon enfant ?', a: 'Vous recevez un bilan par email après chaque étape clé. Pour les packs Tranquillité et Solidaire, un point téléphonique hebdomadaire est prévu.' },
  { q: 'Que se passe-t-il si mon enfant a un problème urgent ?', a: 'Notre équipe est disponible 7j/7 via WhatsApp pour les situations urgentes (problème de logement, document manquant avant une échéance, etc.).' },
  { q: 'Est-ce que Nexdia peut aider à trouver un garant ?', a: 'Oui, nous travaillons avec des services de garantie locative reconnus (Visale, garantie bancaire) et accompagnons vos enfants dans les démarches.' },
]

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const guaranteeCardStyle = {
  background: '#fff', borderRadius: '24px', padding: '32px 28px',
  boxShadow: '0 4px 20px rgba(43,18,1,.06)', borderTop: `3px solid ${theme.terra}`,
  height: '100%',
}

const reassuranceBoxStyle = {
  background: theme.brown, borderRadius: '28px', padding: '44px 36px',
  boxShadow: '0 20px 60px rgba(43,18,1,.18)', display: 'flex', flexDirection: 'column',
}

const btnWhiteStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: '#fff', color: theme.terra, textDecoration: 'none', transition: 'all .25s',
}

const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}

const faqItemStyle = {
  background: '#fff', borderRadius: '16px', overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(43,18,1,.05)',
}

const faqBtnStyle = (open) => ({
  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
  borderBottom: open ? `1px solid ${theme.beige}` : 'none',
})
</script>

<style scoped>
.faq-enter-active, .faq-leave-active { transition: all .25s; }
.faq-enter-from, .faq-leave-to { opacity: 0; max-height: 0; }
.faq-enter-to, .faq-leave-from { opacity: 1; max-height: 200px; }
</style>
