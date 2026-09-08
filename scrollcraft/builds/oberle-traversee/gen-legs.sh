#!/usr/bin/env bash
# Les 8 jambes. Chacune est verrouillee entre deux ancres : head = c(N),
# tail = c(N+1). Les joints sont donc image-identiques par construction, et les
# huit clips peuvent partir en meme temps au lieu de s'enchainer en serie.
set -u
SKILL=/root/.claude/plugins/cache/nateherk/nateherk-design/0.3.0/skills/scroll-craft
cd "$(dirname "$0")"
mkdir -p out logs

leg () { # leg <n> <duree> <mouvement>
  node "$SKILL/scripts/kie.mjs" shot "$3" "out/c$1.png" "out/leg$1.mp4" \
    --tail "out/c$(( $1 + 1 )).png" --dur "$2" > "logs/leg$1.log" 2>&1 &
}

leg 1 5 'The camera rises slowly and steadily from just above the open sketchbook on the studio table, craning upward and turning gently toward the tall window, the table falling away below the frame edge. One single continuous crane-up, one direction, no cuts, no camera shake, no zoom snap. Slow, cinematic, controlled.'

leg 2 5 'The camera pushes slowly and steadily forward through the open window and out over the town, rising as it goes, the window frame passing out of view at the edges and the rooftops and fields opening up below. One single continuous forward push, one direction, no cuts, no shake. Slow, cinematic, controlled.'

leg 3 5 'The camera climbs slowly and steadily away from the town, the ground receding and shrinking below while the first cumulus clouds rise into the lower frame. One single continuous vertical climb, one direction, no cuts, no shake, no zoom snap. Slow, cinematic, controlled.'

leg 4 10 'The camera climbs slowly, steadily and continuously away from the cloud deck, the clouds flattening and shrinking below as the sky above deepens from blue to black and the curved limb of the Earth resolves across the lower frame. One single continuous climb to orbit, one direction throughout, no cuts, no shake, no zoom snap, no reversal. Very slow, cinematic, controlled.'

leg 5 5 'The camera descends slowly and steadily from orbit toward the ochre land below, the curve of the horizon flattening out and the ground detail growing. One single continuous descent, one direction throughout, no cuts, no shake, no reversal. Slow, cinematic, controlled.'

leg 6 5 'The camera travels slowly and steadily forward and westward above the ground, the dry ochre land passing beneath and giving way to shallow turquoise water ahead. One single continuous forward travel, one direction, no cuts, no shake, no reversal. Slow, cinematic, controlled.'

leg 7 5 'The camera travels slowly and steadily forward above the water and rises gently into the base of a cloud layer, the sea falling away behind and below. One single continuous forward-and-up travel, one direction, no cuts, no shake, no reversal. Slow, cinematic, controlled.'

leg 8 5 'The camera descends slowly and steadily through the last of the cloud toward the ground, the farmland and rooftops growing until the frame closes on a table seen from directly above. One single continuous descent, one direction throughout, no cuts, no shake, no zoom snap, no reversal. Slow, cinematic, controlled.'

wait
echo "--- jambes terminees ---"
ls -la out/leg*.mp4 2>/dev/null
