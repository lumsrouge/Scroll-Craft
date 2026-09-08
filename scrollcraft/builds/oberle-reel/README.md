# oberle-reel — *Les toiles passent devant*

Troisième site pour **Muriel Oberlé**, artiste peintre. Français.

Grammaire **éditoriale chapitrée** : neuf chapitres, chacun sur son propre fond,
coupe franche, aucun fondu. Mouvement signature : **le repérage**, les images
arrivent décalées comme une impression ratée et c'est le scroll qui les recale.

**Aucun visuel généré. Aucune dépense d'API.** Les quinze sources sont les
photographies et les vidéos réelles de l'atelier, inventoriées dans
`photos/INVENTAIRE.md`.

## Le voir

Il faut un serveur : le clip est chargé en `fetch`, ce qui échoue en `file://`.

```bash
python3 -m http.server 4500      # puis http://localhost:4500
```

## Le dossier

| | |
|---|---|
| `index.html` | le site. Tout le CSS et tout le JS spécifiques sont dedans. |
| `BRIEF.md` | l'entretien, la grammaire, la courbe de sensation, le pic, la porte d'empreinte, la partition, la palette relevée. |
| `photos/` | **les quinze sources réelles, non retouchées**, plus leur inventaire. |
| `assets/` | ce que la page sert : les plaques, les images, le clip encodé pour le scrub. |
| `gen-assets.sh` | ce qui a fabriqué `assets/` à partir de `photos/`, verbatim. |
| `fonts/` | Fraunces et Instrument Sans, en local, aucune requête tierce. |
| `lab/` | les planches contact, les rapports du harnais et les bancs de mesure. |
| `scrollcraft.css`, `scrollcraft.js` | le moteur, **non modifié** (`md5` identique à la source du skill). |

## Le repérage, en deux lignes

Une seule image est servie par planche, encodée à **gamma 0,5**. La page en fait
trois copies ; chacune force un canal à 1 par un `screen` avec une primaire pure,
puis les trois se multiplient :

```
C = (1, G^.5, B^.5)   M = (R^.5, 1, B^.5)   J = (R^.5, G^.5, 1)
C × M × J = (R, G, B)          l'image d'origine, exactement
```

Un fichier au lieu de trois, et la reconstruction est exacte. Mesurée, pas
supposée : ±1 unité sur des aplats de valeur connue, 30,6 dB sur une
photographie contre une référence sans perte (`lab/probe*`, `lab/math.html`).

## Avant la mise en ligne

1. **L'adresse de réception du formulaire.** En bas d'`index.html` :
   `var CONTACT_EMAIL = "";`. Tant qu'elle est vide, le formulaire valide la
   saisie et le dit en clair au visiteur au lieu de faire semblant d'envoyer.
2. **Les champs en pointillés** : adresse, commune, téléphone, jours, horaires,
   tarifs, mentions légales. Rien n'a été inventé pour les remplir.
   Le géotag `Balma` de `atelier-vide.mp4` **n'est pas publié** : c'est une
   publication de Muriel, pas une adresse confirmée.
3. **Un vrai téléphone.** La vérification tourne sous Chrome headless, qui ne
   reproduit ni le décodeur vidéo d'un iPhone, ni sa politique de lecture
   automatique, ni le mode économie d'énergie.

## Les visages

**Aucun visage d'enfant, ni réel ni reconstruit.** Les masques floraux posés par
Muriel restent en place. Au pic, ce sont les toiles elles-mêmes qui font écran.
Le clip retenu est le seul plan de `jardin-toiles.mp4` où les prénoms des enfants
ne sont pas lisibles sur les peintures ; les autres plans ont été écartés pour
cette raison. Muriel Oberlé apparaît à visage découvert : ce sont ses photos et
sa personne.

## Les faits

Le seul fait sourcé de la page est cité dans la page même : « Muriel Oberlé : les
voyages forment la genèse », *La Dépêche du Midi*, 8 novembre 2005. Aucune
statistique, aucun chiffre, aucun témoignage n'a été inventé, et il n'y a donc
aucun compteur sur ce site.
