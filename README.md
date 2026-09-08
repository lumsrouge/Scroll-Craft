# Scroll-Craft

Le site des **ateliers de peinture de Muriel Oberlé**, une page unique en
français, construite avec le skill `scroll-craft`.

Publié sur GitHub Pages depuis la racine de `main`. La racine porte une page
d'accueil qui mène au site :

- **<https://lumsrouge.github.io/Scroll-Craft/>** l'accueil
- **<https://lumsrouge.github.io/Scroll-Craft/scrollcraft/builds/oberle-atelier/>** le site

## Le voir en local

Il faut un serveur : la page charge ses clips en `fetch`, ce qui échoue depuis
`file://`.

```bash
python3 -m http.server 4500     # ou : npx serve -l 4500
```

Puis <http://localhost:4500> pour l'accueil, ou directement
<http://localhost:4500/scrollcraft/builds/oberle-atelier/> pour le site.

## Le dépôt

| | |
|---|---|
| `index.html` | l'accueil du dépôt. Une page, un lien vers le site. |
| `scrollcraft/builds/oberle-atelier/index.html` | **le site.** Tout le CSS et tout le JS spécifiques sont dedans. |
| `.../scrollcraft.css` et `.../scrollcraft.js` | le moteur de scroll, non modifié. |
| `.../assets/` | ce que la page sert : deux clips encodés pour le scrub, leurs variantes portrait, les posters et les images. |
| `.../fonts/` | Archivo et Geist, en local, aucune requête tierce. |
| `.../BRIEF.md` et `.../lab/` | le brief, la partition, les prompts et les planches de vérification. |
| `scrollcraft/FINGERPRINTS.md` | le registre qui empêche le prochain site d'être une redite de celui-ci. |

## Avant la mise en ligne

1. **L'adresse de réception du formulaire.** Dans le script en bas de
   `scrollcraft/builds/oberle-atelier/index.html` : `var CONTACT_EMAIL = "";`. Tant qu'elle est vide, le
   formulaire valide la saisie et le dit en clair au visiteur au lieu de faire
   semblant d'envoyer.
2. **Les champs « À compléter »**, visibles en pointillés dans la page :
   adresse, horaires, tarifs, matériel, effectif, e-mail, téléphone, Instagram,
   mentions légales. Rien n'a été inventé pour les remplir.
3. **Les photos.** Le monde visuel est entièrement généré et ne montre aucune
   œuvre de Muriel Oberlé. Les vraies photos peuvent remplacer
   `atelier.webp`, `geste.webp`, `mains.webp`, `matieres.webp` et les quatre
   `at-*.webp` du dossier `assets/` du site, aux mêmes proportions.
4. **Un vrai téléphone.** La vérification tourne sous Chrome headless, qui ne
   reproduit ni le décodeur vidéo d'un iPhone ni sa politique de lecture
   automatique.

## Les faits affichés

Les dates, les prix et les techniques de la section « Le parcours » viennent
d'un seul article, cité dans la page : *La Dépêche du Midi*, 8 novembre 2005,
« Muriel Oberlé : les voyages forment la genèse ».
