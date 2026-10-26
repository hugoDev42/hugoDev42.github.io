# Portfolio

Portfolio personnel en HTML, CSS et JavaScript, sans framework ni build. Hébergeable gratuitement sur GitHub Pages.

## Structure

```
portfolio/
├── index.html      structure de la page
├── css/
│   └── style.css   styles et animations
├── js/
│   ├── config.js   contenu du site (nom, projets, compétences...)
│   └── main.js     génération de la page et interactions
└── README.md
```

## Modifier le contenu

Le contenu se change dans `js/config.js` : nom, rôle, présentation, compétences, projets, parcours, email et réseaux. Les sections Compétences, Projets et Parcours sont générées à partir des listes du fichier, il suffit donc d'ajouter ou de retirer des éléments.

Si le nom ou l'intitulé change, mettre aussi à jour les balises `<title>` et `<meta name="description">` dans `index.html`. Elles ne sont pas générées automatiquement, afin de rester lisibles par les moteurs de recherche et les aperçus de lien.

L'icône de l'onglet se change avec l'emoji `favicon` dans `config.js`.

## Déploiement sur GitHub Pages

1. Créer un dépôt public sur GitHub.
2. Envoyer le projet :

```bash
git init
git add .
git commit -m "Premier déploiement"
git branch -M main
git remote add origin https://github.com/hugoDev42/nom-du-depot.git
git push -u origin main
```

3. Dans **Settings → Pages**, choisir "Deploy from a branch", la branche `main` et le dossier `/ (root)`.
4. Le site est disponible après une à deux minutes sur `https://hugodev42.github.io/nom-du-depot/`.

Si le dépôt s'appelle `hugodev42.github.io`, le site est servi directement à `https://hugodev42.github.io/`.

## Développement local

Ouvrir `index.html` dans un navigateur, ou lancer un serveur local :

```bash
npx serve .
```

## Détails techniques

- HTML, CSS et JavaScript natifs, sans dépendance (polices via Google Fonts)
- Thème clair et sombre, choix conservé dans le `localStorage`
- Animations désactivées si `prefers-reduced-motion` est activé
- Responsive, navigation clavier et structure HTML sémantique
