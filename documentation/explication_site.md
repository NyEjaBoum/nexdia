# Guide pour débuter sur le projet Nexdia (Nuxt.js)

Bienvenue ! Ce guide t'explique comment fonctionne le projet Nexdia, où trouver les fichiers importants, et comment commencer à développer, même si tu n'as jamais codé sur ce projet.

## 1. Démarrage rapide

1. Ouvre un terminal dans le dossier `nexdia-nuxt`.
2. Installe les dépendances :
  ```bash
  npm install
  ```
3. Lance le serveur de développement :
  ```bash
  npm run dev
  ```
4. Va sur [http://localhost:3000](http://localhost:3000) pour voir le site.

Le projet utilise Nuxt.js (Vue 3), ce qui facilite le développement de sites web modernes avec un routage automatique et une structure claire.

## 2. Organisation des dossiers et fichiers

- **assets/css/main.css** : Les styles globaux du site.
- **components/** : Tous les petits blocs réutilisables (navbar, footer, sections, cartes, boutons, etc.).
- **data/** :
  - `icons.js` : Les icônes utilisées dans l'interface.
  - `site-data.js` : Toutes les données statiques du site (packs, témoignages, etc.).
  - `theme.js` : Les couleurs et thèmes.
- **layouts/default.vue** : Le squelette principal de toutes les pages.
- **pages/** :
  - Un fichier `.vue` = une page (ex : `index.vue` pour l'accueil, `contact.vue` pour la page contact, etc.).
  - Le dossier `packs/` gère les pages dynamiques pour chaque pack (`[slug].vue`).
- **temp/nexdia_data.json** : Pour stocker ou simuler des données côté back ou pour des tests.

## 3. Où sont les données ?

La plupart des infos affichées (packs, témoignages, FAQ, etc.) sont dans `data/site-data.js`. Tu peux modifier ce fichier pour changer le contenu du site sans toucher au code des composants.

Pour tester ou simuler un back-end, tu peux utiliser `temp/nexdia_data.json` pour stocker des données temporaires.

## 4. Comment ça marche ?

1. **Navigation** : La barre de navigation (`AppNavbar.vue`) permet d'accéder à toutes les pages principales.
2. **Affichage des packs** : Les packs sont listés sur la page d'accueil et chaque pack a sa page dédiée générée dynamiquement via le dossier `pages/packs/`.
3. **Sections modulaires** : Chaque section de la page d'accueil (problèmes, solutions, témoignages, etc.) est un composant indépendant pour faciliter la maintenance.
4. **Contact et communauté** : Les pages `contact.vue` et `communaute.vue` permettent aux utilisateurs de joindre l'équipe ou d'intégrer la communauté.
5. **FAQ et histoire** : Les pages `faq.vue` et `notre-histoire.vue` présentent respectivement la foire aux questions et l'histoire de Nexdia.

## 5. Pour développer ou ajouter des fonctionnalités

- Pour ajouter une page : crée un fichier `.vue` dans `pages/`.
- Pour ajouter un composant : crée-le dans `components/` puis importe-le dans la page ou le layout où tu veux l'utiliser.
- Pour modifier le contenu : édite `data/site-data.js`.

---
N'hésite pas à explorer chaque dossier pour mieux comprendre la logique et l'organisation du projet. Toute la configuration Nuxt se trouve dans `nuxt.config.ts`.

Si tu as un doute, commence par lire les fichiers dans `components/` et `pages/` : c'est là que tout se passe !
