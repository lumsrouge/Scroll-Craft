# oberle-traversee

Le **second** site du dépôt, pour Muriel Oberlé. Le premier,
`../oberle-atelier/`, n'a pas été touché.

Grammaire : **monde continu** (`worldflight`). Une seule caméra fixe, huit
jambes qui se fondent l'une dans l'autre, aucune coupe et aucune section. Rien
n'est dans le flux du document sauf l'espaceur : tout le contenu, y compris le
formulaire de réservation, arrive **dans le monde**, aux waypoints.

Le plan complet (courbe de sensation, pic, porte des empreintes, partition des
jambes, préambule de style) est dans `BRIEF.md`.

## Le voir en local

La page charge ses clips en `fetch` : il faut un serveur, `file://` échoue.

```bash
python3 -m http.server 4500      # depuis ce dossier
```

Puis <http://localhost:4500>.

## Les fichiers

| | |
|---|---|
| `index.html` | le site. Tout le CSS et le JS spécifiques sont dedans. |
| `scrollcraft.css`, `scrollcraft.js` | le moteur, **non modifié**. |
| `assets/` | ce que la page sert : 8 clips encodés pour le scrub, leurs variantes mobile, les posters. |
| `fonts/` | Archivo et Geist en local, aucune requête tierce. |
| `photos/` | **vide pour l'instant.** Les photographies réelles de l'atelier. |
| `out/` | les masters de génération. Ignorés par git. |
| `lab/` | les planches de vérification. |
| `gen-anchors.sh`, `gen-legs.sh` | ce qui a produit le monde. |

## Les photographies réelles

Le dossier `photos/` est vide : les images fournies dans la conversation ne sont
jamais arrivées sur le disque du dépôt. Pour les brancher, les déposer ici avec
ces noms, puis me le dire :

| Fichier | Ce que c'est |
|---|---|
| `table-plongee.jpg` | la table vue d'en haut, carnets et crayons |
| `mains-nappe.jpg` | les mains qui dessinent sur la nappe entoilée |
| `carnet-arbre.jpg` | le carnet ouvert, l'arbre d'hiver |
| `carnet-fleurs.jpg` | le carnet ouvert, le bouquet à l'aquarelle |
| `etagere.jpg` | l'étagère de toiles et la tringle à pinces |
| `jardin.jpg` | les toiles tenues devant les visages, dehors |
| `muriel.jpg` | le portrait de Muriel |

**Aucun visage d'enfant n'est utilisé, ni réel ni reconstruit.** La proposition
de régénérer des visages à la place des fleurs d'anonymisation a été refusée :
fabriquer des visages synthétiques sur des photos de mineurs réels annule ce que
l'anonymisation protégeait. Les cadrages retenus sont les mains, les carnets, la
table et la matière. Muriel apparaît à visage découvert, ce sont ses photos.

## Avant la mise en ligne

1. **L'adresse de réception du formulaire.** Dans le script en bas de
   `index.html` : `var CONTACT_EMAIL = "";`. Tant qu'elle est vide, le
   formulaire valide la saisie et le dit en clair au visiteur au lieu de faire
   semblant d'envoyer.
2. **Les mentions « à compléter »**, visibles en pointillés : adresse, créneaux,
   tarifs, tranches d'âge exactes, effectif, mentions légales. Rien n'a été
   inventé pour les remplir.
3. **Un vrai téléphone.** La vérification tourne sous Chrome headless, qui ne
   reproduit ni le décodeur vidéo d'un iPhone ni sa politique de lecture
   automatique. Un monde continu monte huit clips à la fois : c'est le profil de
   charge le plus exigeant du skill, et c'est à tester en premier.
