# oberle-atelier

**Le site est ici** : `index.html`, `assets/`, `fonts/`, `scrollcraft.css`,
`scrollcraft.js`. La racine du dépôt porte une page d'accueil qui y mène.

Le reste du dossier garde ce qui a produit ce site et ce qui prouve qu'il tient :

- `BRIEF.md` : le brief, la grammaire choisie et pourquoi les sept autres
  perdent, la courbe de sensation, le pic, la partition acte par acte, et le
  compte rendu complet de vérification.
- `gen-stills.sh` : les prompts, préambule de style compris, qui ont produit le
  monde visuel.
- `lab/` : les planches-contact et les rapports du harnais pour les trois
  profils (bureau, téléphone, mouvement réduit), plus les scripts de mesure,
  de débordement, de formulaire et de contrôle navigateur.
- `out/` : les masters de génération. Ignorés par git, ils ne quittent pas la
  machine où ils ont été produits.

## Rejouer la vérification

```bash
cd scrollcraft/builds/oberle-atelier
npm i playwright-core
node <skill>/scripts/serve.mjs --root . --port 4500 &
node <skill>/scripts/shoot.mjs --url http://localhost:4500 --out lab/shots
node <skill>/scripts/shoot.mjs --url http://localhost:4500 --out lab/mobile --width 390 --height 844
node <skill>/scripts/shoot.mjs --url http://localhost:4500 --out lab/reduced --reduced-motion
```
