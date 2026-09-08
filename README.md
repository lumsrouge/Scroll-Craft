# Scroll-Craft

Trois sites pour **Muriel Oberlé**, artiste peintre, construits avec le skill
`scroll-craft`. Trois façons de raconter le même atelier : par coupes franches,
sans jamais couper, et en revue imprimée. Le troisième est le seul bâti
entièrement sur ses vraies photographies.

Publiés sur GitHub Pages depuis la racine de `main`. La racine porte une page
d'accueil qui mène aux trois :

- **<https://lumsrouge.github.io/Scroll-Craft/>** l'accueil
- **<https://lumsrouge.github.io/Scroll-Craft/scrollcraft/builds/oberle-atelier/>** — *ateliers de peinture*
- **<https://lumsrouge.github.io/Scroll-Craft/scrollcraft/builds/oberle-traversee/>** — *peindre pour se découvrir*
- **<https://lumsrouge.github.io/Scroll-Craft/scrollcraft/builds/oberle-reel/>** — *les toiles passent devant*

## Les trois sites

### `oberle-atelier` — ateliers de peinture

Grammaire **rhythmic cutlist**. Treize actes, aucun au-delà de 1,4 vh, rien
n'est tenu : la page bat vite du début à la fin. Le mouvement signature est une
**palette** qui se charge d'un pigment à chaque section franchie, se déplie au
pic pour que le scroll traîne les pigments ramassés en une coulée sur la
planète, puis devient le sélecteur d'atelier du formulaire.

Monde argentique poussé, plein soleil dur, ocre / vermillon / safran / indigo.

### `oberle-traversee` — peindre pour se découvrir

Grammaire **monde continu** (`worldflight`). Une seule caméra fixe, huit jambes
fondues l'une dans l'autre, aucune coupe et aucune section : rien n'est dans le
flux du document sauf l'espaceur, et tout le contenu, formulaire compris, arrive
**dans le monde**, aux waypoints. On décolle d'une table d'atelier à l'aube, on
sort par la fenêtre, on monte jusqu'à l'orbite, on redescend sur le Sahel, on
traverse les Caraïbes et on revient se poser sur la table.

Le mouvement signature est **le trait unique** : une seule ligne que le scroll
tire au-dessus du monde, illisible pendant tout le vol parce que le visiteur est
dedans, et qui se replie à l'arrivée sur un carnet où elle se révèle être un
profil de visage. C'est aussi la navigation du site.

Monde photographique, lumière réelle de chaque latitude, turquoise / vert acide
/ ocre / vermillon pris sur ses propres toiles.

### `oberle-reel` — les toiles passent devant

Grammaire **éditoriale chapitrée**. Neuf chapitres, pas des sections : chacun
tombe sur son propre fond, coupe franche, aucun fondu. Pas de barre de
navigation, un folio en marge. La page de titre ne porte aucune image.

Le mouvement signature est **le repérage** : chaque planche arrive décomposée en
plaques cyan, magenta et jaune décalées, comme une impression mal calée, et le
scroll les ramène l'une sur l'autre jusqu'à l'image exacte. C'est aussi la
navigation : dans le folio, seul le chapitre où l'on se trouve est net.

**Aucune image générée.** Les quinze sources sont les photographies et les vidéos
réelles de l'atelier. Les fonds sont relevés au pixel sur ses toiles : papier,
bleu de nuit du carnet, vert du cactus, vermillon de *Farandole*.

## Les voir en local

Il faut un serveur : les pages chargent leurs clips en `fetch`, ce qui échoue
depuis `file://`.

```bash
python3 -m http.server 4500     # ou : npx serve -l 4500
```

Puis <http://localhost:4500> pour l'accueil, ou directement
<http://localhost:4500/scrollcraft/builds/oberle-atelier/>,
<http://localhost:4500/scrollcraft/builds/oberle-traversee/> et
<http://localhost:4500/scrollcraft/builds/oberle-reel/>.

## Le dépôt

| | |
|---|---|
| `index.html` | l'accueil du dépôt. Une page, un lien vers chaque site. |
| `scrollcraft/builds/<nom>/index.html` | **le site.** Tout le CSS et tout le JS spécifiques sont dedans. |
| `.../scrollcraft.css` et `.../scrollcraft.js` | le moteur de scroll, **non modifié** dans les deux builds. |
| `.../assets/` | ce que la page sert : les clips encodés pour le scrub, leurs variantes mobile, les posters et les images. |
| `.../fonts/` | Archivo et Geist, en local, aucune requête tierce. |
| `.../BRIEF.md` | le brief, la grammaire, la courbe de sensation, le pic, la partition et le compte rendu de vérification. |
| `.../lab/` | les planches de contact et les rapports du harnais. |
| `.../gen-*.sh` | ce qui a produit le monde : les prompts, verbatim. |
| `.../photos/` | propre à `oberle-reel` : les quinze sources réelles, non retouchées, et leur inventaire. |
| `scrollcraft/FINGERPRINTS.md` | le registre qui empêche le prochain site d'être une redite des trois premiers. |

## Avant la mise en ligne

Vrai pour les trois sites :

1. **L'adresse de réception du formulaire.** Dans le script en bas de chaque
   `index.html` : `var CONTACT_EMAIL = "";`. Tant qu'elle est vide, le
   formulaire valide la saisie et le dit en clair au visiteur au lieu de faire
   semblant d'envoyer.
2. **Les champs « à compléter »**, visibles en pointillés dans les pages :
   adresse, horaires, tarifs, effectif, coordonnées, mentions légales. Rien n'a
   été inventé pour les remplir, et les pages tiennent debout sans.
3. **Un vrai téléphone.** La vérification tourne sous Chrome headless, qui ne
   reproduit ni le décodeur vidéo d'un iPhone, ni sa politique de lecture
   automatique, ni le mode économie d'énergie. `oberle-traversee` monte **huit
   clips simultanément**, ce qui en fait le profil de charge le plus exigeant
   des deux : c'est là qu'il faut regarder en premier.

Propre à `oberle-atelier` : les vraies photos peuvent remplacer `atelier.webp`,
`geste.webp`, `mains.webp`, `matieres.webp` et les quatre `at-*.webp` du dossier
`assets/`, aux mêmes proportions.

Propre à `oberle-traversee` : le dossier `photos/` attend les photographies
réelles de l'atelier, avec la liste des noms de fichiers dans le README du
build.

Propre à `oberle-reel` : rien à remplacer. Le site est déjà fait des vraies
images. Le géotag `Balma` relevé sur `atelier-vide.mp4` n'y est **pas publié** :
c'est une publication de Muriel, pas une adresse confirmée.

## Les visages

**Aucun visage d'enfant ne figure sur les trois sites, ni réel ni reconstruit.**
Les photographies fournies étaient anonymisées par des fleurs ; la proposition de régénérer des visages à la place a été refusée, parce
que fabriquer des visages synthétiques sur des photos de mineurs réels annule
précisément ce que l'anonymisation protégeait. Les cadrages retenus sont les
mains, les carnets, la table et la matière. Sur `oberle-reel`, le pic repose sur
les photographies où ce sont les toiles elles-mêmes qui font écran, et le seul
plan de vidéo retenu est celui où les prénoms des enfants ne sont pas lisibles
sur les peintures. Muriel Oberlé, elle, apparaît à
visage découvert : ce sont ses photos et sa personne.

## Les faits affichés

Les dates, les prix et les techniques de la section « Le parcours » de
`oberle-atelier` viennent d'un seul article, cité dans la page : *La Dépêche du
Midi*, 8 novembre 2005, « Muriel Oberlé : les voyages forment la genèse ».
Aucune statistique, aucun témoignage et aucun chiffre n'a été inventé sur l'un
ou l'autre site.
