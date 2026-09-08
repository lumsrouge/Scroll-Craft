#!/usr/bin/env bash
# Generate every still for the build. The style preamble is pasted VERBATIM at
# the top of every prompt; that is what makes twelve separate generations read
# as one shoot.
set -u
SK=/root/.claude/plugins/cache/nateherk/nateherk-design/0.3.0/skills/scroll-craft
cd "$(dirname "$0")"
mkdir -p out logs

P='Color film photography on pushed Kodak Portra, 35mm lens wide open, faint natural motion trail. Light: direct hard sunlight as the single source, warm bounce from the ground, crisp shadows used as graphic shapes. Grade: burnt ochre, vermilion, saffron, deep indigo, lime white; saturated warm colour, blacks that keep a blue cast. Texture: visible film grain, halation on the highlights, dust in the air, imperfect matter. Photographic realism. NOT 3D render, NOT clay, NOT illustration, NOT CGI, no digital glow, no plastic sheen, no text anywhere in the image.'

gen () { # name ar scene
  local name="$1" ar="$2" scene="$3"
  node "$SK/scripts/kie.mjs" still "$P

$scene" "out/$name.png" --ar "$ar" > "logs/$name.log" 2>&1 \
    && echo "ok   $name" || echo "FAIL $name"
}

# --- hero, four independently moving planes -------------------------------
gen 01-hero 16:9 'Seen from very high above the atmosphere, looking down and slightly forward at the curve of the Earth at sunrise. A saturated ochre desert coastline meets a deep indigo sea far below, thin saffron cloud banks catching the low sun, the bright thin rim of the atmosphere running along the horizon. Wide, calm, no cities, no lights, no aircraft. Large empty darker sky across the upper left of the frame and a clean empty band across the bottom third, both free of detail.' &

gen 02-cloud 16:9 'A single band of thin saffron and vermilion cloud, edge-lit by a low sun, isolated on a pure solid black background with nothing else in the frame. The cloud occupies a horizontal band across the lower middle of the frame and falls away to pure black at every edge. No horizon, no ground, no sky gradient, only the lit cloud on black.' &

gen 03-stroke 16:9 'One single wide brushstroke of thick wet vermilion and burnt ochre oil paint, loaded bristle marks and impasto ridges clearly visible, sweeping in one continuous horizontal arc across the frame, photographed against a pure solid black background. The wet paint is glossy and catches the hard light along its ridges. Nothing else in the frame, pure black at every edge, no canvas, no hand, no brush.' &

gen 04-splash 16:9 'Scattered droplets and a soft out-of-focus spray of wet saffron and vermilion pigment, very close to the lens so it is heavily defocused, gathered along the bottom edge of the frame, photographed against a pure solid black background. Pure black across the entire upper two thirds of the frame. No hand, no brush, no surface.' &
wait

# --- the body of the page --------------------------------------------------
gen 05-atelier 16:9 'Inside a sunlit painting studio, hard midday light cutting through a tall window and throwing sharp shadow shapes across a paint-spattered wooden floor. Jars of ink, stacked damp papers, a wooden palette crusted with warm colour, brushes standing in a tin. Canvases stacked facing the wall so only their bare stretcher backs show. Nobody in the frame. Large empty sunlit floor across the lower right of the frame.' &

gen 06-matieres 3:4 'Extreme close-up of a work table: a pool of black ink bleeding into damp paper, a broken disc of pale wax, a torn strip of pasted paper lifting at one corner, and a pressed leaf imprint in warm ochre pigment, all overlapping on a lime-white ground. Hard raking sunlight across the surface. Empty ground across the top of the frame.' &

gen 07-geste 16:9 'Two people mid-movement in a sunlit studio, arms swept wide, caught in an exposure long enough that the arms trail. Warm ochre and vermilion pigment thrown into the air around them, dust and colour hanging in the hard sunbeam. Shot from low, unposed, nobody looking at camera, faces not the subject. Empty sunlit wall across the left of the frame.' &

gen 08-peak 16:9 'Seen from very high above the atmosphere at golden hour, looking down at the curve of the Earth: a vast ochre continent crossed by dry riverbeds meeting a deep indigo ocean, thin cloud shadow raking across the land, the bright thin rim of the atmosphere along the top edge. Wide, calm, no cities, no lights, no aircraft. Large empty space across the whole upper third of the frame.' &
wait

# --- the four ateliers -----------------------------------------------------
gen 10-enfants 3:4 "A child's hands, about nine years old, pressing a paint-loaded sponge onto thick damp paper on a low table in hard sunlight. Warm ochre and vermilion prints already cover the sheet. Only hands and forearms in the frame, sleeves rolled, paint to the wrist. Empty sunlit table across the bottom of the frame." &

gen 11-ados 3:4 'A teenager seen from behind and slightly above, sitting at a table in hard window light, working ink into wet paper with a wide flat brush. Jars of indigo ink and torn paper scraps beside them. Face not visible. Empty sunlit wall across the top of the frame.' &

gen 12-adultes 3:4 'Three adults standing at easels in a sunlit studio, seen from behind so only their backs, shoulders and the bare stretcher backs of their boards are visible. Hard sunlight, long shadows across a wooden floor. Unposed, caught mid-gesture. Empty floor across the bottom of the frame.' &

gen 13-particulier 3:4 'Two pairs of adult hands over a single sheet of damp paper on a table in hard sunlight, one hand demonstrating a stroke with a loaded brush, the other holding the paper flat. Only hands, forearms and the table in the frame. Empty sunlit table across the right of the frame.' &
wait

ls -la out/
