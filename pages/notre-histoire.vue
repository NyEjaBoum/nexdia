<template>
  <div :style="{ paddingTop: '72px' }">
    <!-- Hero -->
    <section :style="{ background: theme.beige, padding: '80px 0 60px' }">
      <div :style="{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }">
        <ScrollReveal>
          <span :style="labelTerraStyle">Qui sommes-nous ?</span>
          <h1 :style="{ fontFamily: headingFont, fontSize: 'clamp(52px,8vw,100px)', lineHeight: 0.88, color: theme.brown }">
            NOTRE <span :style="{ color: theme.terra }">HISTOIRE.</span>
          </h1>
        </ScrollReveal>
      </div>
    </section>

    <!-- Fondatrice -->
    <section :style="{ background: theme.off, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <div class="grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }">
          <!-- Portrait -->
          <ScrollReveal>
            <div :style="portraitWrapStyle">
              <div :style="portraitBgStyle" />
              <div :style="portraitCardStyle">
                <div :style="{ width: '200px', height: '200px', borderRadius: '50%', background: `linear-gradient(135deg, ${theme.terra}, #C94030)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: `0 20px 60px rgba(173,52,35,.3)` }">
                  <Icon name="people" :size="80" color="rgba(255,255,255,.4)" />
                </div>
                <h3 :style="{ fontFamily: headingFont, fontSize: '32px', color: '#fff', textAlign: 'center' }">CATHY RAKOTOVAO</h3>
                <p :style="{ fontSize: '13px', color: 'rgba(255,243,214,.6)', textAlign: 'center', marginTop: '6px' }">Fondatrice &amp; CEO de Nexdia</p>
              </div>
            </div>
          </ScrollReveal>

          <!-- Histoire -->
          <ScrollReveal :delay="0.2">
            <div>
              <!-- Citation -->
              <div :style="quoteBlockStyle">
                <Icon name="quote" :size="28" :color="theme.terra" />
                <blockquote :style="{ fontFamily: headingFont, fontSize: 'clamp(24px,3vw,36px)', color: theme.brown, lineHeight: 1.15, margin: '12px 0' }">
                  J'étais cette étudiante perdue dans les démarches. Aujourd'hui, je m'assure que plus personne ne vive ça seul.
                </blockquote>
                <cite :style="{ fontSize: '13px', color: '#8a6a4a', fontStyle: 'normal', fontWeight: 700 }">— Cathy Rakotovao, fondatrice</cite>
              </div>

              <p :style="paragStyle">Arrivée en France pour ses études supérieures, Cathy Rakotovao a vécu de plein fouet la réalité d'une installation non accompagnée : démarches administratives incompréhensibles, refus de logement à répétition, sentiment d'isolement profond.</p>
              <p :style="paragStyle">C'est de cette expérience douloureuse qu'est née l'idée de Nexdia — construire la ressource qu'elle n'avait pas eu la chance d'avoir.</p>
              <p :style="paragStyle">Avec son équipe, elle a développé un accompagnement complet, humain et sur-mesure, spécialement pensé pour les étudiants africains et internationaux arrivant en France.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section :style="{ background: theme.brown, padding: '100px 0' }">
      <div :style="{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '64px' }">
            <span :style="{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(248,199,58,.6)', marginBottom: '16px' }">Notre parcours</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,72px)', color: '#fff' }">
              DE L'IDÉE <span :style="{ color: theme.yellow }">À L'ACTION</span>
            </h2>
          </div>
        </ScrollReveal>

        <div :style="{ position: 'relative' }">
          <!-- Ligne verticale -->
          <div :style="{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(248,199,58,.2)', transform: 'translateX(-50%)' }" />
          <div v-for="(item, i) in timeline" :key="item.year" :style="{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: '48px', position: 'relative' }">
            <ScrollReveal :delay="i * 0.1">
              <div :style="timelineItemStyle(i)">
                <div :style="{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: theme.yellow, marginBottom: '6px' }">{{ item.year }}</div>
                <h3 :style="{ fontSize: '17px', fontWeight: 800, color: '#fff', marginBottom: '8px' }">{{ item.title }}</h3>
                <p :style="{ fontSize: '13px', color: 'rgba(255,243,214,.6)', lineHeight: 1.65 }">{{ item.desc }}</p>
              </div>
            </ScrollReveal>
            <!-- Point -->
            <div :style="{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)', width: '14px', height: '14px', borderRadius: '50%', background: theme.yellow, border: `3px solid ${theme.brown}`, zIndex: 1 }" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Valeurs -->
    <section :style="{ background: theme.beige, padding: '100px 0' }">
      <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
        <ScrollReveal>
          <div :style="{ textAlign: 'center', marginBottom: '60px' }">
            <span :style="labelTerraStyle">Ce qui nous guide</span>
            <h2 :style="{ fontFamily: headingFont, fontSize: 'clamp(36px,5vw,72px)', color: theme.brown }">
              NOS <span :style="{ color: theme.terra }">VALEURS</span>
            </h2>
          </div>
        </ScrollReveal>
        <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }">
          <ScrollReveal v-for="(v, i) in valeurs" :key="v.title" :delay="i * 0.1">
            <div :style="valeurCardStyle">
              <div :style="{ width: '52px', height: '52px', borderRadius: '16px', background: theme.terra, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }">
                <Icon :name="v.icon" :size="26" :color="theme.yellow" />
              </div>
              <h3 :style="{ fontSize: '19px', fontWeight: 800, color: theme.brown, marginBottom: '10px' }">{{ v.title }}</h3>
              <p :style="{ fontSize: '14px', color: '#7a5a3a', lineHeight: 1.7 }">{{ v.desc }}</p>
            </div>
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
        <p :style="{ color: 'rgba(255,255,255,.8)', fontSize: '17px', marginBottom: '32px', lineHeight: 1.7 }">Ensemble, rendons l'installation en France accessible à tous.</p>
        <div :style="{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }">
          <a :href="SITE.waLink" :style="btnYellowStyle" target="_blank">
            <Icon name="wa" :size="18" :color="theme.brown" /> Nous contacter
          </a>
          <NuxtLink to="/packs" :style="btnGhostStyle">
            Voir nos packs <Icon name="arrow" :size="18" color="#fff" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { theme } from '~/data/theme'
import { SITE } from '~/data/site-data'

useHead({ title: 'Notre histoire — Nexdia' })

const headingFont = "'Passion One', sans-serif"

const timeline = [
  { year: '2021', title: 'L\'étincelle', desc: 'Cathy arrive en France pour ses études. Elle vit de plein fouet la réalité d\'une installation sans accompagnement.' },
  { year: '2022', title: 'L\'idée germe', desc: 'Forte de son expérience, Cathy commence à aider informellement d\'autres étudiants de son entourage.' },
  { year: '2023', title: 'Nexdia est né', desc: 'Création officielle de Nexdia. Les premiers packs sont lancés avec une approche 100% personnalisée.' },
  { year: '2024', title: 'La croissance', desc: 'Plus de 200 étudiants accompagnés. Lancement de la communauté et du pack Solidaire.' },
  { year: '2025', title: 'Aujourd\'hui', desc: 'Nexdia est la référence pour l\'accompagnement des étudiants internationaux en France. L\'aventure continue !' },
]

const valeurs = [
  { icon: 'people', title: 'Bienveillance', desc: 'Chaque étudiant est accueilli avec empathie et sans jugement. Nous parlons votre langue, au sens propre comme figuré.' },
  { icon: 'shield', title: 'Fiabilité', desc: 'Nos engagements sont fermes. Si nous ne pouvons pas vous aider, nous vous orientons vers qui peut le faire.' },
  { icon: 'star', title: 'Excellence', desc: 'Nous ne sommes pas satisfaits tant que vous ne l\'êtes pas. Chaque détail compte pour une installation réussie.' },
  { icon: 'globe', title: 'Inclusion', desc: 'Nexdia est né pour combler les inégalités. L\'origine ne doit jamais être un obstacle à un avenir radieux en France.' },
  { icon: 'check', title: 'Transparence', desc: 'Tarifs clairs, processus expliqués, pas de mauvaises surprises. Vous savez toujours où vous en êtes.' },
  { icon: 'gift', title: 'Solidarité', desc: 'Nos étudiants deviennent notre communauté. Certains deviennent même ambassadeurs pour aider ceux qui arrivent après.' },
]

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}

const paragStyle = {
  fontSize: '16px', color: '#6a4a2a', lineHeight: 1.8, marginBottom: '16px', fontWeight: 300,
}

const quoteBlockStyle = {
  background: `rgba(173,52,35,.06)`, borderLeft: `4px solid ${theme.terra}`,
  borderRadius: '0 16px 16px 0', padding: '24px 28px', marginBottom: '28px',
}

const portraitWrapStyle = {
  position: 'relative', display: 'flex', justifyContent: 'center',
}

const portraitBgStyle = {
  position: 'absolute', top: '-40px', right: '-40px', width: '240px', height: '240px',
  background: `rgba(173,52,35,.07)`, borderRadius: '50%',
}

const portraitCardStyle = {
  background: theme.brown, borderRadius: '32px', padding: '48px 40px',
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  boxShadow: '0 20px 60px rgba(43,18,1,.12)', position: 'relative',
}

const timelineItemStyle = (i) => ({
  width: 'calc(50% - 40px)', background: 'rgba(255,255,255,.04)', backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,.08)', borderRadius: '20px', padding: '24px 28px',
  [i % 2 === 0 ? 'marginRight' : 'marginLeft']: '40px',
})

const valeurCardStyle = {
  background: '#fff', borderRadius: '24px', padding: '32px 28px',
  boxShadow: '0 4px 16px rgba(43,18,1,.06)', borderTop: `3px solid ${theme.terra}`,
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
