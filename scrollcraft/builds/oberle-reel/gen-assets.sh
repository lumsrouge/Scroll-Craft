#!/usr/bin/env bash
# oberle-reel : fabrication des assets.
#
# AUCUNE GÉNÉRATION. Tout sort des quinze sources réelles de photos/.
# Ce script est la trace exacte de ce qui a été fait à chaque fichier.
#
# Deux familles de sortie :
#
#   *-p.webp   PLAQUE. L'image encodée à gamma 0,5 : chaque canal élevé à la
#              puissance ½. Jamais affichée seule. La page en tire trois
#              copies (cyan, magenta, jaune) qui se multiplient et
#              reconstituent l'image d'origine EXACTEMENT :
#                  C=(1,G^.5,B^.5)  M=(R^.5,1,B^.5)  J=(R^.5,G^.5,1)
#                  C×M×J = (R,G,B)
#              Qualité poussée à 88 : l'erreur de quantification est
#              élevée au carré par le produit, donc elle doit être basse.
#
#   *.webp     image ordinaire, qualité 80.
#
set -euo pipefail
cd "$(dirname "$0")"
S=photos; A=assets
G="lutrgb=r='255*pow(val/255\,0.5)':g='255*pow(val/255\,0.5)':b='255*pow(val/255\,0.5)'"

plaque(){ # src  filtre-de-cadrage  largeur  sortie
  ffmpeg -y -v error -i "$S/$1" -vf "format=rgb24,${2}scale=$3:-2:flags=lanczos,$G" \
         -c:v libwebp -quality 88 -compression_level 6 "$A/$4"
  printf "  plaque  %-22s %s\n" "$4" "$(du -h "$A/$4" | cut -f1)"
}
simple(){ # src  filtre-de-cadrage  largeur  sortie
  ffmpeg -y -v error -i "$S/$1" -vf "${2}scale=$3:-2:flags=lanczos" \
         -c:v libwebp -quality 80 -compression_level 6 "$A/$4"
  printf "  image   %-22s %s\n" "$4" "$(du -h "$A/$4" | cut -f1)"
}

echo "PLAQUES (hors repérage au départ, recalées par le scroll)"
plaque nappe-trois.jpg      ""                       1000 ch1-nappe-p.webp
plaque table-cinq.jpg       ""                       1000 ch2-table-p.webp
plaque carnet-arbre.jpg     "crop=1075:800:40:440,"   900 ch3-arbre-p.webp
plaque carnet-cactus.jpg    "crop=688:789:85:139,"    860 ch3-cactus-p.webp
plaque jardin-toiles.jpg    ""                       1200 ch5-jardin-p.webp
plaque farandole.jpg        ""                       1000 ch6-farandole-p.webp

echo "PLAQUE tirée de la vidéo de l'atelier vide"
# crop=360:370:0:170 retire l'incrustation « Génial » en haut et la pastille
# « Balma » en bas. Vérifié sur image avant de s'en servir.
ffmpeg -y -v error -i "$S/atelier-vide.mp4" \
  -vf "select=eq(n\,300),format=rgb24,crop=360:370:0:170,$G" -frames:v 1 \
  -c:v libwebp -quality 88 -compression_level 6 "$A/ch4-salle-p.webp"
printf "  plaque  %-22s %s\n" ch4-salle-p.webp "$(du -h $A/ch4-salle-p.webp | cut -f1)"

echo "IMAGES ORDINAIRES"
simple nappe-duo.jpg        ""                        760 ch1-duo.webp
simple table-carnets.jpg    ""                        760 ch2-carnets.webp
simple cours-adultes.jpg    ""                        700 ch6-cours.webp
simple aquarelle-musique.jpg ""                       800 ch6-aquarelle.webp
simple muriel-portrait.jpg  ""                        480 ch6-muriel.webp
simple chevalets.jpg        ""                        860 ch7-chevalets.webp
simple etagere-toiles.jpg   ""                        760 ch7-etagere.webp

echo "LE CLIP DU PIC"
# Seul le PREMIER plan de jardin-toiles.mp4 est retenu : quatre enfants
# alignés, chacun derrière sa peinture. Les plans suivants portent les
# prénoms des enfants, lisibles sur les toiles, et sont écartés pour ça.
# Le plan 1 est letterboxé dans le cadre vertical : crop=360:280:0:180
# récupère l'image et jette les bandes noires.
CUT="select='between(n,0,64)',crop=360:280:0:180,setpts=N/30/TB"
ffmpeg -y -v error -i "$S/jardin-toiles.mp4" -vf "$CUT" -an \
  -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -g 8 -keyint_min 8 \
  -sc_threshold 0 -movflags +faststart "$A/jardin.mp4"
ffmpeg -y -v error -i "$S/jardin-toiles.mp4" -vf "$CUT,scale=270:-2" -an \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -g 4 -keyint_min 4 \
  -sc_threshold 0 -movflags +faststart "$A/jardin-m.mp4"
ffmpeg -y -v error -i "$A/jardin.mp4" -vf "select=eq(n\,0)" -frames:v 1 \
  -c:v libwebp -quality 82 "$A/jardin-poster.webp"
for f in jardin.mp4 jardin-m.mp4 jardin-poster.webp; do
  printf "  clip    %-22s %s\n" "$f" "$(du -h $A/$f | cut -f1)"
done

echo; echo "total assets : $(du -sh $A | cut -f1)"
