# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| oberle-atelier | Rhythmic cutlist | Barre basse pleine largeur qui EST la palette : marque, pigments cliquables qui s'allument, action, à poids égal | `scrub` 1,4 vh à quatre plans composés main (clip aérien, atmosphère, coulée de pigment, éclaboussure de premier plan), typo entre le sujet et le premier plan | 13 actes, aucun au-dessus de 1,4 vh, 12,8 vh au total ; scrub, kinetic, in, reveal, tilt, reveal, silence, scrub, kinetic, in, reveal, in, close | Coupe sèche plein cadre vermillon : la palette se réorganise en quatre choix d'atelier qui pilotent le formulaire, cue qui tient, pied de page dans le cadre | La palette qui se charge d'un pigment par section franchie, se déplie au pic pour que le scroll traîne les pigments ramassés en une coulée sur la planète, puis devient le sélecteur d'atelier | Argentique couleur poussée, plein soleil dur, ocre / vermillon / safran / indigo | HTML statique, moteur scrollcraft non modifié |

| oberle-traversee | Monde continu (worldflight) | La carte : le trait de vol lui-même dessiné petit en marge, huit waypoints posés dessus par sa propre géométrie, cliquables, curseur qui glisse ; rangée de huit points à 44 px sur téléphone | Position établie dans le monde, jambe 1 du vol, aucun titre séparé ni plan composé | Aucun acte. 8 jambes, une seule allure à 0,22 vh/s, 9,9 vh de jambes + 1 vh de queue = 10,9 vh, le pic seul au double des autres | Atterrissage sur la table de l'atelier, dans le même cadre : le trait se pose sur le carnet, l'action est une feuille d'inscription posée dessus | Le trait unique : une seule ligne tirée par le scroll au-dessus du monde, illisible parce qu'on est dedans, qui se replie à l'arrivée et se révèle être un profil de visage | Photographique, lumière réelle de chaque latitude, turquoise / vert acide / ocre / vermillon pris sur ses toiles, pigment aux bords | HTML statique, moteur scrollcraft non modifié |
*(Deux lignes. La table est la contrainte du prochain build.)*

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Rhythmic cutlist** as a grammar.
- **A bottom bar that is also the navigation**, and a nav made of collected
  pigment dots.
- **The peak held in the chrome layer** rather than in an act, which is how a
  cutlist gets a peak at all. The next cutlist needs a different answer.
- **A palette that accumulates as you scroll, paints at the peak, and becomes
  the form control at the close.** All three phases belong to this build.
- **Alpha plates keyed from black-backed generated stills** as the way to build
  a layered hero. Reusable technique, but a second build must not reuse the
  brushstroke-across-the-world composition.
- **13 acts, none above 1.4 vh, 12.8 vh total.** That act-count and length band
  is now taken.
- Ground painted per section rather than drifted, with a two-stop accent
  (one hue) keyed to light and dark grounds.

De `oberle-traversee` :

- **Monde continu (worldflight)** comme grammaire, et avec elle la carte de
  waypoints comme unique navigation.
- **Le trait unique** : un tracé que le scroll tire au-dessus du monde, illisible
  parce que le visiteur est dedans, qui se replie à l'arrivée et se révèle être
  autre chose. La révélation-par-changement-d'échelle appartient à ce build.
- **La carte est le même tracé dessiné petit**, waypoints posés par la géométrie
  du chemin lui-même (`getPointAtLength`) plutôt qu'à la main.
- **8 jambes, une seule allure à 0,22 vh/s, 10,9 vh de piste.** Cette bande de
  longueur et ce nombre de jambes sont pris.
- **Fermeture par atterrissage dans le même cadre**, l'action étant un objet posé
  dans le lieu d'arrivée plutôt qu'un plan de fermeture.
- **Un voile dédié au hero, asservi à l'opacité du bloc qu'il protège**, plutôt
  qu'une densité globale montée pour le pire cas. Technique réutilisable, mais un
  prochain build ne doit pas reprendre la densité d'angle en deux radiales comme
  s'il s'agissait d'une signature.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
