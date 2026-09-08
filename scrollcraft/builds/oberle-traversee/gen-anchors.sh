#!/usr/bin/env bash
# Les 9 ancres du vol. Une par raccord : la jambe N va de l'ancre N a l'ancre N+1.
# Le preambule est recopie verbatim en tete de chaque prompt (worlds.md).
set -u
SKILL=/root/.claude/plugins/cache/nateherk/nateherk-design/0.3.0/skills/scroll-craft
cd "$(dirname "$0")"
mkdir -p out logs

P='Documentary aerial and interior photography, 35mm, natural available light only, one real sun per scene. Light: the true light of that hour and that latitude, long raking shadows, warm bounce off the ground, no artificial source. Grade: turquoise, lime green, yellow ochre, vermilion and ink black, vivid but held by real light rather than by saturation. Texture: fine 35mm film grain, gentle halation on the highlights, real atmospheric haze and dust, every surface photographically detailed and sharp, true photographic depth of field. A few small translucent watercolour stains bleed in from the extreme edges and corners of the frame only, the way pigment touches the border of a print: they cover less than a fifth of the image and never reach the centre. Everything else is a straight photograph. This is a PHOTOGRAPH carrying a few pigment stains at its border. It is NOT a painting. NOT a watercolour painting, NOT painted, NOT illustration, NOT 3D render, NOT CGI, no digital glow, no plastic sheen, no lens flare, no watermark, no logo, no signature, no faces in close-up, no text anywhere in the image.'

gen () { # gen <n> <scene>
  node "$SKILL/scripts/kie.mjs" still "$P

$2" "out/a$1.png" --ar 16:9 > "logs/a$1.log" 2>&1 &
}

gen 1 'Interior, first light. A painting studio table seen from a low three-quarter angle, close to the surface: a white folding table under a clear plastic sheet, an open sketchbook with a half-finished watercolour of flowers, a jam jar of grey water with one brush in it, a tin of coloured pencils, two yellow plastic water pots, a terracotta pot of brushes. Pale tiled floor. Dawn light entering from a window off frame left, very low and warm across the table. Nobody in the frame. Large empty softly shadowed space across the upper right of the frame.'

gen 2 'Interior, morning. The same painting studio seen from inside looking toward a tall window, the camera has risen and turned: the plastic-covered white table in the lower foreground out of focus, a white shelf on the wall carrying framed watercolours, a black curtain rail with clips holding loose drawings. Bright morning light flooding through the window, the rooftops and trees of a small south-west French town visible beyond the glass. Nobody in the frame. Large empty bright space in the upper left of the frame.'

gen 3 'Aerial, low, just after sunrise. Looking down at a slight forward angle over the terracotta rooftops, plane trees and garden hedges of a small town on the plain near Toulouse, south-west France. Long dawn shadows stretching west across the gardens. A thin layer of ground mist between the trees. Faint translucent turquoise and ochre watercolour washes bleeding across the fields at the edges of the frame. Large empty hazy space across the top third of the frame.'

gen 4 'Aerial photograph taken from an airliner window at 10000 metres, climbing, morning. A broken deck of cumulus cloud photographed from just above it, the tops lit hard from the right with crisp sculpted shadow in the valleys between them, real cloud microstructure and wisps. One small gap shows ochre farmland very far below. The blue deepens toward the top of the frame. Vast empty sky across the whole upper half of the frame.'

gen 5 'Photograph taken from the cupola of the International Space Station at 400 kilometres altitude, Hasselblad, long lens. The curved limb of the Earth across the lower third of the frame against pure black space, seen above the Atlantic near the terminator: the ochre sand seas of the Sahara catching low sun on the right, deep blue ocean in the centre with real sun glint, a white spiral of storm cloud, and the thin bright blue arc of the atmosphere along the horizon. Sharp, high dynamic range, true satellite photography. Vast empty black space across the entire upper half of the frame.'

gen 6 'Aerial photograph from a light aircraft at 900 metres, late afternoon, Sahel. Looking down over ochre and rust-red earth, dry braided riverbeds, scattered thorn trees each casting a long hard shadow, faint vehicle tracks, a few round thatched compounds. Real airborne dust warming the low sun, genuine aerial perspective and haze. Large empty dust-hazed ground across the upper left of the frame.'

gen 7 'Aerial photograph from a light aircraft at 600 metres, midday, Caribbean. Looking down over reef shallows: sharp bands of turquoise, jade and deep navy water, the white sand edge of a barrier reef with real breaking surf, two small green islands with palms, a pale sandbar, one tiny boat wake. Real sun glitter on the far water, genuine water clarity and depth gradation. Large empty open water across the lower right of the frame.'

gen 8 'Aerial photograph from a light aircraft descending through the base of a cloud layer, late afternoon, south-west France. Real wisps of cloud crossing the top of the frame, and below them green farmland, hedgerows, poplar windbreaks and the terracotta rooftops of a small town coming back into view in warm low light. Genuine aerial haze and depth. Large empty cloud-filled space across the upper third of the frame.'

gen 9 'Interior, afternoon. A painting studio table seen from directly overhead: a white folding table under a clear plastic sheet, four open sketchbooks with childrens drawings and watercolours in turquoise, lime green, ochre and red, a large open tin of coloured pencils, a terracotta pot crammed with brushes, two yellow plastic water pots, a glass of water, loose pencils scattered. Several forearms and hands reaching in from the edges of the frame holding pencils and brushes, cropped at the wrist and elbow, no heads and no faces anywhere in the frame. Pale tiled floor visible at the edges. Warm afternoon light from the left. Large empty white table surface across the lower centre of the frame.'

wait
echo "--- ancres terminees ---"
ls -la out/*.png 2>/dev/null
