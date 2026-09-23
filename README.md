# Portfolio

Un site portfolio statique en HTML / CSS / JS pur (aucune installation, aucun build) pensé pour être hébergé gratuitement sur GitHub Pages.

## Structure

```
portfolio/
├── index.html      → structure de la page (tu n'as normalement pas besoin d'y toucher)
├── css/
│   └── style.css   → tous les styles et animations
├── js/
│   ├── config.js   → TOUT le contenu du site (nom, projets, compétences...) — édite ce fichier
│   └── main.js     → génère la page à partir de config.js et gère les interactions
└── README.md
```

## Personnaliser le contenu

1. Ouvre `js/config.js`.
2. Remplace chaque valeur (nom, rôle, présentation, compétences, projets, parcours, email, réseaux) par les tiennes.
3. Ouvre `index.html` et mets aussi à jour la balise `<title>` et `<meta name="description">` en haut du fichier — elles ne sont pas générées automatiquement, pour rester lisibles par Google et par les aperçus de lien (WhatsApp, LinkedIn, etc.).
4. (Optionnel) Change l'emoji `favicon` dans `config.js` pour l'icône d'onglet.

Aucune autre modification n'est nécessaire pour changer le contenu — les sections Compétences, Projets et Parcours s'affichent automatiquement à partir des listes de `config.js`, donc tu peux en ajouter ou en retirer librement.

## Mettre en ligne sur GitHub Pages

1. Crée un nouveau dépôt sur GitHub (public).
2. Mets-y le contenu de ce dossier (voir les commandes ci-dessous).
3. Dans le dépôt sur GitHub : **Settings → Pages → Build and deployment → Source : "Deploy from a branch"**, puis choisis la branche `main` et le dossier `/ (root)`. Sauvegarde.
4. Après une à deux minutes, ton site est en ligne à l'adresse `https://ton-pseudo.github.io/nom-du-depot/`.

```bash
cd portfolio
git init
git add .
git commit -m "Premier déploiement du portfolio"
git branch -M main
git remote add origin https://github.com/ton-pseudo/nom-du-depot.git
git push -u origin main
```

Astuce : si le dépôt s'appelle `ton-pseudo.github.io` (exactement ton nom d'utilisateur), le site sera directement disponible à `https://ton-pseudo.github.io/`, sans nom de dossier dans l'URL — pratique pour un lien court sur un CV ou un QR code.

## Développer en local

Pas besoin de serveur pour un aperçu rapide : ouvre simplement `index.html` dans un navigateur. Pour un rendu identique à la production (utile si tu ajoutes des appels réseau plus tard), tu peux aussi lancer un petit serveur local :

```bash
npx serve .
```

## Technique

- Aucune dépendance ni build : HTML/CSS/JS natifs, polices via Google Fonts.
- Thème clair/sombre avec mémorisation du choix (`localStorage`).
- Animations au défilement, dégradé animé, machine à écrire sur l'extrait de code, bandeau défilant des technologies — toutes respectent `prefers-reduced-motion`.
- Responsive du mobile au desktop, focus clavier visible, structure sémantique.
