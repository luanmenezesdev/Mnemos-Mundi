# Mnemos Mundi Landing Page Redesign

Date: 2026-05-31
Status: Approved in conversation, awaiting final spec review

## Objective

Redesign the Mnemos Mundi landing page from scratch to persuade a hackathon jury in less than three minutes of scroll. The page should present Mnemos Mundi as a new educational infrastructure for immersive learning, not as a generic EdTech product, a crypto startup, or a platform aimed at a single institution.

The primary call to action is opening the prototype.

## Audience

Primary audience:
- hackathon judges with a stronger business and impact lens
- potential institutional adopters such as schools, cursinhos, and universities

Secondary audience:
- technically oriented judges who need enough implementation credibility to trust the concept

## Positioning

Mnemos Mundi should be framed as:

"A platform that enables institutions to create immersive educational worlds where knowledge becomes explorable, progression becomes visible, and achievements become persistent."

This is not a landing page for a single end-user persona. It is a category-defining narrative for institutions that want to use metaverse-based educational experiences.

## Core Narrative

The page follows this persuasion sequence:

1. Emotion: this feels different from normal educational platforms
2. Problem: the current model of education is forgettable, passive, and temporary
3. Solution: Mnemos Mundi introduces a new format for immersive education
4. Demonstration: the product is navigable and already shows the experience in practice
5. Credibility: the technology reinforces trust and permanence
6. Institutional value: schools, cursinhos, and universities all have a reason to adopt it
7. Vision: this is a broader shift in how education can be experienced
8. Action: open the prototype

## Design Principles

### Brand feeling

The experience should feel like:
- the future of knowledge exploration
- an interactive museum
- optimistic sci-fi
- premium game-like immersion
- academic atmosphere with human warmth

The experience should not feel like:
- corporate EAD
- SaaS dashboard marketing
- blockchain startup branding
- cyberpunk or hacker aesthetics
- NFT hype culture

### Visual direction

The page should use:
- clean futuristic composition
- cinematic minimalism
- soft atmospheric lighting
- subtle glassmorphism
- floating panels and orbital motifs
- generous whitespace

The page must avoid:
- aggressive neon
- harsh contrast
- overly dense UI
- red or black cyberpunk palettes
- brutalist composition

### Color direction

Use the established brand palette:
- Deep Space Blue `#163B73`
- Knowledge Cyan `#5BC0EB`
- Solar Gold `#F4C95D`
- Growth Mint `#7BD389`
- Wisdom Purple `#9D7DFF`
- Cloud White `#F8FAFC`
- Soft Gray `#D9E2EC`
- Deep Slate `#1F2937`

Gradients should stay soft and luminous, especially:
- `#163B73 -> #5BC0EB`
- `#5BC0EB -> #9D7DFF`

### Typography

Preferred heading fonts:
- Space Grotesk
- Sora

Body font:
- Inter

The typography should feel clear, modern, sophisticated, and easy to scan quickly during a pitch.

### Motion

Animation should be:
- smooth
- slow
- cinematic
- restrained

Avoid:
- exaggerated bounce
- noisy microinteractions
- particle overload

## Content Strategy

### Tone of voice

The copy should be:
- inspiring
- exploratory
- intelligent
- warm
- optimistic

The copy should not be:
- corporate
- overloaded with jargon
- crypto-buzzword heavy
- abstract without payoff

### Messaging constraint

Every section has one job. The page should not try to explain everything at once. Copy must stay concise and memorable.

## Functional Constraints

- Do not add background videos or background images as part of this implementation
- Leave visual space and structural hooks ready for the user to add custom media later
- The page should be built as a new landing page, not a modification that depends on the current home layout or copy
- The new page should preserve responsiveness on desktop and mobile
- The CTA should prioritize opening the existing prototype experience

## Information Architecture

## Section 1: Hero

Purpose:
Create immediate curiosity and establish that Mnemos Mundi is a new kind of educational experience.

Content:
- discreet brand presence at the top
- one strong headline
- one short supporting sentence
- primary CTA: `Abrir protótipo`
- optional secondary CTA: `Ver como funciona`

Recommended message direction:
- "Transformamos conhecimento em mundos exploráveis."
- supporting line that positions the product as infrastructure for institutions creating immersive educational experiences

Behavior:
- full-screen first impression
- minimal navigation
- no heavy explanatory text
- clear reserved area for future background media

## Section 2: Problem

Purpose:
Make the jury feel that the current educational model is structurally insufficient.

Content direction:
- education today is often passive, forgettable, and temporary
- the issue is not lack of access to content, but lack of meaning, immersion, and continuity

Suggested message structure:
- one central statement about the failure of conventional educational experiences
- three or four short supporting points such as:
  - low engagement
  - low experiential depth
  - disconnected or temporary learning records
  - institutions lacking native digital formats for immersive learning

This section should frame the problem as systemic, not personal.

## Section 3: Revelation

Purpose:
Define the new category clearly and memorably.

Core framing:
"Mnemos Mundi is a platform for institutions to create immersive educational worlds where learning leaves traces, unlocks progression, and generates verifiable achievements."

Supporting concept:
- `Aprender`
- `Explorar`
- `Criar`
- `Conquistar`

These verbs should express a multi-sided ecosystem:
- students explore
- institutions design journeys
- knowledge gains form
- progression becomes visible

## Section 4: Experience

Purpose:
Show how the product works in practice using the existing navigable prototype.

Narrative model:
- an institution creates or structures a world of learning
- a student enters a themed environment
- the student interacts with quizzes, objects, or challenges
- progression unlocks rewards and recognition
- achievements and history persist beyond the session

The copy should include institutional examples:
- a school can transform Astronomy into an explorable journey
- a cursinho can build immersive revision pathways
- a university can represent competencies and academic progression in persistent worlds

The presentation should feel like a premium progression flow rather than a generic features grid.

## Section 5: Web3 in Practice

Purpose:
Prove that the technical layer adds trust and permanence instead of trendiness.

Structure:
- four concise pillars in a grid

Pillars:
- `Smart Contracts`: automate issuance and registration of achievements
- `Soulbound Badges`: non-transferable recognition tied to the learner journey
- `Knowledge Crystals`: progression and reward mechanics inside the ecosystem
- `IPFS + Polygon`: persistence, portability, and verifiability

Messaging rule:
Always explain the user or institutional benefit, not just the technology.

## Section 6: Value for Institutions

Purpose:
Clarify why multiple educational institution types would adopt Mnemos Mundi.

Structure:
- three value blocks:
  - schools
  - cursinhos
  - universities
- one short comparison between traditional education delivery and the Mnemos Mundi model

Institutional value themes:
- stronger engagement and belonging
- experiential revision and retention
- clearer competency progression
- persistent and portable academic identity

Comparison direction:
- static content vs explorable worlds
- temporary presence vs persistent history
- passive consumption vs active progression
- isolated certificate vs verifiable achievement

This section is critical for moving the page away from a single-client framing.

## Section 7: Impact

Purpose:
Expand from product value to educational transformation.

Core message:
Mnemos Mundi is not only a platform but a new language for education.

Themes:
- democratizing access to high-quality immersive educational experiences
- making learning feel like discovery
- allowing knowledge to belong to the learner beyond a single class or platform

If impact metrics are included, they should be plausible and restrained.

## Section 8: Stack and Final CTA

Purpose:
Close with confidence and make the next step obvious.

Stack presentation:
- short and compact
- enough for technical credibility, but secondary to the vision

Technologies to mention:
- React
- Unity
- Solidity
- Polygon
- IPFS

Final message direction:
- "Educação não precisa ser apenas acessada. Ela pode ser habitada."

CTA:
- primary: `Abrir protótipo`
- optional secondary: a softer vision-oriented action if needed

This section should visually echo the hero while keeping room for future custom background media.

## Layout and UX Notes

- The new landing page should be built as a fresh composition, not a reskin of the current home sections
- Section transitions should feel deliberate and cinematic
- Alternate dense and sparse sections to control pacing
- The page should remain highly readable on mobile
- Cards and panels should feel premium and light, not heavy or dashboard-like
- Visual rhythm should prioritize scroll storytelling over feature listing

## Error and Risk Considerations

- The design can fail if it becomes too conceptual and hides the institutional value
- The design can fail if it becomes too institutional and loses the wonder of the brand
- The Web3 layer must remain simple and benefit-oriented to avoid crypto-startup framing
- The prototype CTA must be clear and accessible early and late in the page

## Testing Strategy

Implementation should be validated against:
- narrative clarity in a fast scroll
- mobile readability
- CTA visibility and clarity
- visual distinction from the current landing page
- alignment with the Mnemos Mundi brand guidelines
- whether the page clearly supports schools, cursinhos, and universities instead of a single client model

## Out of Scope

- adding user-provided background videos or images
- redesigning the prototype/player experience itself
- expanding into full sales site navigation, blog, or documentation structure
- building institution-specific subpages at this stage
