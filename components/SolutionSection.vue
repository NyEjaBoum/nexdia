<template>
  <section id="solution" :style="{ background: theme.off, padding: '100px 0' }">
    <div :style="{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }">
      <!-- Header -->
      <ScrollReveal :style="{ textAlign: 'center', marginBottom: '56px' }">
        <span :style="labelTerraStyle">Notre accompagnement</span>
        <h2 class="section-title" :style="{ fontFamily: headingFont, fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.92, color: theme.brown }">
          L'EXPÉRIENCE <span :style="{ color: theme.terra }">NEXDIA</span>
        </h2>
      </ScrollReveal>

      <!-- Tabs -->
      <ScrollReveal :style="{ display: 'flex', justifyContent: 'center', marginBottom: '52px' }">
        <div :style="{ display: 'flex', gap: '6px', flexWrap: 'wrap', background: theme.beigeDk, padding: '6px', borderRadius: '50px' }">
          <button
            v-for="(t, i) in TABS"
            :key="t.label"
            @click="activeTab = i"
            :style="{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '11px 24px', borderRadius: '50px', fontSize: '14px', fontWeight: 700,
              cursor: 'pointer', transition: 'all .25s', border: 'none',
              background: activeTab === i ? theme.terra : 'transparent',
              color: activeTab === i ? '#fff' : '#9a7a5a', fontFamily: 'inherit',
            }"
          >
            <Icon :name="t.icon" :size="16" :color="activeTab === i ? theme.yellow : '#9a7a5a'" />
            {{ t.label }}
          </button>
        </div>
      </ScrollReveal>

      <!-- Panel -->
      <div v-for="(t, i) in TABS" :key="i">
        <div v-if="activeTab === i" class="panel-in grid-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }">
          <!-- Visual -->
          <div :style="{ position: 'relative', borderRadius: '28px', overflow: 'hidden', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.vis }">
            <div :style="{ width: '120px', height: '120px', background: 'rgba(255,255,255,.15)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.25)' }">
              <Icon :name="t.icon" :size="60" color="#fff" />
            </div>
            <div :style="{ position: 'absolute', bottom: '24px', left: '24px', background: theme.yellow, borderRadius: '50px', padding: '10px 20px', fontSize: '13px', fontWeight: 800, color: theme.brown, display: 'flex', alignItems: 'center', gap: '8px' }">
              <Icon :name="t.badgeIcon" :size="16" :color="theme.brown" /> {{ t.badge }}
            </div>
          </div>

          <!-- Content -->
          <div>
            <span :style="{ fontFamily: headingFont, fontSize: '96px', color: 'rgba(173,52,35,.08)', lineHeight: 1, marginBottom: '8px', display: 'block' }">{{ t.num }}</span>
            <h3 :style="{ fontFamily: headingFont, fontSize: '42px', color: theme.brown, marginBottom: '20px', letterSpacing: '.5px', lineHeight: 1 }">{{ t.title }}</h3>
            <p :style="{ fontSize: '16px', color: '#6b4c30', lineHeight: 1.8, marginBottom: '28px' }">{{ t.desc }}</p>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '12px' }">
              <div
                v-for="(s, j) in t.steps"
                :key="j"
                class="sol-step"
                :style="{ display: 'flex', gap: '14px', alignItems: 'center', background: theme.beige, borderRadius: '14px', padding: '14px 18px', borderLeft: `4px solid ${theme.terra}`, transition: 'all .25s' }"
              >
                <div :style="{ width: '28px', height: '28px', borderRadius: '50%', background: theme.terra, color: '#fff', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
                  {{ j + 1 }}
                </div>
                <p :style="{ fontSize: '14px', fontWeight: 600, color: theme.brown, margin: 0 }">{{ s }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { theme } from '~/data/theme'
import { TABS } from '~/data/site-data'

const headingFont = "'Passion One', sans-serif"
const activeTab = ref(0)

const labelTerraStyle = {
  display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
  textTransform: 'uppercase', color: theme.terra, marginBottom: '16px',
}
</script>
