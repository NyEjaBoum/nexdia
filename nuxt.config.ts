// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nexdia — À vous la France, sereinement',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: "Accompagnement humain, complet et personnalisé pour les étudiants internationaux en France. De l'aéroport jusqu'à votre intégration réussie." },
        { name: 'theme-color', content: '#AD3423' },
        { property: 'og:title', content: 'Nexdia — À vous la France, sereinement' },
        { property: 'og:description', content: "L'accompagnement complet pour les étudiants internationaux en France." },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&family=Overpass:wght@300;400;600;700;800&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-01',
})
