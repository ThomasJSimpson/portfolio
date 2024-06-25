import sportSeeCapture from "../assets/captures-projects/sportsee-screenshot.png";
import lesPetitsPlatsCapture from "../assets/captures-projects/les-petits-plats-screenshot.png";
import reserviaCapture from "../assets/captures-projects/reservia-screenshot.png";
import gameonCapture from "../assets/captures-projects/game-on-screenshot.png";
import argentBankCapture from "../assets/captures-projects/ArgentBank1-screenshot.png";
import hrnetCapture from "../assets/captures-projects/HRnet2-screenshot.png";
const projects = [
  {
    id: 1,
    name: "Application de suivi sportif 'SportSee' ",
    type: "Projet professionnalisant",
    description: "Développement d'un tableau de bord d'analytics de coaching sportif.",
    tags: ["Javacsript", "React", "Recharts", "API", "Figma"],
    screenshot: sportSeeCapture,
    links: { GitHub: "https://github.com/ThomasJSimpson/SportSee_app", Demo: "https://thomasjsimpson.github.io/SportSee_app/" },
    projectDescription: {
      "Objectifs du projet": "Ma mission était d'intégrer, à partir d'une maquette Figma, des graphiques et des diagrammes (en utilisant React et Recharts) ainsi que de récupérer des données via une API.",
      "Objectifs pédagogiques": ["- Faire appel à des bibliothèques telles que Recharts ou D3.", "- Gérer des appels HTTP, utilisant des bibliothèques comme Fetch ou Axios pour interagir avec le back-end fournit et récupérer les données nécessaires.", "- Créer un mock des données récupérer pour tester l'application sans le back-end.", "- Standardiser les données avant de les utiliser."],
      "Contraintes fonctionnelles": ["- Afficher les différents graphiques/diagrammes.", "- Pouvoir tester l’application avec données mockées.", "- Pouvoir changer de profil utilisateur pour afficher les données correspondantes."],
      "Contraintes techniques": [
        "Reproduire la page de profil (version Desktop):",
        "- Utiliser REACT.",
        "- Reproduire fidèlement le design Figma fournit.",
        "- Créer un Mock des données de l’API.",
        "- Créer un service à part pour réaliser les calls API (Fetch/Axios).",
        "- Standardiser/Formatter les données avant leurs utilisation.",
        "- Intégrer les graphiques des données de l’utilisateur (D3/Recharts).",
      ],
      "Outils utilisés": ["- React", "- Fetch", "- Librairie Recharts", "- Postman 3"],
    },
  },
  {
    id: 2,
    name: "Développement du site de recettes 'Les petits plats'",
    type: "Projet professionnalisant",
    description: "Développement d'une fonctionnalité de recherche pour un site de recettes de cuisine.",
    tags: ["JavaScript", "Performance", "Green Code", "API"],
    screenshot: lesPetitsPlatsCapture,
    links: {
      GitHub: "https://github.com/ThomasJSimpson/-Les-Petits-Plats-",
      Demo: "https://thomasjsimpson.github.io/-Les-Petits-Plats-/",
    },
    projectDescription: {
      "Objectifs du projet": "Ma mission est de développer une fonctionnalité de recherche rapide et efficace pour le site de recettes 'Les petits plats', en respectant les maquettes Figma et en assurant des performances optimales.",
      "Objectifs pédagogiques": ["- Développer deux versions d'un algorithme de recherche pour parcourir et filtrer un fichier JSON de recettes.", "- Analyser et comparer les performances des algorithmes en utilisant Jsben.ch.", "- Documenter le travail effectué et recommander l'algorithme optimal."],
      "Contraintes fonctionnelles": ["- Implémenter une fonctionnalité de recherche rapide et performante.", "- Respecter le design des maquettes Figma.", "- Fournir une fiche d'investigation de fonctionnalité pour comparer les deux implémentations de l'algorithme de recherche."],
      "Contraintes techniques": ["Reproduire la page de recherche (version Desktop):", "- Implémenter deux versions de l'algorithme de recherche, l'une avec des boucles natives et l'autre en programmation fonctionnelle.", "- Comparer les performances des algorithmes avec Jsben.ch.", "- Respecter les bonnes pratiques de Green Code."],
      "Outils utilisés": ["- JavaScript", "- Jsben.ch", "- Figma"],
    },
  },
  {
    id: 3,
    name: "Utilisez une API pour un compte utilisateur bancaire avec React",
    type: "Projet professionnalisant",
    description: "Développement front-end d'une application bancaire avec React et Redux, intégration avec une API REST.",
    tags: ["JavaScript", "React", "Redux", "API", "Swagger"],
    screenshot: argentBankCapture,
    links: {
      GitHub: "https://github.com/ThomasJSimpson/ArgentBank",
      Demo: "https://thomasjsimpson.github.io/ArgentBank/",
    },
    projectDescription: {
      "Objectifs du projet": "Ma mission est de développer une application bancaire en utilisant React et Redux, en intégrant le front-end avec le back-end via des appels API, et en assurant une expérience utilisateur fluide et réactive.",
      "Objectifs pédagogiques": ["- S'authentifier à une API.", "- Implémenter un gestionnaire d'état dans une application React.", "- Interagir avec une API REST.", "- Modéliser une API avec Swagger."],
      "Contraintes fonctionnelles": ["- Implémenter les fonctionnalités de connexion et de gestion de profil utilisateur.", "- Assurer une communication fluide entre le front-end et le back-end via des appels API.", "- Utiliser Redux pour gérer l'état global de l'application."],
      "Contraintes techniques": ["Reproduire la page d'authentification (version Desktop):", "- Utiliser React et Redux pour développer l'interface utilisateur.", "- Écrire des appels à l'API REST pour la communication entre le client et le serveur.", "- Utiliser Swagger pour documenter les API.", "- Utiliser Node.js pour exécuter le code JavaScript côté serveur."],
      "Outils utilisés": ["- React", "- Redux", "- Node.js", "- Swagger", "- Git"],
    },
  },

  {
    id: 4,
    name: "Faites passer une librairie jQuery vers React",
    type: "Projet professionnalisant",
    description: "Conversion d'une application jQuery vers React pour une grande société financière, avec analyse de performance et documentation technique.",
    tags: ["JavaScript", "React", "jQuery", "Lighthouse", "NPM"],
    screenshot: hrnetCapture,
    links: {
      GitHub: "https://github.com/ThomasJSimpson/HRnet",
      Demo: "https://thomasjsimpson.github.io/HRnet/",
    },
    projectDescription: {
      "Objectifs du projet": "Ma mission est de convertir des plugins jQuery en composants React, de mesurer les performances avant et après la conversion, et de documenter le processus de conversion et les résultats.",
      "Objectifs pédagogiques": ["- Analyser la performance d'une application web.", "- Déployer une application front-end.", "- Refondre une application pour réduire la dette technique.", "- Mettre en place son environnement Front-End.", "- Produire de la documentation technique pour une application."],
      "Contraintes fonctionnelles": ["- Convertir un plugin jQuery en composant React.", "- Assurer que l'application HRnet soit entièrement en React sans jQuery.", "- Mesurer et comparer les performances avant et après la conversion."],
      "Contraintes techniques": ["Reproduire les fonctionnalités avec React:", "- Convertir l'application HRnet en React.", "- Créer des composants React pour remplacer les plugins jQuery existants.", "- Effectuer des tests de performance avec Lighthouse.", "- Suivre un paradigme de programmation fonctionnelle en React."],
      "Outils utilisés": ["- React", "- Lighthouse", "- Git", "- NPM", "- GitHub"],
    },
  },
  // {
  //   id: 5,
  //   name: "Développez une application Web avec React et React Router",
  //   type: "Projet professionnalisant",
  //   description: "Implémentation du front-end d'une application web en utilisant React et React Router, avec animations CSS et SASS.",
  //   tags: ["JavaScript", "React", "React Router", "Animations CSS"],
  //   screenshot: "kasaCapture",
  //   links: {
  //     GitHub: "https://github.com/nom_utilisateur/kasa",
  //     "Demo": "https://nom_utilisateur.github.io/kasa/",
  //   },
  //   projectDescription: {
  //     "Objectifs du projet": "Ma mission est de développer le front-end de la nouvelle plateforme web de Kasa en utilisant React et React Router, en intégrant les maquettes Figma, et en utilisant des données simulées.",
  //     "Objectifs pédagogiques": ["- Créer des composants avec React.", "- Développer les routes d'une application web avec React Router.", "- Initialiser une application web avec un framework comme Create React App ou Vite."],
  //     "Contraintes fonctionnelles": ["- Implémenter les composants React et les routes avec React Router.", "- Utiliser SASS pour gérer les styles CSS et implémenter les animations CSS.", "- Respecter les maquettes Figma et les contraintes fonctionnelles spécifiées par le designer."],
  //     "Contraintes techniques": ["Reproduire les pages et les composants avec React:", "- Utiliser Create React App ou Vite pour initialiser le projet.", "- Intégrer les données depuis un fichier JSON simulé.", "- Configurer les routes avec React Router pour naviguer entre les pages.", "- Implémenter les animations CSS et les styles avec SASS."],
  //     "Outils utilisés": ["- React", "- React Router", "- SASS", "- Node.js", "- Create React App", "- Git", "- Figma"],
  //   },
  // },
  // {
  //   id: 6,
  //   name: "Définissez les besoins pour une app de soutien scolaire",
  //   type: "Projet professionnalisant",
  //   description: "Définir les besoins et modéliser une solution technique pour une association de soutien scolaire en utilisant une méthodologie agile.",
  //   tags: ["Agile", "UX/UI Design", "Figma", "Kanban", "User Stories"],
  //   screenshot: "learnAtHomeCapture",
  //   links: {
  //     GitHub: "https://github.com/nom_utilisateur/learn_at_home",
  //     "Demo": "https://nom_utilisateur.github.io/learn_at_home/",
  //   },
  //   projectDescription: {
  //     "Objectifs du projet": "Ma mission est de définir les besoins et de modéliser une solution technique pour Learn@Home, une association de soutien scolaire, en créant des diagrammes de cas d'usage, des user stories, des maquettes et un tableau Kanban.",
  //     "Objectifs pédagogiques": ["- Contribuer à un projet en utilisant une méthodologie agile.", "- Créer une maquette pour un client.", "- Identifier les besoins de l'application à partir d'un cahier des charges.", "- Modéliser une solution technique pour un client."],
  //     "Contraintes fonctionnelles": ["- Créer des diagrammes de cas d'usage pour les fonctionnalités majeures.", "- Rédiger des user stories avec critères d'acceptation.", "- Concevoir des maquettes pour chaque page du site en utilisant Figma ou Sketch.", "- Élaborer un tableau Kanban pour structurer le projet."],
  //     "Contraintes techniques": ["Reproduire les fonctionnalités suivantes:", "- Connexion", "- Chat", "- Calendrier", "- Gestionnaire de tâches", "- Tableau de bord", "- Utiliser une méthodologie agile pour le développement du projet."],
  //     "Outils utilisés": ["- Figma", "- Sketch", "- Notion", "- Trello", "- GitHub", "- Kanban"],
  //   },
  // },
  // {
  //   id: 7,
  //   name: "Débuggez et testez un SaaS RH",
  //   type: "Projet professionnalisant",
  //   description: "Débuggage et tests d'une application SaaS RH en utilisant des tests unitaires, d'intégration, et des tests end-to-end manuels.",
  //   tags: ["JavaScript", "Débogage", "Tests Unitaires", "Tests d'Intégration", "Tests End-to-End", "Chrome Debugger"],
  //   screenshot: "billedCapture",
  //   links: {
  //     GitHub: "https://github.com/nom_utilisateur/billed",
  //     "Demo": "https://nom_utilisateur.github.io/billed/",
  //   },
  //   projectDescription: {
  //     "Objectifs du projet": "Ma mission est de corriger les bugs d'un système RH, de rédiger et implémenter des tests unitaires et d'intégration, ainsi que de réaliser des tests end-to-end manuels pour assurer la fiabilité de l'application.",
  //     "Objectifs pédagogiques": ["- Écrire des tests unitaires avec JavaScript.", "- Rédiger un plan de test end-to-end manuel.", "- Écrire des tests d'intégration avec JavaScript.", "- Débugger une application web avec le Chrome Debugger."],
  //     "Contraintes fonctionnelles": ["- Installer et configurer le back-end et le front-end depuis des repos spécifiques.", "- Déboguer les parties de l'application identifiées.", "- Rédiger et implémenter des tests unitaires et d'intégration en JavaScript.", "- Élaborer un plan de test end-to-end manuel."],
  //     "Contraintes techniques": ["Reproduire les fonctionnalités suivantes:", "- Utiliser Chrome Debugger pour le débogage.", "- Rédiger des tests unitaires pour les composants de l'application.", "- Rédiger des tests d'intégration pour vérifier l'interaction entre les différentes parties de l'application.", "- Effectuer des tests end-to-end manuels pour valider le parcours utilisateur."],
  //     "Outils utilisés": ["- JavaScript", "- Chrome Debugger", "- Git", "- Notion"],
  //   },
  // },
  // {
  //   id: 8,
  //   name: "Créez un site accessible pour une plateforme de photographes",
  //   type: "Projet professionnalisant",
  //   description: "Développement d'un site web accessible et modulaire pour une plateforme de photographes en utilisant des design patterns en JavaScript.",
  //   tags: ["HTML", "CSS", "JavaScript", "Accessibilité", "Design Patterns", "Factory Method"],
  //   screenshot: "fishEyeCapture",
  //   links: {
  //     GitHub: "https://github.com/nom_utilisateur/fisheye",
  //     "Demo": "https://nom_utilisateur.github.io/fisheye/",
  //   },
  //   projectDescription: {
  //     "Objectifs du projet": "Ma mission est de développer un prototype fonctionnel d'un site web pour FishEye, en mettant l'accent sur l'accessibilité, la modularité et l'utilisation de design patterns en JavaScript.",
  //     "Objectifs pédagogiques": ["- Assurer l'accessibilité d'un site web.", "- Développer une application web modulaire avec des design patterns.", "- Écrire du code JavaScript maintenable.", "- Gérer les événements d'un site avec JavaScript."],
  //     "Contraintes fonctionnelles": [
  //       "- Créer une page principale et des pages individuelles pour les photographes en utilisant les maquettes fournies.",
  //       "- Intégrer les données JSON pour générer dynamiquement les pages des photographes.",
  //       "- Implémenter une modale de contact, une LightBox pour les médias et la gestion des likes.",
  //       "- Assurer que le site soit entièrement accessible, y compris la navigation au clavier.",
  //     ],
  //     "Contraintes techniques": [
  //       "Reproduire les fonctionnalités suivantes:",
  //       "- Utiliser HTML, CSS et JavaScript pour créer un prototype fonctionnel.",
  //       "- Suivre les exigences d'accessibilité mentionnées dans les notes de réunion.",
  //       "- Utiliser un pattern Factory Method pour distinguer les vidéos des photos.",
  //       "- Assurer qu'il n'y ait pas d'erreurs dans la console et que le site soit utilisable par les lecteurs d'écran.",
  //     ],
  //     "Outils utilisés": ["- HTML", "- CSS", "- JavaScript", "- Figma", "- JSON", "- GitHub"],
  //   },
  // },
  {
    id: 9,
    name: "Créez une landing page avec Javascript",
    type: "Projet professionnalisant",
    description: "Développement d'une landing page pour une entreprise organisant des concours de jeux, avec un focus sur la création et la validation d'un formulaire en JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Formulaire", "Validation"],
    screenshot: gameonCapture,
    links: {
      GitHub: "https://github.com/ThomasJSimpson/GameOn-website-FR/tree/master/starterOnly",
      Demo: "https://thomasjsimpson.github.io/GameOn-website-FR/starterOnly/html/",
    },
    projectDescription: {
      "Objectifs du projet": "Ma mission est de compléter le développement de la landing page de GameOn en ajoutant le code JavaScript nécessaire pour rendre le formulaire d'inscription pleinement fonctionnel.",
      "Objectifs pédagogiques": ["- Programmer en JavaScript.", "- Valider les données des formulaires.", "- Gérer les événements JavaScript.", "- Comprendre l'interaction entre JavaScript, HTML et CSS."],
      "Contraintes fonctionnelles": ["- Ajouter le code JavaScript manquant pour rendre le formulaire d'inscription fonctionnel.", "- Valider les données saisies par les utilisateurs pour garantir qu'elles répondent aux critères établis.", "- Gérer les événements comme les clics de bouton et les entrées de formulaire pour créer des interactions dynamiques."],
      "Contraintes techniques": ["Reproduire les fonctionnalités suivantes:", "- Utiliser HTML, CSS et JavaScript pour compléter la landing page.", "- Suivre les maquettes fournies sur Figma.", "- Utiliser Visual Studio Code pour la gestion du code.", "- Utiliser GitHub pour le versionnement du projet."],
      "Outils utilisés": ["- HTML", "- CSS", "- JavaScript", "- Figma", "- Visual Studio Code", "- GitHub"],
    },
  },
  // {
  //   id: 10,
  //   name: "Dynamisez une page web avec des animations CSS",
  //   type: "Projet professionnalisant",
  //   description: "Développement d'une interface mobile-first avec des animations CSS pour une start-up, en utilisant SASS et en versionnant le projet avec Git et GitHub.",
  //   tags: ["HTML", "CSS", "SASS", "Animations", "Mobile-First", "Figma"],
  //   screenshot: "ohmyfoodCapture",
  //   links: {
  //     GitHub: "https://github.com/nom_utilisateur/ohmyfood",
  //     "Demo": "https://nom_utilisateur.github.io/ohmyfood/",
  //   },
  //   projectDescription: {
  //     "Objectifs du projet": "Ma mission est de développer un site mobile-first pour Ohmyfood, intégrant des animations CSS pour améliorer l'expérience utilisateur, et versionnant le projet avec Git et GitHub.",
  //     "Objectifs pédagogiques": ["- Mettre en œuvre des effets CSS graphiques avancés.", "- Assurer la cohérence graphique d'un site web.", "- Mettre en place une structure de navigation pour un site web.", "- Mettre en place son environnement Front-End.", "- Utiliser un système de gestion de versions pour le suivi du projet et son hébergement."],
  //     "Contraintes fonctionnelles": ["- Intégrer les maquettes en mobile-first.", "- Utiliser SASS pour structurer et optimiser le CSS.", "- Mettre en œuvre des animations CSS pour enrichir l'expérience utilisateur.", "- Assurer que le site soit responsive et en cohérence avec les maquettes fournies."],
  //     "Contraintes techniques": ["Reproduire les fonctionnalités suivantes:", "- Utiliser HTML, CSS et SASS pour développer le site.", "- Suivre les maquettes et le prototype fournis sur Figma.", "- Utiliser Git et GitHub pour versionner le projet.", "- Assurer que le site soit mobile-first et responsive."],
  //     "Outils utilisés": ["- HTML", "- CSS", "- SASS", "- Figma", "- Git", "- GitHub"],
  //   },
  // },
  {
    id: 11,
    name: "Transformez une maquette en site web avec HTML & CSS",
    type: "Projet professionnalisant",
    description: "Création de la page d'accueil responsive d'une agence de voyage en utilisant HTML et CSS à partir de maquettes Figma.",
    tags: ["HTML", "CSS", "Responsive Design", "Figma"],
    screenshot: reserviaCapture,
    links: {
      GitHub: "https://github.com/ThomasJSimpson/ThomasBerenger_2_26052021",
      Demo: "https://thomasjsimpson.github.io/ThomasBerenger_2_26052021/",
    },
    projectDescription: {
      "Objectifs du projet": "Ma mission est d'intégrer l'interface responsive de la page d'accueil du site Booki en utilisant HTML et CSS, en respectant les maquettes fournies et les spécifications techniques.",
      "Objectifs pédagogiques": ["- Intégrer du contenu conformément à une maquette.", "- Implémenter une interface responsive."],
      "Contraintes fonctionnelles": ["- Intégrer les maquettes Figma pour mobile, tablette et desktop.", "- Utiliser HTML et CSS pour développer le site sans se fier à l'outil code de Figma.", "- Assurer que la page d'accueil soit responsive et fonctionne bien sur tous les appareils et tailles d'écran."],
      "Contraintes techniques": ["Reproduire les fonctionnalités suivantes:", "- Utiliser HTML et CSS pour créer la page d'accueil.", "- Suivre les maquettes et les spécifications techniques fournies.", "- Maintenir une structure de fichiers cohérente pour le projet."],
      "Outils utilisés": ["- HTML", "- CSS", "- Figma", "- Visual Studio Code", "- GitHub"],
    },
  },
];

export default projects;
// "Dans ce projet, vous développerez un tableau de bord d'analytics de coaching sportif. Votre mission sera d'intégrer des graphiques et des diagrammes en utilisant React et de récupérer des données via une API. Votre tâche principale consistera à développer la page profil de l'utilisateur, en intégrant des éléments graphiques avancés tels que des graphiques et des diagrammes pour présenter les données d'analyse sportive. Vous utiliserez React pour construire l'interface utilisateur. Pour les graphiques, vous pourrez faire appel à des bibliothèques telles que Recharts ou D3. Vous serez en charge de la gestion des appels HTTP, utilisant des bibliothèques comme Fetch ou Axios pour interagir avec le back-end et récupérer les données nécessaires. Une partie importante du projet sera de développer une documentation complète comprenant un Readme, JSDoc, et les proptypes. Ceci est essentiel pour faciliter la collaboration et la compréhension du code au sein de l'équipe.Bien que le back-end soit géré en utilisant Node.js, votre concentration sera principalement sur le développement front-end et l'intégration avec l'API."
