# Mnemos Mundi Player Shell Design

Date: 2026-06-03
Route: `web/app/(metaverso)/mnemos-mundi`
Status: Approved for planning

## Objective

Bring the Mnemos Mundi prototype page into the same visual language as the landing page without changing the Unity experience itself.

The shell around the WebGL build should stop feeling like a dashboard or SaaS panel and start feeling like part of the Mnemos Mundi world. The page must communicate atmosphere, scale, discovery, and premium editorial presentation before the user even interacts with the 3D scene.

## Problem Summary

The current player shell is visually framed as an application:

- a strong header bar
- a bordered glass card around the Unity canvas
- structured separators and utility icons
- excess empty space around the stage
- status language that reads as system UI

This creates a product mismatch:

- the landing page feels atmospheric, cinematic, editorial, and spacious
- the prototype page feels like a control panel that launches an experience

The design goal is to make the page itself feel like the portal.

## Approved Direction

The approved direction is `Portal HUD` with a `viewport-first` stage.

This means:

- the Unity world becomes the dominant visual element
- the shell becomes nearly invisible
- the top layer becomes a lightweight HUD instead of an app header
- the canvas area grows to occupy most of the useful viewport height
- the page background and depth effects reuse the landing page atmosphere

## Experience Principles

The redesigned shell should follow these principles:

1. World first
   The Unity scene is the protagonist. The page must never visually overpower it.

2. Minimal HUD
   Navigation and context remain available, but only in the lightest form required.

3. Atmospheric depth
   Gradients, glow, blur, and negative space should do more work than borders, panels, and separators.

4. Editorial hierarchy
   Typography should feel intentional and calm, with short narrative cues instead of dashboard labels.

5. Seamless continuity with the landing page
   The player route should look like the next chapter of the same product, not a separate tool.

## Visual Architecture

The page structure changes from:

`header + framed card + Unity`

to:

`immersive stage + overlaid HUD`

### Main composition

- The page remains full-height at `100svh`.
- The center of gravity moves to the Unity stage.
- The stage starts close to the top useful area instead of being pushed down by a heavy header.
- The shell uses the landing page background logic: deep blue base with cyan and violet radial light.

### Stage treatment

- The Unity canvas lives inside a large stage container.
- The container may keep a very soft boundary, but it must no longer read as a card.
- The visible frame should come mostly from light falloff, glow, and subtle contrast separation.
- The current strong glass panel treatment should be reduced significantly.

### HUD treatment

- The top UI becomes an overlaid HUD layer rather than a boxed application bar.
- The HUD floats inside the page with light spacing and no hard visual separators.
- The HUD should not compete with the world for attention.

## Components

### 1. Brand cluster

Position: top-left

Content:

- reduced logo treatment
- `MNEMOS MUNDI`
- short contextual subtitle such as `Portal Central` or `Mundo Inicial`

Rules:

- logo should be smaller than today
- glow should be reduced
- opacity can be softened
- typography should remain premium and legible, not decorative noise

### 2. Narrative cue

Position: near the stage, visually subordinate to the brand

Purpose:

- replace system-style labels like `Sessão ativa`
- introduce exploration context

Examples:

- `Escolha uma disciplina para começar`
- `Matemática • Astronomia • História`

Rules:

- keep it short
- keep it editorial, not operational
- it should feel like a discreet invitation, not a status readout

### 3. Single utility action

Position: top-right

Content:

- fullscreen action only

Rules:

- remove extra utility clutter such as settings and avatar-like status UI
- the button should read as a subtle control, not as a product toolbar action

### 4. Loading overlay

The loading experience remains important, but it should align with the new stage-first shell.

Rules:

- keep the current visual identity direction if possible
- preserve error and retry behavior
- use a cinematic veil over the stage during loading
- remove any feeling of modal app interruption

## Layout and Sizing

### Stage sizing

The stage should follow a viewport-first strategy.

Requirements:

- occupy nearly all useful vertical space below the HUD
- become much wider than the current implementation
- stop being primarily constrained by the previous card feel

Preferred sizing direction:

- width close to `min(1600px, 92vw)` or comparable
- height driven by viewport availability
- minimum usable stage height around `calc(100svh - 120px)` adjusted per breakpoint

Important note:

- `aspect-video` may still be used as a secondary guardrail, but it must not dominate the composition at the cost of stage presence

### Spacing

Requirements:

- reduce vertical gap between HUD and stage
- keep the layout breathing, but eliminate the current dead zone between header and frame
- use compact top spacing, roughly in the `16px` to `24px` range depending on breakpoint

## Visual Styling

### Background

Reuse the landing page atmosphere directly:

- deep blue base
- cyan radial light
- violet radial light

The player page should feel visibly connected to the landing route.

### Portal glows

Add environmental light around the stage:

- upper glow for portal emergence
- lower glow for depth and immersion

Suggested direction:

- cyan-biased radial light near the top
- violet-biased radial light near the bottom

### Borders and shadows

Rules:

- border must become nearly invisible
- shadow should shift from framed-card shadow to atmospheric bloom
- avoid obvious boxed panel language

## Copy Direction

The shell copy should avoid software status language unless strictly necessary for loading/error handling.

Preferred tone:

- exploratory
- calm
- spatial
- premium

Avoid:

- `Sessão ativa`
- administrative or operational wording
- crowded utility labels

## Implementation Scope

### In scope

- rework the player shell layout and styling
- simplify the header into a HUD
- enlarge the Unity stage
- integrate landing-style atmospheric gradients
- refine the loading-state presentation inside the new shell

### Out of scope

- changing the Unity build itself
- redesigning in-world UI inside Unity
- adding new gameplay or navigation systems
- changing route-level product behavior

## Files Expected To Change

Primary:

- `web/app/(metaverso)/mnemos-mundi/components/MnemosMundiPlayer.tsx`
- `web/app/(metaverso)/mnemos-mundi/components/LoadingScreen.tsx`

Possible:

- `web/app/(metaverso)/mnemos-mundi/components/PortalLayout.tsx`
- `web/app/globals.css`

## Error Handling and States

The redesign must preserve current behavior:

- loading progress still updates correctly
- retry still works on failure
- fullscreen action remains available when ready
- failure messaging stays clear enough to unblock the user

If cinematic treatment conflicts with legibility during load or error states, legibility wins.

## Testing Expectations

The implementation should be validated against:

- desktop viewport behavior
- mobile and small-height viewport behavior
- loading state visibility
- error state visibility and retry action
- fullscreen action still triggering correctly
- absence of layout clipping or unusable canvas sizing

## Success Criteria

The redesign is successful when:

- the page no longer reads as a dashboard or SaaS shell
- the Unity world clearly becomes the visual protagonist
- the shell feels like a continuation of the landing page
- the HUD feels minimal and premium
- the user perceives the route as part of the Mnemos Mundi world rather than a framed player page
