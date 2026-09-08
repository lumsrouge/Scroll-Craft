# oberle-reel — brief

Troisième site pour **Muriel Oberlé**, artiste peintre. Français.
Construit **entièrement à partir de ses propres photographies et vidéos**.
Aucun visuel généré. Aucune dépense d'API.

Statut du brief : **entretien réel.** Quatre décisions ont été posées en
questions et répondues par le commanditaire ; le reste est repris verbatim des
échanges précédents. Les décisions que j'ai prises seul sont marquées
**[auteur]** et ne sont jamais présentées comme des réponses du commanditaire.

---

## Les huit sujets

### 1. L'ambiance, en trois à cinq mots

Verbatim, du commanditaire :

> « des couleurs vives, des références à la peinture, mais aussi quelques
> références au voyage, la liberté, le dynamisme et la modernité »

Et pour ce troisième site :

> « je veux que tu t'inspires des photos/vidéos que je t'ai données »

C'est la contrainte qui gouverne tout le reste. Les deux premiers sites ont été
peuplés d'images fabriquées. Celui-ci n'a le droit qu'au réel.

### 2. Le parcours, section par section

Le commanditaire a tranché le public : **« Aux parents d'abord »** — l'atelier
d'enfants ouvre et porte la page, les cours adultes arrivent en seconde porte.

Le parcours en découle **[auteur]**, en neuf chapitres, écrit avant tout acte :

```
0  Page de titre    la revue s'annonce, aucun média
1  Reconnaissance   le mercredi : la nappe, les feutres, trois enfants penchés
2  Objection        « mon enfant ne sait pas dessiner » — nommée, puis retournée
3  Substance        le carnet, deux pages, l'objet réel du travail
4  Silence          la salle dressée, vide, avant que ça commence
5  PIC              le jardin : les toiles montent devant les visages
6  Seconde porte    les grands : le cours, ses toiles à elle
7  Pratique         les formats, en petit, sans emphase
8  Colophon         le pavé de fin, l'inscription dans le texte courant
```

### 3. La courbe d'énergie

Alternance stricte papier / couleur pleine, calée sur le rythme d'une revue
imprimée **[auteur]**. Les chapitres de lecture sont sur papier ; les chapitres
de rupture tombent sur un fond plein pris dans ses toiles. Le pic n'est pas le
plus fort en fond : il est le plus fort en image, sur papier, comme un cahier
central.

### 4. La courbe de sensation, et LE moment

**La courbe.** Une ligne par chapitre : l'émotion, puis ce qui la produit à
l'écran. Écrite avant les actes.

```
0  Titre       Curiosité       le titre arrive décalé en trois couleurs et se recale sous la main
1  Mercredi    Reconnaissance  la nappe couverte de dessins, trois enfants penchés dessus
2  Objection   Soulagement     on nomme l'inquiétude du parent, puis on répond que ce n'est pas par là qu'on commence
3  Carnet      Intimité        deux pages du même carnet, à l'échelle où on lit un carnet
4  Silence     Attente         la salle dressée, personne dedans, une seule ligne de texte
5  Jardin      Joie            plein soleil, cinq enfants, les toiles montent devant les visages
6  Les grands  Confiance       la salle d'adultes, ses propres toiles : ce n'est pas qu'un atelier d'enfants
7  Pratique    Clarté          les formats, en petit, sans emphase
8  Colophon    Résolution      le pavé de fin, l'adresse, l'inscription posée dans le texte courant
```

Aucune émotion ne se répète d'un chapitre au suivant. Le silence du chapitre 4
est **voulu** : il est là pour que le pic ait quelque chose d'où surgir. La
passe de vérification doit le lire comme du silence écrit, pas comme du scroll
mort.

**Le pic.** Choisi par le commanditaire parmi quatre propositions :
**« Les toiles devant les visages ».**

La phrase qu'un visiteur dirait à quelqu'un :

> « Il y a un moment où les gamins lèvent leurs peintures devant leur figure, en
> plein soleil, et l'image se remet en place pile à ce moment-là. »

Il vit au chapitre 5. Il reçoit la seule vidéo scrubbée de la page, la plus
grande planche, et le plus long parcours de scroll.

### 5. Ce que ce site fait qu'aucun autre ne fait

Non posé en question — le mouvement signature est de moi **[auteur]**. Il est
décrit en entier plus bas, section « Le repérage ».

### 6. Le registre

Réponse du commanditaire : **« Vif et dense »**.

Maximaliste tenu. Fonds pleins pris dans ses toiles, coupés franc d'un chapitre
à l'autre, grille stricte dessous. Pas de crème-et-laiton, pas de dégradé
violet, pas de sombre-à-un-accent.

### 7. Un monde continu, ou des scènes distinctes

Réponse du commanditaire : **« Une revue imprimée »**.

Grammaire retenue : **éditorial chapitré**. Ce sont des chapitres, pas des
sections ; chacun tombe sur son propre fond, coupe franche, aucun fondu.

### 8. Les ressources existantes

Quinze sources réelles, déposées par Muriel Oberlé, inventoriées dans
`photos/INVENTAIRE.md`. Rien d'autre. **Aucune génération d'image, aucune
dépense.**

Trois contraintes relevées à la sonde pèsent sur la construction :

1. Les deux vidéos sont en **360×640**. Servies en plein cadre elles seraient
   ignobles. La grammaire éditoriale les met en colonne, à leur taille — ce
   n'est pas un compromis, c'est ce qui les sauve.
2. `atelier-vide.mp4` **ne travelle pas** : plan tenu, 24 s. Il ne servira donc
   pas de mouvement, seulement d'image fixe.
3. Des incrustations Instagram couvrent le haut et le bas de `atelier-vide.mp4`.
   Recadrage `crop=360:370:0:170`, vérifié sur image.

---

## La phrase « c'est le site où »

> **C'est le site où les images arrivent décalées, comme une impression ratée,
> et c'est en scrollant qu'on les recale.**

C'est une expérience, du côté du visiteur, et c'est sa main qui la produit.

---

## La grammaire, et pourquoi les sept autres ont perdu

**Éditorial chapitré.**

| Grammaire | Pourquoi elle perd |
|---|---|
| Filmique en un plan | Le défaut vers lequel tout glisse, et elle porte une charge de preuve. Surtout : il n'y a **aucun mouvement de caméra** dans le matériel. Un plan-séquence exigerait de fabriquer ce que le commanditaire a explicitement demandé de ne pas fabriquer. |
| Surface vivante | Il n'y a pas de produit logiciel. Rien à faire tourner. |
| Monde continu | **Prise** par `oberle-traversee`. |
| Affiche typographique | Elle bannit le fond photographique. Quinze sources réelles viennent d'être livrées ; les enterrer serait répondre à côté. |
| Collection / catalogue | Proposée au commanditaire, écartée par lui. C'était un portfolio d'artiste avant d'être un site d'ateliers, et les prénoms d'enfants sont lisibles sur plusieurs œuvres. |
| Scène scindée | Proposée, écartée. Elle exige que les deux colonnes portent un contenu réel à poids égal du début à la fin ; le commanditaire a répondu « aux parents d'abord », ce qui la casse. |
| Cutlist rythmique | **Prise** par `oberle-atelier`. |
| **Éditorial chapitré** | **Retenue.** Choisie par le commanditaire. C'est la seule grammaire qui traite une photographie documentaire comme une photographie : dans sa colonne, avec une légende, à sa définition réelle. |

**Ce qu'elle m'interdit, et que je tiens :** pas de `drift` continu (fonds
peints par chapitre, coupe franche) ; pas de hero `scrub` plein cadre ; pas
d'acte typographique épinglé en fondu croisé ; pas de CTA magnétique ; pas de
copie centrée dans le hero ; le média ne passe jamais sous le texte, il tient sa
colonne avec sa légende ; `scrub` au plus **un** chapitre ; ni `spotlight` ni
`magnet` nulle part.

**Note sur la préférence hero de Nate.** La superposition dimensionnelle est
demandée par défaut ; cette grammaire interdit le média au-dessus de la ligne de
flottaison. Le skill tranche : « use the composition that fits the chosen
grammar ». La profondeur est donc portée par **trois plans typographiques** —
les trois plaques du titre, à des vitesses différentes, qui se recalent. C'est
de la profondeur par mouvement différentiel, sans média, et ça enseigne le
mouvement signature dès le premier écran.

---

## Le mouvement signature : **le repérage**

En impression offset, une image couleur est tirée en plusieurs passages. Quand
les plaques ne sont pas alignées, on voit les couleurs déborder les unes des
autres. C'est le **repérage**, et c'est raté quand on le voit.

Sur ce site, on le voit d'abord, et c'est le scroll qui le corrige.

Chaque planche arrive **hors repérage** : décomposée en trois plaques, cyan,
magenta et jaune, décalées de quelques pour cent, avec un franc débord de
couleur sur les contours. À mesure que la planche monte vers la ligne de
lecture, les plaques convergent, et à l'aplomb du regard l'image est
exactement juste.

**Comment c'est fait, et pourquoi c'est exact.** Une seule image est servie par
planche, encodée à **gamma 0,5** (chaque canal élevé à la puissance ½). La page
en fait trois copies ; chacune force un canal à 1 par un `screen` avec une
primaire pure, puis les trois se multiplient :

```
plaque C = screen(P, rouge)   = (1,       G^0.5, B^0.5)
plaque M = screen(P, vert)    = (R^0.5,   1,     B^0.5)
plaque J = screen(P, bleu)    = (R^0.5,   G^0.5, 1)
produit                        = (R, G, B)      ← l'image d'origine, exactement
```

Un seul fichier au lieu de trois, et la reconstruction est exacte, pas
approchée. Vérifiée par diff de pixels, pas par l'œil.

**Ce que ça règle en plus.** Un matériel de 360 à 1200 px de large est mou en
grand. Le repérage travaille *avec* cette mollesse : un contour qui déborde en
cyan et magenta est un accident d'impression, pas un défaut de définition. La
contrainte technique devient le sujet.

**C'est aussi la navigation.** Le folio en marge liste les neuf chapitres. Tous
sont imprimés hors repérage, franges de couleur, illisibles au premier coup
d'œil — **sauf celui où l'on est**, seul net. Savoir où on est, c'est voir ce
qui est calé. Cliquable, et sur téléphone une bande de neuf pastilles à 44 px.

**Au pic**, le décalage part trois fois plus grand qu'ailleurs et se résorbe sur
le plus long parcours de la page. C'est le moment où l'on comprend que le
mouvement n'était pas une décoration.

Sous `prefers-reduced-motion`, tout est calé d'entrée : image juste, aucun
mouvement, aucun sens perdu.

---

## La porte d'empreinte

Contre **chaque** ligne du registre, individuellement.

### contre `oberle-atelier` (cutlist rythmique)

| Dimension | oberle-atelier | oberle-reel | Diff |
|---|---|---|---|
| Grammaire | Cutlist rythmique | Éditorial chapitré | ✓ |
| Navigation | Barre basse pleine largeur qui est la palette | Folio en marge, chapitres hors repérage sauf le courant | ✓ |
| Hero | `scrub` plein cadre à quatre plans composés | Page de titre, aucun média, trois plaques typographiques qui se recalent | ✓ |
| Séquence | 13 actes, aucun > 1,4 vh, 12,8 vh | 9 chapitres, fonds alternés papier/couleur, un seul acte épinglé | ✓ |
| Fermeture | Coupe sèche vermillon, palette devenue sélecteur | Pavé de colophon, CTA en texte courant, aucun îlot de bouton | ✓ |
| Signature | La palette qui se charge | Le repérage | ✓ |

**6 / 6.**

### contre `oberle-traversee` (monde continu)

| Dimension | oberle-traversee | oberle-reel | Diff |
|---|---|---|---|
| Grammaire | Monde continu | Éditorial chapitré | ✓ |
| Navigation | La carte : le trait de vol en marge, huit waypoints | Folio en marge, netteté = position | ✓ |
| Hero | Position établie dans le monde, jambe 1 | Page de titre, type seule | ✓ |
| Séquence | 8 jambes, une seule allure, 10,9 vh | 9 chapitres, coupes franches, un acte épinglé | ✓ |
| Fermeture | Atterrissage dans le même cadre | Pavé de colophon sur fond bleu de nuit | ✓ |
| Signature | Le trait unique | Le repérage | ✓ |

**6 / 6.** La porte demandait 4 sur 6 contre chaque ligne.

---

## La partition

Neuf chapitres. Quatre familles d'appareils du kit, plus la signature. Jamais
deux fois la même famille de suite. Un seul `scrub`, comme la grammaire l'exige.

| # | Chapitre | Fond | Appareil | Pourquoi celui-là |
|---|---|---|---|---|
| 0 | Page de titre | bleu de nuit | repérage sur la typo | Une page de titre énonce. Les plaques qui se calent apprennent le mouvement avant qu'il ne serve |
| 1 | Le mercredi | papier | `flow` + `in` | Un chapitre de revue se lit comme un document. C'est le seul registre honnête pour la reconnaissance |
| 2 | On ne commence pas par dessiner | vert profond | `reveal` + `parallax` en colonne | L'objection est un changement d'état ; le volet est exactement ça |
| 3 | Le carnet | papier | `flow` + `in` | Deux pages côte à côte, à l'échelle du carnet. Rien ne doit bouger pendant qu'on regarde |
| 4 | La salle, avant | bleu de nuit | `parallax` seul | Le silence écrit. Une image, une ligne, rien d'autre |
| 5 | **Le jardin** | papier | `scrub` | **Le pic.** La seule vidéo de la page, le plus long span, le repérage au maximum |
| 6 | Les grands | vermillon | `flow` + `in` | Seconde porte. Un chapitre qui informe, pas qui impressionne |
| 7 | Les ateliers | papier | `reveal` | De la logistique. Compressée, comme feel.md l'exige |
| 8 | Colophon | bleu de nuit | `flow` + `in` | Le pavé de fin tient, avec du contenu dessus |

Adjacences : repérage, flow, reveal, flow, parallax, scrub, flow, reveal, flow.
Aucune famille deux fois de suite. Quatre familles du kit plus la signature.
Un seul `scrub`, au pic.

**Pas de `count` :** il n'existe aucun chiffre vérifié sur cette activité. La
règle est « de vrais chiffres ou pas de compteur », donc pas de compteur.

---

## La palette, relevée sur ses toiles

Aucune couleur n'a été choisie à l'œil. Chaque valeur est un relevé au pixel sur
les sources, à la sonde :

| Relevé | Source | Rôle |
|---|---|---|
| `#BF5B24` | *Farandole*, plein champ orange | source du vermillon |
| `#BB4016` | *Farandole*, rouge sombre | source du vermillon |
| `#012C54` | `carnet-cactus`, ciel du carnet | fond bleu de nuit |
| `#29642B` | `carnet-cactus`, vert du cactus | fond vert profond |
| `#86632F` | `carnet-cactus`, sol ocre | accent chaud |
| `#B7945E` | `atelier-vide`, porte jaune | accent, clair |

Une seule valeur a été retouchée après relevé : le fond vermillon est descendu
de `#BF5B24` à `#9E3D12`, parce qu'au relevé brut la légende passait à 4,05:1
et échouait le seuil de 4,5:1. C'est le plancher de goût qui a tranché, pas
l'œil, et le calcul est refait dans `lab/`.

Six rôles, **un seul accent** (l'ambre de la porte de l'atelier et des godets),
en deux valeurs parce que la page coupe entre fonds clairs et fonds sombres —
ce que le plancher de goût autorise explicitement, à une seule teinte.

Deux familles typographiques : **Fraunces** en display, **Instrument Sans** en
texte. Servies en local, aucune requête tierce. Le serif est justifié ici parce
que le travail est réellement éditorial, ce qui est la seule justification que
le plancher de goût accepte.

---

## Ce qui reste à compléter

Rien n'a été inventé. Ces champs apparaissent en pointillés dans la page :

- l'adresse et la commune (le géotag `Balma` d'`atelier-vide.mp4` est une
  publication de Muriel, pas une adresse confirmée : il n'est pas publié) ;
- les créneaux et les tarifs ;
- l'adresse de réception du formulaire (`CONTACT_EMAIL`, vide) ;
- les mentions légales.

**Les seuls faits sourcés** de la page viennent d'un article cité dans le texte :
« Muriel Oberlé : les voyages forment la genèse », *La Dépêche du Midi*,
8 novembre 2005.

## Les visages

Inchangé sur les trois sites : **aucun visage d'enfant, ni réel ni reconstruit.**
Les masques floraux posés par Muriel restent. Les cadrages retenus au pic sont
ceux où ce sont les toiles elles-mêmes qui font écran. Sur `jardin-toiles.mp4`,
les prénoms lisibles sur les peintures sont recadrés hors champ. Muriel apparaît
à visage découvert : ce sont ses photos et sa personne.

---

# Compte rendu de vérification

Tout ce qui suit est mesuré, pas supposé. Les bancs sont dans `lab/`.

## Le mouvement signature, prouvé avant d'être posé

La reconstruction par plaques a été vérifiée **avant** d'écrire la page, parce
qu'un mouvement signature qui repose sur une identité fausse ne se rattrape pas
après coup.

| Banc | Résultat |
|---|---|
| `lab/math.html` : cinq aplats de valeur connue | reconstruction exacte à **±1 unité** sur les trois canaux |
| `lab/probe.html` : une photographie contre une référence sans perte | **30,6 dB** une fois l'alignement de mon propre banc corrigé |

Deux erreurs de mesure ont été trouvées et corrigées en route, et elles valent
d'être écrites parce qu'elles auraient toutes deux donné un faux échec :

1. Le premier banc mesurait 21 dB. La référence était en `img` **inline**, donc
   elle gagnait la chasse sous la ligne de base et tout était décalé.
2. Après correction, l'écart restait. Une recherche de décalage sur neuf
   positions a montré l'optimum à **(dx 1, dy 2)** : c'était encore mon banc, pas
   la technique. À l'alignement juste, 30,6 dB, et le résidu est l'encodage de la
   plaque, pas le mélange.

J'ai aussi écarté deux fausses pistes : l'échantillonnage chroma du WebP (une
plaque sans perte donne exactement le même écart) et le rééchantillonnage par le
navigateur (idem à taille native).

## Le harnais, trois passes

| Passe | Longueur | Scroll mort | Clip | Contraste sur média |
|---|---|---|---|---|
| Bureau 1440×900 | 13,1 vh | aucun | avance partout où il est à l'écran | tout passe 4,5:1 au pire cadre |
| Téléphone 390×844 | 13,9 vh | aucun | idem | tout passe 4,5:1 |
| Mouvement réduit | 12,4 vh | aucun | jamais chargé, comme prévu | tout passe 4,5:1 |

## Ce que le harnais ne couvre pas, et que j'ai mesuré à la main

**Le contraste de la une.** Le chapitre 0 n'est pas un acte, donc le harnais ne
le visite pas. Banc dédié, `lab/contraste-une.mjs` : deux captures du même cadre
avec et sans le titre, les pixels qui changent sont l'encre, on note leur
luminance contre le fond réel.

| | pixels encrés | médiane | 95e centile | sous 3:1 |
|---|---|---|---|---|
| Titre calé (témoin : l'antialiasing seul) | 24 013 | 13,81:1 | 14,07:1 | 5,2 % |
| Titre hors repérage, à l'atterrissage | 36 026 | 10,11:1 | 13,89:1 | 10,6 % |

Lecture honnête : le corps des lettres est à 13,9:1 dans les deux cas. Le
décalage ajoute 12 000 pixels de frange **autour** de la lettre, et c'est eux qui
descendent. La frange la plus basse est le bleu pur sur bleu de nuit (1,67:1) :
son décalage a été réduit de moitié pour cette raison. Il reste 5,4 points de
pourcentage au-dessus du plancher d'antialiasing, et ils sont dans la frange, pas
dans la forme lisible.

**Les contrastes de chaque fond**, calculés à la formule WCAG :

```
papier    ink 15,24  soft 6,48  accent 4,95
nuit      ink 12,66  soft 7,40  accent 7,77
vert      ink  7,88  soft 5,37  accent 5,55
vermillon ink  6,18  soft 5,05  accent 4,97
```

**Ordre de tabulation** : 16 arrêts, tous avec un contour visible de 2 px. Les
neuf entrées du folio, l'action de la une, le lien Instagram, les quatre champs,
le bouton. Aucun piège, aucun arrêt invisible.

**Le formulaire**, réellement soumis trois fois : vide, avec un courriel
invalide, puis complet. Il refuse les deux premiers avec un message précis et,
au troisième, dit en clair que l'adresse de réception n'est pas branchée et
renvoie vers Instagram, au lieu de faire semblant d'envoyer.

## La lecture de sensation, et ce qu'elle a changé

Faite sur la planche contact, un mot par chapitre, avant de rouvrir ce fichier.

**Premier passage.** Reconnaissance, soulagement, intimité, **attente**,
**attente**, confiance, clarté, résolution.

Le chapitre 4 et la première moitié du pic donnaient le même mot. C'est
exactement le défaut de remplissage que feel.md décrit, et il venait d'un réglage
précis : le calage s'achevait aux 74 % de l'acte, avec une amplitude de 3, donc
la photographie restait illisible sur les deux tiers du pic. Le décalage y était
un séjour, alors qu'il doit être une arrivée.

**Correction.** Calage ramené à 52 % de l'acte, amplitude de 3 à 2,4. La moitié
du pic se passe désormais sur la photographie résolue, qui est la récompense.

**Second passage.** Reconnaissance, soulagement, intimité, attente, **joie**,
confiance, clarté, résolution. La courbe écrite et la courbe ressentie
coïncident.

Trois vérifications de forme, toutes tenues : le pic est le plus gros changement
visuel de la planche et il occupe le plus de scroll (2,3 vh contre 1,92 pour le
suivant) ; le chapitre qui le précède est le plus calme de la page ; le dernier
écran tient, avec du contenu dessus.

## Les défauts trouvés et corrigés en cours de route

1. L'apostrophe typographique posée par script a débordé dans le bloc `<script>`
   et cassé des littéraux JS. Le moteur ne montait plus. Bloc réécrit.
2. Le folio était en blanc cassé sur tous les fonds, donc **invisible sur les
   quatre chapitres papier**. Son encre suit maintenant le fond qu'il traverse.
3. Le titre de la une était calé dès l'atterrissage : le mouvement signature
   n'était jamais enseigné. Il est désormais piloté par le scroll de la page.
4. La planche du pic faisait 414 px de large : ce n'était pas un pic. Elle est
   passée à 76 vh de haut.
5. La boîte de la légende du pic chevauchait le bord gauche de la planche. Le
   harnais mesurait alors l'encre contre la haie et rapportait 1,31:1. Le pic a
   été recomposé en double page, texte à gauche, planche à droite, chevauchement
   nul.
6. Cette recomposition a produit **deux rangées de grille au lieu d'une** : la
   planche est en colonne 2 mais arrive avant en DOM, donc l'auto-placement
   renvoyait la colonne de texte à la rangée suivante, à 1 026 px dans une scène
   de 900. Rangées fixées explicitement.
7. Sous mouvement réduit, le pic était 2,3 vh de scroll mort : le clip n'est
   jamais chargé et les plaques sont calées d'entrée. L'acte se replie à 1,55 vh
   dans ce mode.
8. La page faisait 16,4 vh sur téléphone. Ramenée à 13,9 en plafonnant la hauteur
   des planches et en gardant une paire d'images côte à côte.
9. Le fond vermillon relevé brut mettait la légende à 4,05:1. Descendu de
   `#BF5B24` à `#9E3D12`.
10. Les messages du formulaire avaient perdu leurs accents dans une réécriture.
    Rétablis.

## Ce que je n'ai pas pu vérifier

**Un vrai téléphone.** Chrome headless ne reproduit ni le décodeur vidéo d'un
iPhone, ni sa politique de lecture automatique, ni le mode économie d'énergie.
Le profil de charge de ce site est le plus léger des trois (un seul clip, de
392 Ko), mais cela reste non vérifié sur un appareil réel.

**Le rendu du repérage sur un écran large gamut.** Les mesures sont faites en
sRGB. Sur un écran P3, les plaques pures seront plus saturées ; la
reconstruction en repérage, elle, ne change pas, puisque les trois plaques
subissent la même transformation.
