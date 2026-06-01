# Mnemos Mundi Landing Fullscreen Scroll Refinement

Date: 2026-05-31
Status: Approved in conversation, awaiting final spec review

## Objective

Refine the new Mnemos Mundi landing page so that each section behaves like a full-screen narrative chapter across desktop, tablet, and mobile. The goal is to replace the current "stack of sections with generous padding" feeling with a cinematic sequence of viewport-filling scenes.

The page should keep scroll freedom. It should not become a rigid snap-scrolling experience.

## Why This Refinement Exists

The current landing solves the narrative and positioning problem, but it does not yet deliver the intended spatial rhythm. Sections visually read as content blocks rather than full-screen chapters.

The issue is structural:
- sections use vertical padding as their main spacing mechanism
- content is not consistently distributed across viewport height
- denser sections grow like normal document blocks instead of behaving like framed scenes

This refinement addresses layout behavior, section composition, and scroll motion.

## Core Decision

Use **cinematic free scrolling** instead of strict section snap.

Reasoning:
- strict snap is too rigid for a content-dense landing
- snap is especially risky on mobile, where it can make sections feel cramped or awkward
- free scroll with strong full-screen composition better matches the Mnemos Mundi brand: exploratory, premium, atmospheric

## Target Experience

The user should feel like they are moving through a sequence of immersive vertical scenes.

Each scene should:
- occupy at least one viewport height
- have a clear visual center of gravity
- use space intentionally rather than relying on large empty padding
- transition with subtle cinematic motion as it enters the viewport

The scroll should feel:
- fluid
- premium
- deliberate
- atmospheric

It should not feel:
- like a normal marketing page with stacked sections
- like a hard-snapping slide deck
- like a noisy animation demo

## Global Layout Strategy

### Section sizing

Every landing section should use:
- `min-height: 100svh`

This applies to all screen sizes, including mobile.

### Section internals

Each section should gain a dedicated internal stage wrapper that is responsible for vertical composition.

Recommended structure:
- outer section: section shell and relative positioning
- inner stage wrapper: `min-height: 100svh`
- stage content: vertically distributed using flex or grid

The stage wrapper should manage:
- top region
- central region
- bottom region

Not every section must visibly use all three zones, but every section should be designed as if that structure exists.

### Spacing rule

Vertical padding becomes a secondary adjustment, not the primary source of perceived height.

This means:
- less dependence on `padding-block` to create "space"
- more deliberate positioning of content within a viewport-sized frame

### Density rule

Sections must be balanced by density:
- impact sections use more empty space
- explanatory sections use moderate density
- high-information sections use tighter grids and more compact cards

## Scroll Motion Strategy

### Motion model

Use cinematic free scroll with soft reveal animation.

Per-section entrance:
- fade in
- slight translate on Y axis

Per-section internal content:
- short stagger on key blocks or cards

### Motion character

Motion should be:
- slow
- smooth
- understated
- cinematic

Avoid:
- bounce
- exaggerated parallax
- aggressive transforms
- animation-heavy novelty

### Accessibility

Support `prefers-reduced-motion` fully:
- section transitions disabled
- stagger disabled
- no forced smoothness beyond normal browser behavior

## Section-by-Section Design Changes

## Section 1: Hero

### Goal

Make the hero function as a complete opening frame, not just a top block.

### Spatial structure

- top: brand signature
- center: main headline and support line
- bottom: CTA row and scroll continuation cue
- side region: reserved visual zone for future user-supplied background media

### Required change

The hero content must feel truly centered inside the viewport. It should not drift upward because of stacked gaps or inherited section padding.

### Design note

This section is already closest to the desired behavior and should serve as the reference pattern for the rest of the landing.

## Section 2: Problem

### Goal

Turn the problem section into a full-screen dramatic frame instead of an editorial text block.

### Spatial structure

- top: eyebrow
- center: headline and primary support statement
- side or lower region: compact problem-point block
- bottom: closing reflection or emotional line

### Required change

The problem cards must stay compact, especially on mobile. They should read as one controlled cluster, not as a long list that stretches the section downward.

## Section 3: Revelation

### Goal

Make revelation feel like a turning point in the narrative.

### Spatial structure

- top: eyebrow
- center: category-defining statement
- bottom: four verbs grid

### Required change

This section needs more breathing room than the problem section. The main statement should dominate the visual frame, while the verbs act as structured reinforcement rather than equal competitors for attention.

## Section 4: Experience

### Goal

Keep the experience section as a full-screen product demonstration chapter without letting it become too tall.

### Spatial structure

- top: title and setup
- center: the core journey flow
- side or lower region: institutional examples

### Required change

The step sequence must feel like a compact journey path. On mobile especially, the five steps cannot behave like five oversized independent cards. They must remain readable while still fitting the chapter model.

## Section 5: Web3 in Practice

### Goal

Present technical credibility without turning the section into a technical document.

### Spatial structure

- top: eyebrow and title
- center: compact 2x2 or responsive pillar grid
- bottom: optional synthesis line if needed

### Required change

Cards should stay uniform, compact, and visually balanced so the section comfortably occupies one viewport chapter.

## Section 6: Value for Institutions

### Goal

Fit the densest section into the chapter model without losing clarity.

### Spatial structure

- top: headline
- center: three institution cards
- bottom: compact comparison table

### Required change

This section requires the strictest density control:
- institution cards must be visually equivalent
- table must be compact
- spacing must be tighter than impact sections

This is the most information-dense section and must still feel composed rather than crowded.

## Section 7: Impact

### Goal

Act as a visual and emotional breathing space before the close.

### Spatial structure

- center: dominant impact statement
- lower region: three impact pillars

### Required change

This section should be more open and less card-heavy than the institutional or Web3 sections. It exists to widen the horizon, not to explain mechanics.

## Section 8: Final CTA

### Goal

Echo the hero and close with a strong sense of destination.

### Spatial structure

- center: closing statement
- below center: support line
- lower region: CTA row
- side or supporting region: stack list

### Required change

The stack should remain supportive, not dominant. The last memory should be the statement and the prototype CTA, not the technology grid.

## Implementation Guidance

### Layer 1: Global chapter infrastructure

Add reusable layout primitives for:
- full-screen sections
- internal stage wrappers
- scroll reveal state classes
- reduced-motion fallbacks

### Layer 2: Section composition refactor

Refactor each landing section so its internal content distribution matches the chapter model.

This includes:
- changing vertical alignment
- tightening dense grids
- rebalancing gaps
- ensuring the visual center is obvious at first glance

### Layer 3: Final responsive pass

Validate each section at mobile sizes to confirm:
- it still feels like one chapter
- content does not become cramped
- no section depends on internal scrolling
- no section visually spills into "document mode"

## Non-Goals

This refinement does not include:
- adding user media assets
- changing the core landing narrative
- converting the page to hard scroll snap
- adding complex parallax systems
- redesigning the `/mnemos-mundi` prototype route

## Risks

### Risk 1: Over-constraining mobile

If the full-screen requirement is enforced too rigidly, dense sections may feel cramped.

Mitigation:
- use `min-height`, not fixed height
- compact dense sections instead of forcing overflow

### Risk 2: Motion overpowering content

If transitions are too visible, the page will feel performative rather than premium.

Mitigation:
- use subtle fade and translation only
- keep durations moderate and easing soft

### Risk 3: Visual inconsistency between sections

If some sections behave like chapters and others still behave like content blocks, the experience will feel broken.

Mitigation:
- apply the same stage-based layout model across all sections

## Success Criteria

The refinement is successful if:
- each section clearly reads as a full-screen chapter
- the page still scrolls naturally without snap
- mobile sections feel composed rather than cramped
- denser sections remain readable without turning into long vertical blocks
- section transitions feel cinematic and subtle
- the experience better matches the Mnemos Mundi brand direction
