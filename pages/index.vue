<template>
  <div>
    <!-- Hero -->
    <HeroSection />

    <!-- Ticker -->
    <TickerBand />

    <!-- Problèmes -->
    <ProblemsSection />

    <!-- Solution / Approche -->
    <SolutionSection />

    <!-- Packs (aperçu) -->
    <section id="packs" :style="{ background: theme.brown, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '56px' }">
            <span :style="{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Nos formules</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.92, color: '#fff' }">
              CHOISISSEZ <span :style="{ color: theme.yellow }">VOTRE PACK</span>
            </h2>
            <p :style="{ fontSize: '18px', color: 'rgba(255,243,214,.6)', fontWeight: 300, maxWidth: '500px', margin: '16px auto 0', lineHeight: 1.7 }">
              Des formules pensées pour chaque besoin et chaque budget.
            </p>
          </div>
        </ScrollReveal>

        <div class="grid-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }">
          <ScrollReveal v-for="(pack, i) in PACKS" :key="pack.slug" :delay="i * 0.08">
            <PackCard :pack="pack" :featured="pack.featured" />
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginTop: '48px' }">
            <NuxtLink to="/packs" :style="btnWhiteStyle">
              Comparer tous les packs <Icon name="arrow" :size="18" :color="theme.terra" />
            </NuxtLink>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Communauté -->
    <section id="communite" :style="{ background: theme.beige, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }">
          <ScrollReveal>
            <span :style="labelTerraStyle">La communauté Nexdia</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.92, color: theme.brown }">
              PLUS JAMAIS<br /><span :style="{ color: theme.terra }">SEUL·E.</span>
            </h2>
            <p :style="{ fontSize: '17px', color: '#6b4c30', lineHeight: 1.8, maxWidth: '460px', marginTop: '16px' }">
              Rejoignez une communauté bienveillante d'étudiants internationaux qui s'entraident, se retrouvent et construisent leur vie en France ensemble.
            </p>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0 40px' }">
              <div v-for="f in COM_FEATS" :key="f.title" class="com-feat" :style="comFeatStyle">
                <div :style="{ width: '44px', height: '44px', borderRadius: '12px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
                  <Icon :name="f.icon" :size="22" :color="theme.yellow" />
                </div>
                <div>
                  <strong :style="{ display: 'block', fontSize: '15px', fontWeight: 700, color: theme.brown }">{{ f.title }}</strong>
                  <span :style="{ fontSize: '13px', color: '#8a6a4a' }">{{ f.sub }}</span>
                </div>
              </div>
            </div>
            <NuxtLink to="/communaute" :style="btnTerraStyle">
              Découvrir la communauté <Icon name="arrow" :size="18" color="#fff" />
            </NuxtLink>
          </ScrollReveal>

          <ScrollReveal :delay="0.2">
            <div :style="comCardStyle">
              <div :style="{ position: 'absolute', top: '-80px', right: '-80px', width: '240px', height: '240px', background: theme.terra, borderRadius: '50%', opacity: .2 }" />
              <div :style="{ position: 'absolute', bottom: '-60px', left: '-60px', width: '180px', height: '180px', background: theme.yellow, borderRadius: '50%', opacity: .06 }" />
              <div :style="{ position: 'relative', zIndex: 1 }">
                <div :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.7)', marginBottom: '12px' }">Abonnement mensuel</div>
                <span :style="{ fontFamily: headingFont, fontSize: '100px', lineHeight: .88, color: '#fff', marginBottom: '6px', display: 'block' }">4,99€</span>
                <div :style="{ fontSize: '18px', color: 'rgba(255,243,214,.55)', marginBottom: '24px' }">par mois — sans engagement</div>
                <div :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: theme.yellow, color: theme.brown, fontSize: '14px', fontWeight: 800, padding: '8px 20px', borderRadius: '50px', marginBottom: '32px' }">
                  <Icon name="gift" :size="16" :color="theme.brown" /> 2 mois offerts à l'inscription
                </div>
                <ul :style="{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '11px' }">
                  <li v-for="item in COMMUNITY_PRICING.features" :key="item" :style="{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,243,214,.7)' }">
                    <Icon name="check" :size="18" color="#4ADE80" /> {{ item }}
                  </li>
                </ul>
                <NuxtLink to="/communaute" class="btn-yellow" :style="btnYellowFullStyle">
                  Rejoindre la communauté <Icon name="arrow" :size="18" :color="theme.brown" />
                </NuxtLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Parents -->
    <section id="parents" :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }">
          <ScrollReveal>
            <div :style="{ position: 'relative' }">
              <div :style="{ borderRadius: '32px', overflow: 'hidden', background: `linear-gradient(145deg, ${theme.terraDk} 0%, ${theme.terraDk} 100%)`, padding: '64px 40px', textAlign: 'center', boxShadow: '0 40px 80px rgba(173,52,35,.25)', position: 'relative' }">
                <div :style="{ width: '100px', height: '100px', borderRadius: '24px', background: 'rgba(255,255,255,.15)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,.2)' }">
                  <Icon name="shield" :size="52" :color="theme.yellow" />
                </div>
                <h3 :style="{ fontFamily: headingFont, fontSize: '28px', color: theme.yellow, letterSpacing: '1px', marginBottom: '8px' }">PARENTS, ON VEILLE.</h3>
                <p :style="{ fontSize: '15px', color: 'rgba(255,255,255,.75)', lineHeight: 1.6 }">Votre enfant est accompagné à chaque étape par une équipe humaine et dédiée.</p>
              </div>
              <div :style="{ position: 'absolute', bottom: '-20px', right: '-16px', background: '#fff', borderRadius: '20px', padding: '18px 22px', boxShadow: '0 20px 50px rgba(43,18,1,.1)' }">
                <strong :style="{ display: 'block', fontSize: '24px', fontWeight: 800, color: theme.terra }">97%</strong>
                <span :style="{ fontSize: '13px', color: '#8a6a4a' }">des parents se disent rassurés</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal :delay="0.2">
            <span :style="labelTerraStyle">Pour les familles</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.92, color: theme.brown, marginBottom: '20px' }">
              PARENTS,<br />NOUS VEILLONS<br /><span :style="{ color: theme.terra }">SUR EUX.</span>
            </h2>
            <p :style="{ fontSize: '17px', color: '#6b4c30', lineHeight: 1.8, marginBottom: '36px' }">
              Vous avez confié à la France votre enfant le plus précieux. Nous comprenons votre inquiétude — et nous vous faisons une promesse : accompagnement sérieux, communication régulière, transparence totale.
            </p>
            <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '36px' }">
              <div v-for="g in GUARANTEES" :key="g.title" class="guarantee" :style="guaranteeStyle">
                <div :style="{ width: '36px', height: '36px', borderRadius: '10px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }">
                  <Icon :name="g.icon" :size="18" :color="theme.yellow" />
                </div>
                <strong :style="{ display: 'block', fontSize: '14px', fontWeight: 700, color: theme.brown, marginBottom: '4px' }">{{ g.title }}</strong>
                <span :style="{ fontSize: '13px', color: '#8a6a4a', lineHeight: 1.4 }">{{ g.sub }}</span>
              </div>
            </div>
            <NuxtLink to="/parents" :style="btnTerraStyle">
              Page dédiée aux parents <Icon name="arrow" :size="18" color="#fff" />
            </NuxtLink>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section id="temoignages" :style="{ background: theme.brown, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '32px' }">
            <div>
              <span :style="{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Ils nous font confiance</span>
              <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.92, color: '#fff' }">
                CE QU'ILS <span :style="{ color: theme.yellow }">DISENT</span>
              </h2>
            </div>
            <div :style="{ display: 'flex', gap: '48px', flexWrap: 'wrap' }">
              <div v-for="s in STATS_TEMOIGNAGES" :key="s.label">
                <span :style="{ fontFamily: headingFont, fontSize: '56px', color: theme.yellow, lineHeight: 1, display: 'block' }">{{ s.value }}</span>
                <span :style="{ fontSize: '13px', color: 'rgba(255,243,214,.55)' }">{{ s.label }}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div class="grid-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }">
          <ScrollReveal v-for="(t, i) in TESTIMONIALS.slice(0, 3)" :key="t.name" :delay="i * 0.1">
            <TestimonialCard :testimonial="t" :dark-mode="true" />
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div :style="{ textAlign: 'center' }">
            <NuxtLink to="/temoignages" :style="btnOutlineYellowStyle">
              Voir tous les témoignages <Icon name="arrow" :size="18" :color="theme.yellow" />
            </NuxtLink>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Fondatrice -->
    <section id="fondatrice" :style="{ background: theme.beige, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'center' }">
          <ScrollReveal>
            <div :style="{ position: 'relative' }">
              <div :style="{ width: '100%', aspectRatio: '3/4', borderRadius: '32px', overflow: 'hidden', background: `linear-gradient(160deg, ${theme.terraDk} 0%, ${theme.terra} 50%, #C94030 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 40px 80px rgba(173,52,35,.2)', position: 'relative' }">
                <div :style="{ width: '140px', height: '140px', borderRadius: '32px', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,.25)' }">
                  <Icon name="people" :size="72" :color="theme.yellow" />
                </div>
                <div :style="{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(43,18,1,.9), transparent)', padding: '32px 28px 24px' }">
                  <strong :style="{ display: 'block', fontSize: '20px', fontWeight: 800, color: '#fff' }">Cathy Rakotovao</strong>
                  <span :style="{ fontSize: '14px', color: theme.yellow }">Fondatrice de Nexdia</span>
                </div>
              </div>
              <div :style="{ position: 'absolute', top: '24px', right: '-20px', background: theme.yellow, borderRadius: '14px', padding: '14px 18px', boxShadow: '0 10px 30px rgba(248,199,58,.3)', textAlign: 'center' }">
                <strong :style="{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: theme.terra, fontWeight: 800 }">Fondatrice</strong>
                <span :style="{ fontSize: '22px', fontWeight: 800, color: theme.brown, fontFamily: headingFont, letterSpacing: '.5px' }">NEXDIA</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal :delay="0.2">
            <span :style="labelTerraStyle">Notre histoire</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.92, color: theme.brown, marginBottom: '32px' }">
              NÉE D'UN<br />VÉCU<span :style="{ color: theme.terra }">.</span>
            </h2>
            <p :style="{ fontFamily: headingFont, fontSize: 'clamp(22px,3vw,34px)', color: theme.terra, lineHeight: 1.2, paddingLeft: '20px', borderLeft: `4px solid ${theme.yellow}`, marginBottom: '28px', letterSpacing: '.5px' }">
              J'ai vécu exactement ce que vivent vos enfants. Et j'ai décidé que ça devait changer.
            </p>
            <p :style="{ fontSize: '16px', color: '#6b4c30', lineHeight: 1.85, marginBottom: '18px' }">
              Originaire de Madagascar, Cathy est arrivée en France seule, sans réseau, sans guide. Des semaines à naviguer dans des démarches incompréhensibles. Des nuits à s'inquiéter du logement.
            </p>
            <p :style="{ fontSize: '16px', color: '#6b4c30', lineHeight: 1.85, marginBottom: '28px' }">
              De cette expérience difficile est née une conviction forte : <strong>aucun étudiant ne devrait traverser ça seul</strong>.
            </p>
            <NuxtLink to="/notre-histoire" :style="btnTerraStyle">
              Lire notre histoire complète <Icon name="arrow" :size="18" color="#fff" />
            </NuxtLink>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section :style="{ background: theme.terra, padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }">
      <div :style="{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: headingFont, fontSize: '280px', color: 'rgba(0,0,0,.08)', pointerEvents: 'none', letterSpacing: '4px', whiteSpace: 'nowrap' }">NEXDIA</div>
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }">
        <ScrollReveal>
          <span :style="{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,243,214,.6)', marginBottom: '16px' }">Votre nouvelle vie commence</span>
          <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,7vw,96px)', color: '#fff', lineHeight: .92, letterSpacing: '2px', marginBottom: '16px' }">
            VOTRE FRANCE<br /><span :style="{ color: theme.yellow }">COMMENCE ICI.</span>
          </h2>
          <p :style="{ fontSize: '18px', color: 'rgba(255,255,255,.8)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 300 }">
            Rejoignez les 500+ étudiants qui ont choisi Nexdia pour une arrivée sereine, humaine et réussie en France.
          </p>
          <div :style="{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }">
            <NuxtLink to="/packs" class="btn-white" :style="btnWhiteStyle">
              Réserver un pack <Icon name="arrow" :size="18" :color="theme.terra" />
            </NuxtLink>
            <a :href="SITE.waLink" class="btn-ghost" :style="btnGhostStyle" target="_blank">
              <Icon name="wa" :size="18" color="#fff" /> Parler sur WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE, PACKS, COM_FEATS, GUARANTEES, TESTIMONIALS, STATS_TEMOIGNAGES, COMMUNITY_PRICING } from '~/data/site-data'

useHead({ title: 'Nexdia — À vous la France, sereinement' })

const headingFont = "'Passion One', sans-serif"

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const btnTerraStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.terra, color: '#fff', fontFamily: 'inherit', transition: 'all .25s',
  cursor: 'pointer', boxShadow: '0 4px 20px rgba(173,52,35,.3)', textDecoration: 'none',
}

const btnYellowFullStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: theme.yellow, color: theme.brown, fontFamily: 'inherit', transition: 'all .25s',
  cursor: 'pointer', boxShadow: '0 4px 20px rgba(248,199,58,.35)', textDecoration: 'none',
}

const btnWhiteStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  background: '#fff', color: theme.terra, fontFamily: 'inherit', transition: 'all .25s',
  cursor: 'pointer', boxShadow: '0 6px 24px rgba(0,0,0,.15)', textDecoration: 'none',
}

const btnGhostStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '18px 36px', borderRadius: '40px', fontSize: '16px', fontWeight: 700,
  border: '2px solid rgba(255,255,255,.4)', color: '#fff', background: 'rgba(255,255,255,.08)',
  backdropFilter: 'blur(8px)', fontFamily: 'inherit', transition: 'all .25s', cursor: 'pointer', textDecoration: 'none',
}

const btnOutlineYellowStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '16px 32px', borderRadius: '40px', fontSize: '15px', fontWeight: 700,
  border: `2px solid ${theme.yellow}`, color: theme.yellow, background: 'transparent',
  fontFamily: 'inherit', transition: 'all .25s', cursor: 'pointer', textDecoration: 'none',
}

const comFeatStyle = {
  display: 'flex', alignItems: 'center', gap: '16px', background: '#fff',
  borderRadius: '16px', padding: '18px 20px', borderLeft: `4px solid ${theme.terra}`,
  transition: 'all .25s', boxShadow: '0 2px 12px rgba(43,18,1,.04)',
}

const comCardStyle = {
  background: theme.brown, borderRadius: '32px', padding: '48px 40px',
  position: 'relative', overflow: 'hidden', boxShadow: '0 40px 80px rgba(43,18,1,.2)',
}

const guaranteeStyle = {
  background: theme.beige, borderRadius: '16px', padding: '20px',
  borderLeft: `4px solid ${theme.terra}`, transition: 'all .25s',
}
</script>
