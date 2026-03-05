// ══════════════════════════════════════════════════════════════
// NEXDIA — Données centralisées du site
// Toutes les informations textuelles, packs, témoignages, FAQ…
// ══════════════════════════════════════════════════════════════

// ── Informations générales
export const SITE = {
  name: 'Nexdia',
  tagline: 'À vous la France, sereinement',
  description: "Un accompagnement humain, complet et personnalisé pour les étudiants internationaux. De l'aéroport jusqu'à votre intégration réussie en France.",
  waLink: 'https://wa.me/33600000000',
  email: 'bonjour@nexdia.fr',
  phone: '+33 6 00 00 00 00',
  address: 'Paris, France',
  socials: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  founder: {
    name: 'Cathy Rakotovao',
    title: 'Fondatrice de Nexdia',
    origin: 'Madagascar',
    story: "Originaire d'une famille modeste à Madagascar, j'ai eu la chance d'étudier dans un lycée français avant de quitter mon pays après le bac, faute d'opportunités. En arrivant en France, j'ai été livrée à moi-même : démarches administratives complexes, recherche de logement, arnaques, solitude, manque de moyens. Ces difficultés m'ont appris la résilience et m'ont poussée à aider les autres.",
    mission: "Que chaque étudiant étranger en France puisse s'intégrer sereinement avec moins de stress, que tout soit plus simple et plus rapide afin de vivre une expérience positive et personnalisée à leur arrivée.",
  },
}

// ── Statistiques clés
export const STATS = [
  { value: '500+', label: 'étudiants accompagnés' },
  { value: '97%', label: 'de satisfaction' },
  { value: '32', label: 'nationalités' },
]

export const STATS_TEMOIGNAGES = [
  { value: '500+', label: 'étudiants accompagnés' },
  { value: '97%', label: 'satisfaction' },
  { value: '4.9', label: 'note moyenne' },
]

// ── Statistiques marché
export const MARKET_STATS = {
  title: 'Un marché en croissance constante',
  description: 'Chaque année, des milliers d\'étudiants étrangers arrivent en France pleins d\'ambition.',
  nationalStats: {
    year: '2024-2025',
    totalInternationalStudents: '329 100',
    growthOver5Years: '+17%',
  },
  keyFigures: [
    { value: '60%', label: 'des étudiants étrangers rencontrent des difficultés concernant les logements' },
    { value: '80%', label: 'déclarent que les démarches administratives sont leur plus grand défi' },
    { value: '56.5%', label: 'se sentent épuisés ou en burn-out à cause du stress et de l\'isolement' },
  ],
  survey: {
    respondents: 159,
    topChallenges: [
      { challenge: 'Démarches administratives', percentage: 73.5 },
      { challenge: 'Trouver un logement sûr et abordable', percentage: 68.4 },
      { challenge: 'Trouver un job étudiant', percentage: 67.7 },
      { challenge: 'Solitude et isolement social', percentage: 60.6 },
      { challenge: 'S\'adapter à la vie quotidienne', percentage: 47.1 },
    ],
    recommendationRate: 85.9,
    suggestions: [
      'Points de repère pour les courses et transports',
      'Organiser des rencontres entre étudiants',
      'Informations en plusieurs langues',
      'Partenariats avec universités d\'origine',
    ],
  },
}

// ── Ticker (bandeau défilant)
export const TICKER_ITEMS = [
  'Accueil aéroport',
  'Logement sécurisé',
  'Démarches admin',
  'Ouverture de compte',
  'Intégration sociale',
  'Job étudiant',
  'Communauté Nexdia',
  'Parents informés',
]

// ── Problèmes rencontrés
export const PROBLEMS = [
  { icon: 'plane', title: 'Arrivée seul·e', desc: "Personne à l'aéroport. Tout gérer seul le Jour J dans une ville inconnue. Désorienté, stressé, sans aide." },
  { icon: 'doc', title: 'Démarches impossibles', desc: 'CAF, Ameli, banque, visa — des formulaires complexes dans une langue étrangère avec des délais imprévisibles.' },
  { icon: 'home', title: 'Logement introuvable', desc: "Sans garant français, trouver un appartement honnête devient un cauchemar. Les arnaqueurs ciblent les étudiants étrangers." },
  { icon: 'warn', title: "Risque d'arnaques", desc: "Faux logements, faux conseillers, fausses offres d'emploi — on ne sait plus à qui faire confiance en arrivant." },
  { icon: 'people', title: 'Isolement social', desc: "Seul dans une nouvelle ville, sans réseau ni repères. Difficile à s'adapter à la vie quotidienne française." },
]

// ── Onglets solution (approche)
export const TABS = [
  {
    icon: 'plane', label: 'Arrivée', num: '01', title: 'ACCUEIL & ARRIVÉE',
    desc: "Votre aventure française commence sous les meilleurs auspices. Un conseiller Nexdia vous attend à l'aéroport ou à la gare, avec un kit de bienvenue complet.",
    badge: 'Conseiller attribué en 24h', badgeIcon: 'check',
    vis: 'linear-gradient(140deg,#AD3423 0%,#C94030 50%,#F8C73A 100%)',
    steps: ["Inscription en 5 min sur la plateforme", "Conseiller dédié attribué immédiatement", "Accueil physique + kit de bienvenue + carte SIM"],
  },
  {
    icon: 'doc', label: 'Démarches', num: '02', title: 'DÉMARCHES ADMIN',
    desc: "CAF, sécurité sociale, banque, carte transport — on vous guide pas à pas dans toutes les démarches. Fini le stress face aux formulaires.",
    badge: '100% des démarches couvertes', badgeIcon: 'check',
    vis: 'linear-gradient(140deg,#2B1201 0%,#4A2208 50%,#AD3423 100%)',
    steps: ["Ouverture de compte bancaire guidée", "Inscription CAF & sécurité sociale", "Hotline démarches disponible 3 mois"],
  },
  {
    icon: 'home', label: 'Logement', num: '03', title: 'LOGEMENT SÉCURISÉ',
    desc: "Partenariats exclusifs avec des propriétaires vérifiés. Garant solidaire disponible. Vous emménagez l'esprit parfaitement tranquille.",
    badge: 'Propriétaires vérifiés', badgeIcon: 'shield',
    vis: 'linear-gradient(140deg,#4A2208 0%,#AD3423 50%,#C94030 100%)',
    steps: ["Recherche personnalisée selon vos critères", "Vérification du bail et du propriétaire", "Garant Nexdia inclus dans les packs"],
  },
  {
    icon: 'people', label: 'Intégration', num: '04', title: 'INTÉGRATION & VIE',
    desc: "Rejoignez une communauté vivante, participez aux événements, trouvez un job étudiant et découvrez les bons plans. La France devient vraiment la vôtre.",
    badge: 'Communauté active', badgeIcon: 'check',
    vis: 'linear-gradient(140deg,#F8C73A 0%,#D4A520 50%,#AD3423 100%)',
    steps: ["Accès à la communauté Nexdia", "Événements & rencontres étudiantes", "Aide à la recherche de job étudiant"],
  },
]

// ── Packs (formules)
export const PACKS = [
  {
    slug: 'logement',
    icon: 'home', name: 'LOGEMENT',
    tagline: "Trouvez un logement sécurisé sans galère ni risque d'arnaque.",
    items: [
      "Recherche personnalisée d'appartement",
      "Vérification bail & propriétaire",
      "Garant solidaire Nexdia",
      "Accompagnement à l'état des lieux",
      "Quartiers recommandés par ville",
    ],
    price: '199€', note: 'paiement unique', featured: false,
    heroTitle: 'TROUVEZ VOTRE LOGEMENT EN TOUTE SÉRÉNITÉ',
    fullDesc: "Le logement est souvent LE plus gros stress de l'arrivée en France. Pas de garant, pas de réseau, des arnaques partout… Avec le Pack Logement Nexdia, vous êtes accompagné de A à Z par un conseiller dédié qui connaît le marché locatif étudiant sur le bout des doigts.",
    process: [
      { step: 1, title: 'Consultation initiale', desc: 'On définit ensemble vos critères : ville, budget, proximité campus, colocation ou studio.' },
      { step: 2, title: 'Recherche active', desc: 'Notre équipe recherche pour vous parmi nos partenaires vérifiés et les meilleures plateformes.' },
      { step: 3, title: 'Vérification du bien', desc: 'Chaque annonce est vérifiée : propriétaire, bail, photos, état du logement.' },
      { step: 4, title: 'Garant Nexdia', desc: "Pas de garant français ? Nexdia se porte garant pour vous. C'est inclus." },
      { step: 5, title: 'Emménagement accompagné', desc: "On vous accompagne pour l'état des lieux et la remise des clés." },
    ],
    services: {
      elaboration: {
        title: 'Élaboration du dossier',
        items: [
          'Création d\'un dossier locatif optimisé et classé',
          'Vérification de chaque document',
          'Mise en forme professionnelle',
          'Envoi du dossier au propriétaire pour maximiser les chances',
        ],
      },
      search: {
        title: 'Recherche de logement',
        items: [
          'Recherche et sélection de logements fiables (pas d\'arnaques)',
          'Liste personnalisée selon budget / secteur / école',
          'Coordination avec agences et propriétaires',
          'Vérification des annonces avant visite',
        ],
      },
      visits: {
        title: 'Accompagnement aux visites',
        items: [
          'Présence physique lors des visites (ou visio si avant l\'arrivée)',
          'Aide pour comprendre le bail et les conditions',
          'Conseils pour négocier ou poser les bonnes questions',
          'État des lieux accompagné',
        ],
      },
    },
    cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Lille', 'Montpellier', 'Strasbourg'],
    faq: [
      { q: 'Est-ce que le garant Nexdia fonctionne partout ?', a: "Oui, notre garant solidaire est accepté par tous nos propriétaires partenaires et la majorité des bailleurs en France." },
      { q: 'Combien de temps pour trouver un logement ?', a: "En moyenne, nos étudiants signent leur bail en 10 à 15 jours après inscription." },
      { q: "Je peux choisir entre colocation et studio ?", a: "Absolument ! On s'adapte à vos préférences et à votre budget." },
    ],
  },
  {
    slug: 'administratif',
    icon: 'doc', name: 'ADMINISTRATIF',
    tagline: 'Toutes vos démarches gérées simplement, sans prise de tête.',
    items: [
      'Ouverture compte bancaire guidée',
      'Inscription CAF & Ameli',
      'Carte de transport étudiant',
      'Aide inscription université',
      'Hotline démarches 3 mois',
    ],
    price: '149€', note: 'paiement unique', featured: false,
    heroTitle: 'VOS DÉMARCHES ADMIN SANS STRESS',
    fullDesc: "CAF, Ameli, compte bancaire, carte de transport… Les démarches administratives françaises sont un vrai labyrinthe quand on arrive de l'étranger. Notre équipe vous guide étape par étape, avec des rendez-vous accompagnés et une hotline dédiée pendant 3 mois.",
    process: [
      { step: 1, title: 'Bilan de vos besoins', desc: "On fait le point sur votre situation : visa, université, ville d'arrivée." },
      { step: 2, title: 'Compte bancaire', desc: 'Ouverture accompagnée dans une banque partenaire — rendez-vous organisé pour vous.' },
      { step: 3, title: 'Sécurité sociale', desc: 'Inscription à la CPAM/Ameli pour votre couverture santé.' },
      { step: 4, title: 'CAF & aides', desc: "Dépôt de votre dossier d'aide au logement — on maximise vos droits." },
      { step: 5, title: 'Suivi 3 mois', desc: 'Hotline dédiée pour toute question administrative pendant 3 mois.' },
    ],
    services: {
      banking: {
        title: 'Démarches Bancaires',
        items: [
          'Choix de la banque adaptée à votre profil étudiant',
          'Ouverture du compte accompagnée',
          'Explications sur l\'utilisation et les services',
        ],
      },
      healthSocial: {
        title: 'Sécurité Sociale et Mutuelle',
        items: [
          'Inscription à la Sécurité Sociale',
          'Choix d\'une mutuelle complémentaire',
          'Explications sur les remboursements (médecin, médicaments, hospitalisation)',
        ],
      },
      caf: {
        title: 'Aides Financières (CAF)',
        items: [
          'Demande d\'Aide au Logement (CAF)',
          'Recherche d\'aide spécifique (alimentaire, santé)',
          'Maximisation de vos droits',
        ],
      },
      transport: {
        title: 'Transports et Déplacements',
        items: [
          'Création des titres de transport',
          'Démarches pour les aides au permis de conduire',
          'Conseils sur les abonnements',
        ],
      },
      digital: {
        title: 'Intégration Numérique',
        items: [
          'Création et installation des applications nécessaires (Doctolib, CAF, Ameli, banque, transport)',
          'Création de France Connect',
          'Guide des services en ligne',
        ],
      },
    },
    faq: [
      { q: 'Est-ce que vous faites les démarches à ma place ?', a: "On vous guide et on vous accompagne physiquement ou à distance. Certaines démarches nécessitent votre présence, mais on prépare tout pour vous." },
      { q: "J'ai déjà un compte bancaire, est-ce quand même utile ?", a: "Absolument ! Le pack couvre bien plus que la banque : CAF, Ameli, transport, université…" },
      { q: 'La hotline est disponible en quelle langue ?', a: 'Français et anglais. Selon votre conseiller, d\'autres langues peuvent être disponibles.' },
    ],
  },
  {
    slug: 'tranquillite',
    icon: 'shield', name: 'TRANQUILLITÉ',
    tagline: "L'accompagnement complet de l'aéroport jusqu'à votre installation totale.",
    items: [
      'Accueil aéroport + kit bienvenue',
      'Pack Logement complet inclus',
      'Pack Administratif complet inclus',
      'Conseiller dédié pendant 6 mois',
      'Communauté Nexdia — 1 an offert',
      'Aide recherche job étudiant',
    ],
    price: '399€', note: 'ou 3× sans frais', featured: true,
    heroTitle: "L'ACCOMPAGNEMENT COMPLET, DE A À Z",
    fullDesc: "Le Pack Tranquillité, c'est la formule tout-inclus. Dès votre descente d'avion, un conseiller Nexdia vous attend. Il vous accompagne pour le logement, les démarches, l'intégration, et reste à vos côtés pendant 6 mois. C'est la sérénité absolue pour vous ET vos parents. Le paiement peut se faire en 3 fois sans frais.",
    process: [
      { step: 1, title: "Accueil à l'aéroport", desc: 'Votre conseiller vous attend avec un kit de bienvenue, une carte SIM et un plan de la ville.' },
      { step: 2, title: 'Installation logement', desc: 'Tout le Pack Logement est inclus — recherche, garant, état des lieux.' },
      { step: 3, title: 'Démarches complètes', desc: 'Tout le Pack Administratif — banque, CAF, Ameli, transport, université.' },
      { step: 4, title: 'Intégration sociale', desc: 'Accès à la communauté Nexdia pendant 1 an, événements, bons plans.' },
      { step: 5, title: 'Suivi 6 mois', desc: 'Un conseiller dédié vous accompagne pendant 6 mois complets.' },
      { step: 6, title: 'Job étudiant', desc: 'Aide à la recherche de job étudiant : CV, candidatures, réseau.' },
    ],
    comparison: [
      { feature: 'Accueil aéroport', logement: false, admin: false, tranquillite: true },
      { feature: 'Recherche logement', logement: true, admin: false, tranquillite: true },
      { feature: 'Garant Nexdia', logement: true, admin: false, tranquillite: true },
      { feature: 'Ouverture compte bancaire', logement: false, admin: true, tranquillite: true },
      { feature: 'Inscription CAF & Ameli', logement: false, admin: true, tranquillite: true },
      { feature: 'Conseiller dédié 6 mois', logement: false, admin: false, tranquillite: true },
      { feature: 'Communauté 1 an', logement: false, admin: false, tranquillite: true },
      { feature: 'Aide job étudiant', logement: false, admin: false, tranquillite: true },
    ],
    faq: [
      { q: 'Le paiement en 3× est-il vraiment sans frais ?', a: "Oui, 3× 133€ sans aucun frais supplémentaire. Premier versement à l'inscription." },
      { q: "Mon conseiller change-t-il au bout de 6 mois ?", a: "Non, vous gardez le même conseiller pendant toute la durée. Après 6 mois, vous pouvez rejoindre la communauté pour rester connecté." },
      { q: 'Mes parents peuvent-ils contacter le conseiller ?', a: 'Absolument ! Avec votre accord, vos parents ont un accès direct à votre conseiller.' },
      { q: "C'est le pack le plus populaire ?", a: "Oui, 68% de nos clients choisissent le Pack Tranquillité. C'est notre offre la plus complète et la plus rassurante." },
    ],
  },
  {
    slug: 'solidaire',
    icon: 'people', name: 'SOLIDAIRE',
    tagline: 'Pour les étudiants aux ressources limitées — accès essentiel à tarif réduit.',
    items: [
      'Consultation personnalisée incluse',
      'Démarches administratives prioritaires',
      'Accès communauté 6 mois',
      'Ressources numériques illimitées',
      'Éligibilité sur dossier',
    ],
    price: '79€', note: 'sur dossier', featured: false,
    heroTitle: "L'ACCOMPAGNEMENT ACCESSIBLE À TOUS",
    fullDesc: "Chez Nexdia, on croit que chaque étudiant mérite un bon départ, quel que soit son budget. Le Pack Solidaire offre un accompagnement essentiel à tarif réduit, sur dossier. Parce que l'éducation ne devrait pas être un privilège.",
    process: [
      { step: 1, title: 'Dossier de candidature', desc: "Remplissez un court formulaire pour vérifier votre éligibilité." },
      { step: 2, title: 'Validation sous 48h', desc: 'Notre équipe étudie votre dossier et vous répond rapidement.' },
      { step: 3, title: 'Consultation personnalisée', desc: 'Un entretien avec un conseiller pour définir vos besoins prioritaires.' },
      { step: 4, title: 'Démarches prioritaires', desc: "On s'occupe des démarches les plus urgentes en priorité." },
      { step: 5, title: 'Communauté & ressources', desc: 'Accès à la communauté et à toutes les ressources numériques Nexdia.' },
    ],
    eligibility: [
      'Étudiants boursiers (bourse du pays d\'origine ou bourse française)',
      'Étudiants en situation financière difficile (justificatifs)',
      'Primo-arrivants sans réseau en France',
      "Étudiants issus de programmes d'échange solidaires",
    ],
    faq: [
      { q: 'Comment prouver mon éligibilité ?', a: "Un justificatif de bourse, une attestation de ressources ou tout document prouvant votre situation suffit." },
      { q: 'Le Pack Solidaire est-il limité ?', a: "Nous acceptons un nombre limité de dossiers par rentrée pour garantir un accompagnement de qualité." },
      { q: "Puis-je passer au Pack Tranquillité ensuite ?", a: "Oui, avec une réduction de 50€ sur le tarif normal si vous passez au Pack Tranquillité." },
    ],
  },
]

// ── Témoignages
export const TESTIMONIALS = [
  {
    name: 'Kwame A.',
    sub: 'Étudiant camerounais — Master Finance, Paris',
    text: "Nexdia m'a accueilli à Charles de Gaulle. Je ne savais pas où aller, j'avais peur. Mon conseiller a tout géré et j'ai eu mon logement en 10 jours. Merci Cathy et toute l'équipe !",
    pack: 'tranquillite',
    stars: 5,
  },
  {
    name: 'Faniry R.',
    sub: 'Mère d\'étudiante — Madagascar',
    text: "En tant que mère, envoyer ma fille seule en France m'angoissait énormément. Grâce à Nexdia j'ai été informée à chaque étape. Ma fille est épanouie, et moi je dors tranquille.",
    pack: 'tranquillite',
    stars: 5,
  },
  {
    name: 'Moussa D.',
    sub: 'Étudiant sénégalais — Licence Droit, Lyon',
    text: "J'avais déjà essayé seul — c'était un cauchemar. Avec le Pack Administratif de Nexdia, tout s'est réglé en 3 semaines. Professionnels, efficaces et tellement humains.",
    pack: 'administratif',
    stars: 5,
  },
  {
    name: 'Amina K.',
    sub: 'Étudiante marocaine — Master Marketing, Bordeaux',
    text: "Le Pack Logement m'a sauvé la vie. En 12 jours j'avais un studio vérifié, avec garant, près de mon campus. Je recommande à 100%.",
    pack: 'logement',
    stars: 5,
  },
  {
    name: 'Jean-Paul M.',
    sub: 'Père d\'étudiant — RDC',
    text: "Savoir que mon fils est accompagné par une vraie équipe en France, ça change tout. Cathy nous tient informés, c'est rassurant.",
    pack: 'tranquillite',
    stars: 5,
  },
  {
    name: 'Fatou S.',
    sub: 'Étudiante ivoirienne — Licence Économie, Toulouse',
    text: "Grâce au Pack Solidaire, j'ai pu bénéficier d'un accompagnement malgré mon budget serré. Nexdia m'a prouvé que l'entraide existe encore.",
    pack: 'solidaire',
    stars: 5,
  },
]

// ── Partenaires
export const PARTNERS = [
  { icon: 'globe', label: 'Campus France' },
  { icon: 'doc', label: 'BNP Paribas' },
  { icon: 'home', label: 'Lokaviz' },
  { icon: 'bag', label: 'CROUS' },
  { icon: 'people', label: 'CampusBubble' },
  { icon: 'home', label: 'Studapart' },
]

// ── Fonctionnalités communauté
export const COM_FEATS = [
  { icon: 'chat', title: "Chat d'entraide 24h/24", sub: 'Réponses d\'étudiants qui ont vécu la même chose.' },
  { icon: 'event', title: 'Événements réguliers', sub: 'Soirées, sorties culturelles, networking.' },
  { icon: 'people', title: 'Ambassadeurs Nexdia', sub: 'Des pairs expérimentés pour vous guider.' },
  { icon: 'gift', title: 'Bons plans exclusifs', sub: 'Réductions resto, transport, culture.' },
]

// ── Garanties parents
export const GUARANTEES = [
  { icon: 'shield', title: 'Accompagnement sécurisé', sub: 'Chaque étape suivie et documentée.' },
  { icon: 'chat', title: 'Mises à jour régulières', sub: 'Vous êtes informés à chaque avancée.' },
  { icon: 'people', title: 'Service 100% humain', sub: 'De vraies personnes, disponibles.' },
  { icon: 'eye', title: 'Transparence totale', sub: 'Vous savez exactement ce qui est fait.' },
]

// ── FAQ générale
export const FAQ = [
  {
    category: 'Général',
    items: [
      { q: "Qu'est-ce que Nexdia exactement ?", a: "Nexdia est un service d'accompagnement humain et complet pour les étudiants internationaux qui arrivent en France. On vous aide de l'aéroport jusqu'à votre intégration complète : logement, démarches administratives, communauté." },
      { q: "Nexdia est-il réservé à certaines nationalités ?", a: "Non ! Nexdia accompagne des étudiants de 32 nationalités différentes. Que vous veniez d'Afrique, d'Asie, d'Amérique latine ou d'ailleurs, nous vous accueillons." },
      { q: "Comment contacter Nexdia ?", a: "Par WhatsApp (le plus rapide), par email à bonjour@nexdia.fr, ou par téléphone. Notre équipe répond 7j/7." },
      { q: "Nexdia existe depuis quand ?", a: "Nexdia a été fondé par Cathy Rakotovao, elle-même ancienne étudiante internationale à Paris. Depuis, nous avons accompagné plus de 500 étudiants." },
    ],
  },
  {
    category: 'Packs & tarifs',
    items: [
      { q: "Quel pack choisir ?", a: "Si vous ne savez pas, le Pack Tranquillité est le plus complet — il inclut logement, démarches, accueil aéroport et un conseiller dédié pendant 6 mois. Si vous avez un besoin précis, les packs Logement ou Administratif conviennent." },
      { q: "Peut-on payer en plusieurs fois ?", a: "Le Pack Tranquillité est payable en 3× sans frais (3×133€). Les autres packs sont en paiement unique." },
      { q: "Y a-t-il des frais cachés ?", a: "Aucun. Le prix affiché est le prix final. Pas de surprise, pas de supplément." },
      { q: "Que contient le Pack Solidaire ?", a: "Le Pack Solidaire offre une consultation personnalisée, les démarches prioritaires, l'accès à la communauté pendant 6 mois et toutes les ressources numériques. Il est accessible sur dossier pour les étudiants aux ressources limitées." },
    ],
  },
  {
    category: 'Logement',
    items: [
      { q: "Comment fonctionne le garant Nexdia ?", a: "Nexdia se porte garant solidaire pour vous auprès du propriétaire. C'est inclus dans le Pack Logement et le Pack Tranquillité. Pas besoin d'un garant français." },
      { q: "Dans quelles villes proposez-vous des logements ?", a: "Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Montpellier, Strasbourg et d'autres villes universitaires." },
      { q: "Combien de temps pour trouver un logement ?", a: "En moyenne 10 à 15 jours après inscription. On commence la recherche dès validation de votre dossier." },
    ],
  },
  {
    category: 'Pour les parents',
    items: [
      { q: "Comment suis-je informé(e) en tant que parent ?", a: "Avec l'accord de votre enfant, vous recevez des mises à jour régulières par WhatsApp ou email. Vous avez aussi un accès direct au conseiller de votre enfant." },
      { q: "Mon enfant est-il en sécurité ?", a: "Oui. Chaque logement est vérifié, chaque démarche est documentée. Notre équipe est composée de vraies personnes, joignables 7j/7." },
      { q: "Puis-je payer le pack pour mon enfant ?", a: "Bien sûr ! Beaucoup de parents règlent directement le pack. Contactez-nous par WhatsApp pour organiser le paiement." },
    ],
  },
]

// ── Navigation principale
export const NAV_ITEMS = [
  { id: 'solution', label: 'Notre approche', to: '/#solution' },
  { id: 'packs', label: 'Packs', to: '/packs' },
  { id: 'communaute', label: 'Communauté', to: '/communaute' },
  { id: 'parents', label: 'Parents', to: '/parents' },
  { id: 'temoignages', label: 'Témoignages', to: '/temoignages' },
  { id: 'fondatrice', label: 'Notre histoire', to: '/notre-histoire' },
]

// ── Footer colonnes
export const FOOTER_COLS = [
  {
    title: 'Navigation',
    items: [
      { href: '/#solution', label: 'Notre approche' },
      { href: '/packs', label: 'Nos packs' },
      { href: '/communaute', label: 'Communauté' },
      { href: '/parents', label: 'Pour les parents' },
      { href: '/notre-histoire', label: 'Notre histoire' },
    ],
  },
  {
    title: 'Packs',
    items: [
      { href: '/packs/logement', label: 'Pack Logement' },
      { href: '/packs/administratif', label: 'Pack Administratif' },
      { href: '/packs/tranquillite', label: 'Pack Tranquillité' },
      { href: '/packs/solidaire', label: 'Pack Solidaire' },
      { href: '/communaute', label: 'Communauté' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { href: 'https://wa.me/33600000000', label: 'WhatsApp', external: true },
      { href: 'mailto:bonjour@nexdia.fr', label: 'bonjour@nexdia.fr', external: true },
      { href: '/contact', label: 'Paris, France' },
      { href: 'tel:+33600000000', label: '+33 6 00 00 00 00', external: true },
    ],
  },
]

// ── Communauté pricing
export const COMMUNITY_PRICING = {
  price: '4,99€',
  period: 'par mois — sans engagement',
  promo: "2 mois offerts à l'inscription",
  features: [
    'Accès communauté illimité',
    "Chat d'entraide & ambassadeurs",
    'Tous les événements Nexdia',
    'Bons plans & réductions exclusifs',
    'Résiliable à tout moment',
  ],
}

// ── Avantages clés (unique selling points)
export const KEY_BENEFITS = [
  { title: '500+ étudiants', sub: 'Rejoignez une communauté grandissante' },
  { title: '97% satisfaction', sub: 'Des clients vraiment contents' },
  { title: '6 mois accompagnement', sub: 'Pas seul jusqu\'à la stabilité' },
  { title: 'Garant inclus', sub: 'Plus de problème de logement' },
  { title: '32 nationalités', sub: 'Une vraie communauté diverse' },
  { title: 'Conseiller dédié', sub: 'Une personne pour vous' },
]

// ── Cibles marketing
export const TARGETS = {
  heartTarget: {
    label: 'Cœur de cible',
    profile: 'Étudiant·e étranger·ère',
    ageRange: '18-25 ans',
    characteristics: [
      'Arrivent seuls, souvent pour la première fois à l\'étranger',
      'Sans réseau familial ni repères locaux',
      'Logement temporaire incertain',
      'Ressources financières limitées',
      'Connaissance limitée du système français',
    ],
  },
  mainTarget: {
    label: 'Cible principale secondaire',
    profile: 'Parents d\'étudiants',
    ageRange: '40-60 ans',
    characteristics: [
      'Classes moyennes à aisées',
      'Motivés par le désir de voir leur enfant réussir',
      'Préoccupés par les arnaques et la sécurité',
      'Attendent un service fiable et rassurant',
      'Souhaitent une communication régulière',
    ],
  },
  partnerTarget: {
    label: 'Cible partenaires',
    profile: 'Institutions & organisations',
    includes: [
      'Universités, écoles, CROUS',
      'Associations étudiantes et communautaires',
      'Mairies et collectivités locales',
      'Entreprises solidaires, banques, agences immobilières',
    ],
  },
}

// ── SWOT Analysis
export const SWOT = {
  strengths: [
    'Rapport qualité prix imbattable',
    'Accompagnement complet : accueil, démarches, logement, intégration',
    'Service humain, personnalisé et fondé sur une expérience vécue',
    'Présence locale forte, proximité terrain',
    'Packs accessibles avec volet social inclusif',
    'Image authentique et impact social réel',
  ],
  weaknesses: [
    'Manque de visibilité initiale',
    'Jeune structure en phase de lancement',
    'Notoriété encore faible',
    'Équipe limitée, capacité d\'accompagnement restreinte',
    'Dépendance au temps humain pour services physiques',
    'Plateforme digitale encore en préparation',
  ],
  opportunities: [
    'Forte croissance du nombre d\'étudiants internationaux (+17% sur 5 ans)',
    'Besoin massif : logement, démarches, isolement',
    'Partenariats possibles avec écoles, CROUS, banques, assurances',
    'Développement dans d\'autres villes et via application',
    'Subventions publiques et soutien solidaire',
  ],
  threats: [
    'Nouveaux entrants sur le marché',
    'Réglementations françaises changeantes',
    'Plateformes de logement très visibles (Airbnb, Studapart)',
    'Services publics gratuits (CROUS, CAF)',
    'Pénurie chronique de logements en France',
    'Complexité administrative persistante',
    'Fluctuation des volumes d\'étudiants selon politiques de visas',
  ],
}

// ── Marketing Goals
export const MARKETING_GOALS = [
  {
    type: 'Notoriété',
    description: 'Faire connaître Nexdia auprès des étudiants, parents et institutions. Devenir la référence.',
  },
  {
    type: 'Acquisition',
    description: 'Convertir prospects en clients payants (packs) dans les 12 premiers mois.',
  },
  {
    type: 'Fidélisation',
    description: 'Créer une communauté engagée et active avec entraide, activités et événements.',
  },
  {
    type: 'Partenariats',
    description: 'Collaborer avec 10 écoles/associations et 20 familles d\'accueil dans l\'année.',
  },
]

// ── Marketing Channels
export const MARKETING_CHANNELS = {
  digital: {
    platforms: ['Facebook', 'TikTok', 'Instagram', 'LinkedIn'],
    content: ['Témoignages vidéo', 'Conseils pratiques', 'Live Q&A', 'Stories', 'Guides PDF'],
  },
  content: {
    formats: ['Témoignages', 'Conseils pratiques', 'Live Q&A', 'Stories', 'Blog articles'],
    frequency: 'Régulier (3-5x par semaine)',
  },
  physical: {
    activities: [
      'Salons étudiants — présence aux forums d\'intégration',
      'Ateliers gratuits en partenariat avec écoles',
      'Flyers et affiches (résidences étudiantes, aéroports, ambassades)',
      'Webinaires avec universités d\'origine',
    ],
  },
  partnerships: {
    schools: 'Proposer packs Nexdia à universités/écoles',
    associations: 'Ateliers/webinaires avec CROUS et associations',
    financial: 'Offres exclusives avec banques et assurances',
    housing: 'Listings de logements vérifiés via agences/résidences',
  },
}
