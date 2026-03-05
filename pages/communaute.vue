<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Hero -->
    <section :style="{ background: theme.brown, padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }">
      <div :style="{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(248,199,58,.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }" />
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }">
        <ScrollReveal>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">La communauté Nexdia</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,8vw,110px)', lineHeight: 0.88, color: '#fff', marginBottom: '24px' }">
            PLUS JAMAIS<br /><span :style="{ color: theme.yellow }">SEUL·E.</span>
          </h1>
          <p :style="{ fontSize: '18px', color: 'rgba(255,243,214,.7)', maxWidth: '560px', lineHeight: 1.75, fontWeight: 300, marginBottom: '40px' }">
            Rejoignez une communauté bienveillante d'étudiants internationaux. Entraide, événements, bons plans — tout pour que la France devienne vraiment la vôtre.
          </p>
          <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
            <Icon name="wa" :size="18" :color="theme.brown" /> Rejoindre maintenant
          </a>
        </ScrollReveal>
      </div>
    </section>

    <!-- Features -->
    <section :style="{ background: theme.beige, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }">
          <ScrollReveal>
            <span :style="labelTerraStyle">Ce que vous gagnez</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(40px,5vw,72px)', color: theme.brown, marginBottom: '32px' }">
              LA COMMUNAUTÉ<br /><span :style="{ color: theme.terra }">NEXDIA</span>
            </h2>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px' }">
              <div v-for="f in COM_FEATS" :key="f.title" class="com-feat" :style="comFeatStyle">
                <div :style="{ width: '48px', height: '48px', borderRadius: '14px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
                  <Icon :name="f.icon" :size="24" :color="theme.yellow" />
                </div>
                <div>
                  <strong :style="{ display: 'block', fontSize: '16px', fontWeight: 700, color: theme.brown }">{{ f.title }}</strong>
                  <span :style="{ fontSize: '14px', color: '#8a6a4a' }">{{ f.sub }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Pricing card -->
          <ScrollReveal :delay="0.2">
            <div :style="pricingCardStyle">
              <div :style="{ position: 'absolute', top: '-80px', right: '-80px', width: '240px', height: '240px', background: theme.terra, borderRadius: '50%', opacity: .2 }" />
              <div :style="{ position: 'absolute', bottom: '-60px', left: '-60px', width: '180px', height: '180px', background: theme.yellow, borderRadius: '50%', opacity: .06 }" />
              <div :style="{ position: 'relative', zIndex: 1 }">
                <div :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.7)', marginBottom: '12px' }">Abonnement mensuel</div>
                <span :style="{ fontFamily: headingFont, fontSize: '100px', lineHeight: .88, color: '#fff', marginBottom: '6px', display: 'block' }">{{ COMMUNITY_PRICING.price }}</span>
                <div :style="{ fontSize: '16px', color: 'rgba(255,243,214,.55)', marginBottom: '20px' }">{{ COMMUNITY_PRICING.period }}</div>
                <div :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: theme.yellow, color: theme.brown, fontSize: '14px', fontWeight: 800, padding: '8px 20px', borderRadius: '50px', marginBottom: '32px' }">
                  <Icon name="gift" :size="16" :color="theme.brown" /> {{ COMMUNITY_PRICING.promo }}
                </div>
                <ul :style="{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '11px' }">
                  <li v-for="item in COMMUNITY_PRICING.features" :key="item" :style="{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,243,214,.7)' }">
                    <Icon name="check" :size="18" color="#4ADE80" /> {{ item }}
                  </li>
                </ul>
                <a :href="SITE.waLink" class="btn-yellow" :style="btnYellowFullStyle" target="_blank">
                  Rejoindre la communauté <Icon name="arrow" :size="18" :color="theme.brown" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Événements à venir -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="labelTerraStyle">À ne pas manquer</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: theme.brown }">
              ÉVÉNEMENTS <span :style="{ color: theme.terra }">NEXDIA</span>
            </h2>
          </div>
        </ScrollReveal>

        <div class="grid-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
          <ScrollReveal v-for="(ev, i) in events" :key="ev.title" :delay="i * 0.08">
            <div :style="eventCardStyle">
              <div :style="{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }">
                <div :style="{ width: '44px', height: '44px', borderRadius: '12px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center' }">
                  <Icon :name="ev.icon" :size="22" :color="theme.yellow" />
                </div>
                <span :style="{ fontSize: '12px', fontWeight: 700, color: theme.terra, background: 'rgba(173,52,35,.08)', padding: '4px 12px', borderRadius: '50px' }">{{ ev.date }}</span>
              </div>
              <h3 :style="{ fontSize: '17px', fontWeight: 800, color: theme.brown, marginBottom: '8px' }">{{ ev.title }}</h3>
              <p :style="{ fontSize: '13px', color: '#8a6a4a', lineHeight: 1.6 }">{{ ev.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Témoignages communauté -->
    <section :style="{ background: theme.brown, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">La communauté témoigne</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff' }">
              ILS SONT <span :style="{ color: theme.yellow }">NEXDIA</span>
            </h2>
          </div>
        </ScrollReveal>
        <div class="grid-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
          <ScrollReveal v-for="(t, i) in TESTIMONIALS.slice(0, 3)" :key="t.name" :delay="i * 0.1">
            <TestimonialCard :testimonial="t" :dark-mode="true" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section :style="{ background: theme.terra, padding: '80px 0', textAlign: 'center' }">
      <div :style="{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }">
        <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,64px)', color: '#fff', marginBottom: '16px' }">
          REJOIGNEZ <span :style="{ color: theme.yellow }">L'AVENTURE</span>
        </h2>
        <p :style="{ color: 'rgba(255,255,255,.8)', fontSize: '17px', marginBottom: '32px', lineHeight: 1.7 }">4,99€/mois sans engagement — 2 mois offerts à l'inscription.</p>
        <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
          <Icon name="wa" :size="18" :color="theme.brown" /> S'inscrire maintenant
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE, COM_FEATS, TESTIMONIALS, COMMUNITY_PRICING } from '~/data/site-data'

useHead({ title: 'Communauté — Nexdia' })

const headingFont = "'Passion One', sans-serif"

const events = [
  { icon: 'people', title: 'Soirée de bienvenue Paris', date: 'Mars 2026', desc: 'Une soirée pour rencontrer les nouveaux arrivants et partager vos premières impressions sur Paris.' },
  { icon: 'globe', title: 'Forum emploi étudiant', date: 'Avril 2026', desc: 'Rencontrez des recruteurs et décrochez votre job étudiant idéal dans une ambiance conviviale.' },
  { icon: 'event', title: 'Atelier CV & LinkedIn', date: 'Avril 2026', desc: 'Optimisez votre profil pour le marché du travail français avec nos experts.' },
  { icon: 'map', title: 'Sortie culturelle Musée', date: 'Mai 2026', desc: 'Explorez Paris avec la communauté — visite guidée et moment de partage.' },
  { icon: 'chat', title: 'Session Q&A Démarches', date: 'Chaque mois', desc: 'Posez toutes vos questions administratives à nos conseillers en live.' },
  { icon: 'gift', title: 'Journée bons plans', date: 'Mensuel', desc: 'Découvrez les meilleures adresses et réductions exclusives pour étudiants.' },
]

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const comFeatStyle = {
  display: 'flex', alignItems: 'center', gap: '16px', background: '#fff',
  borderRadius: '16px', padding: '18px 20px', borderLeft: `4px solid ${theme.terra}`,
  transition: 'all .25s', boxShadow: '0 2px 12px rgba(43,18,1,.04)',
}

const pricingCardStyle = {
  background: theme.brown, borderRadius: '32px', padding: '48px 40px',
  position: 'relative', overflow: 'hidden', boxShadow: '0 40px 80px rgba(43,18,1,.2)',
}

const eventCardStyle = {
  background: '#fff', borderRadius: '20px', padding: '28px 24px',
  boxShadow: '0 4px 20px rgba(43,18,1,.06)', borderBottom: `3px solid ${theme.terra}`,
  transition: 'all .3s',
}

const btnYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}

const btnYellowFullStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, textDecoration: 'none', transition: 'all .25s',
}
</script>
