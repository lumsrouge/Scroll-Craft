# Muriel Oberlé · ateliers de peinture

Page unique, HTML statique. Aucun build, aucune dépendance à l'exécution.
Le moteur `scrollcraft.js` / `scrollcraft.css` n'a pas été modifié.

## La voir

Il faut un serveur : la page charge ses clips en `fetch`, ce qui échoue depuis
`file://`.

```bash
cd scrollcraft/builds/oberle-atelier
python3 -m http.server 4500     # ou : npx serve -l 4500
```

Puis ouvrir <http://localhost:4500>.

## Avant la mise en ligne

1. **L'adresse de réception du formulaire.** En haut du script en bas de
   `index.html` : `var CONTACT_EMAIL = "";`. Tant qu'elle est vide, le
   formulaire valide la saisie et le dit en clair au visiteur au lieu de faire
   semblant d'envoyer.
2. **Les champs `À compléter`.** Ils sont visibles dans la page, en pointillés,
   sections « Quatre façons d'entrer dans l'atelier », « Pratique » et pied de
   page : adresse, horaires, tarifs, matériel, effectif, e-mail, téléphone,
   Instagram, mentions légales. Rien n'a été inventé pour les remplir.
3. **Les photos.** Le monde visuel est entièrement généré et ne montre aucune
   œuvre de Muriel Oberlé, conformément à la consigne. Les vraies photos
   d'atelier et de séances peuvent remplacer `assets/atelier.webp`,
   `assets/geste.webp`, `assets/mains.webp`, `assets/matieres.webp` et les
   quatre `assets/at-*.webp`, aux mêmes proportions.
4. **Un vrai téléphone.** Les trois passages de vérification tournent sous
   Chrome headless, qui ne reproduit ni le décodeur vidéo d'un iPhone ni sa
   politique de lecture automatique. À tester en premier sur un appareil réel.

## Les faits affichés

Les dates, les prix et les techniques de la section « Le parcours » viennent
d'un seul article, cité dans la page : *La Dépêche du Midi*, 8 novembre 2005,
« Muriel Oberlé : les voyages forment la genèse ».

## Le dossier

- `index.html` : la page.
- `BRIEF.md` : le brief, la grammaire, la courbe de sensation, le pic, la
  partition, et le compte rendu de vérification.
- `assets/` : ce que la page sert. `fonts/` : Archivo et Geist, en local.
- `lab/` : les planches-contact et les rapports du harnais, plus les scripts de
  mesure. `gen-stills.sh` : les prompts qui ont produit le monde visuel.
