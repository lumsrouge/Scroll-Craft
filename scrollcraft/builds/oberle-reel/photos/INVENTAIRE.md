# Les sources de Muriel Oberlé

Quinze fichiers déposés par Muriel Oberlé — treize photographies et deux vidéos —
renommés d'après leur contenu. **Aucun n'a été retouché** : ce sont les fichiers
d'origine, au bit près, et git les enregistre comme des renommages purs. Les
recadrages et les encodages que le site utilisera seront écrits ailleurs, dans
`assets/`, pour que l'original reste consultable.

## L'atelier au travail

| fichier | px | ce qu'on y voit | visages |
|---|---|---|---|
| `nappe-trois.jpg` | 1200×1600 | Trois enfants penchés sur la grande nappe dessinée au feutre : cadran, crustacés, écriture. Mur d'aquarelles encadrées, étagère de livres, évier de l'atelier. | masqués (hibiscus) |
| `nappe-duo.jpg` | 1200×1600 | Plongée. Une adolescente et une adulte dessinent la nappe à deux ; un globe terrestre au trait, un cactus. Radiateur, tomettes. | un masqué (hibiscus), l'autre de dos |
| `table-cinq.jpg` | 1347×1684 | Plongée franche sur la table blanche : cinq places, deux boîtes de pastels ouvertes, pot à pinceaux, godets jaunes, carnets. | masqués (marguerites) |
| `table-carnets.jpg` | 1200×1600 | Même table, plongée plus serrée. Carnets ouverts, écriture manuscrite, pastels alignés, verre d'eau. | aucun visible (vus du dessus) |
| `chevalets.jpg` | 1200×1600 | L'atelier en travail : chevalets de bois, une fillette brandit sa toile bleue, mur de toiles et de cadres. | un masqué (fleur) |
| `etagere-toiles.jpg` | 852×1136 | L'étagère : aquarelles de cactus, gouaches d'enfants, boîtes de crayons, un portrait au crayon suspendu à la tringle, une plante. | épaule et cheveux seulement |

## Le jardin

| fichier | px | ce qu'on y voit | visages |
|---|---|---|---|
| `jardin-toiles.jpg` | 1200×1600 | **Cinq enfants dans le jardin, chacun tenant sa toile devant son visage.** Plein soleil, haie, ciel bleu. | cachés par les toiles |
| `jardin-toiles.mp4` | 360×640, 30 i/s, 7,8 s | La même idée, en mouvement. Trois plans montés : quatre enfants alignés (image letterboxée dans le cadre vertical), puis deux enfants qui lèvent leurs peintures, puis deux autres qui font tourner les leurs. | cachés par les toiles sur toute la durée — vérifié image par image |

## Les carnets et les toiles

| fichier | px | ce qu'on y voit |
|---|---|---|
| `carnet-arbre.jpg` | 1152×1536 | Un carnet ouvert, à plat : arbre peint en gouache sur fond de nuit bleue, baies rouges, ombres noires. |
| `carnet-cactus.jpg` | 866×1154 | Le même carnet, la même table : cactus vert acide réservé à la cire sur aquarelle, ciel bleu profond, sol ocre, turquoise à droite. Les deux pages font une paire. |
| `farandole.jpg` | 1080×1080 | *Farandole*, huile : des silhouettes qui dansent, ocre et vermillon d'un bout à l'autre, empâtements et grattages. Le titre est incrusté en bas à gauche, en script blanc. |
| `aquarelle-musique.jpg` | 1350×1688 | Grande aquarelle : une figure allongée, collage d'une portée musicale, texte manuscrit à l'encre brune, palmier, rose et jaune d'or. |

## Muriel

| fichier | px | ce qu'on y voit | visages |
|---|---|---|---|
| `cours-adultes.jpg` | 1125×2000 | Muriel debout devant un groupe d'adultes, salle en béton et mur d'oxyde. Registre tout autre : le cours, pas l'atelier d'enfants. | Muriel, à visage découvert |
| `muriel-portrait.jpg` | 800×800 | Le portrait de Muriel, détouré sur blanc, lunettes relevées, chemisier brodé. | Muriel, à visage découvert |

## L'atelier vide

| fichier | px | ce qu'on y voit |
|---|---|---|
| `atelier-vide.mp4` | 360×640, 30 i/s, 24,1 s | **La vraie salle, dressée et vide, avant que les enfants n'arrivent.** Chevalets de bois alignés sur la grande table blanche, palettes rondes posées, tabouret bleu, porte jaune, fenêtre sur le vert du jardin, toiles encadrées au mur. |

## Ce qu'il faut savoir des deux vidéos

Trois contraintes, relevées à la sonde, qui pèseront sur la construction :

1. **La définition est faible : 360×640.** C'est un téléchargement Instagram, pas
   un master. Servi en plein cadre sur un écran de bureau, l'agrandissement se
   verra. Ces deux clips tiennent en vignette, en fenêtre, en incrustation — pas
   en fond plein écran.

2. **`atelier-vide.mp4` ne travelle pas.** Malgré ses vingt-quatre secondes, le
   cadre ne bouge quasiment pas : c'est un plan tenu, avec la dérive d'une main.
   Il donne la salle et la lumière, il ne donnera pas le mouvement.

3. **Des incrustations Instagram couvrent le haut et le bas de `atelier-vide.mp4`** :
   « Génial Génial Génial » et deux papillons en haut, la pastille de lieu
   « Balma » en bas à gauche. Le recadrage `crop=360:370:0:170` les enlève toutes
   les deux et garde la salle entière — vérifié sur image. Tout cadrage définitif
   partira de cette bande.

Un quatrième point, qui n'est pas technique : **sur `jardin-toiles.mp4`, les
prénoms des enfants sont lisibles** sur les peintures (« Élise », « Amélia »,
« Jahn »). Les visages sont couverts, les prénoms ne le sont pas. Si un plan de
cette vidéo est retenu, ou bien il est cadré au-dessus des signatures, ou bien
les prénoms doivent partir. Le même soin vaut pour `farandole.jpg`, où le titre
incrusté suivra l'image partout où elle ira.

## La règle sur les visages

Elle ne change pas d'un site à l'autre : **aucun visage d'enfant, ni réel ni
reconstruit.** Les masques floraux posés par Muriel restent en place ; la
proposition de régénérer des visages à leur place a été refusée, parce que
fabriquer des visages synthétiques sur des photos de mineurs réels annulerait
exactement ce que l'anonymisation protège.

Trois sources sont propres sans qu'on y ajoute rien, et sont donc les plus
utiles : `jardin-toiles.jpg` et `jardin-toiles.mp4`, où les toiles font écran
d'elles-mêmes, et `table-carnets.jpg`, prise à la verticale. Vérifié par
agrandissement pour les trois, et image par image pour la vidéo : aucun visage
n'y est lisible.

Muriel Oberlé, elle, apparaît à visage découvert : ce sont ses photos et sa
personne.

## Ce qu'elles portent, en couleur

Le vert acide et le turquoise des cactus, le vermillon des baies et des fleurs
peintes, l'ocre des tomettes et de *Farandole*, le jaune de la porte de l'atelier
et des godets, le bleu de nuit du carnet, le rose et l'or de la grande aquarelle.
Cette palette-là n'a pas été choisie : elle est déjà dans les sources.

## Un fait de plus

La pastille de lieu de `atelier-vide.mp4` indique **Balma**. C'est un géotag posé
par Muriel sur sa propre publication, pas une adresse vérifiée — il ne sera pas
publié tel quel sans confirmation, mais il est noté ici parce que l'adresse fait
partie des champs « à compléter ».
