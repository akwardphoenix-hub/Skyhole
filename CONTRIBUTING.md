# Contributing to Skyhole

🎮 **Skyhole** is a public-domain (CC0) blueprint for a fix-it-first civic MMO +
harmonized OS. Contributions of code, research, art, gameplay design, safety
models, localization, and documentation are all welcome.

> **Important:** By submitting any contribution, you agree to release it under
> **CC0 1.0 Universal** (public domain). Only contribute work you have the right
> to license this way.

---

## Quick start

1. **Fork** the repository and create a feature branch:
   - `feat/<short-name>`, `fix/<short-name>`, or `docs/<short-name>`
2. **Open an Issue** first for new features or design changes. Use the
   provided templates (Proposal, Bug, Safety Review).
3. **Design for safety** (“fix-it-first”): include threat model & mitigations.
4. **Write clearly**: small PRs, clear commit messages, screenshots or short
   clips for UX changes.
5. **Submit PR** referencing the Issue. Fill out the PR checklist.

---

## What we accept

- **Specs & research:** formal models, proofs, citations, datasets (no PII).
- **Game/OS modules:** minimal, testable, well-scoped components.
- **Art & UX:** icons, mockups, flows, accessibility improvements.
- **Localization:** translations and culturally-aware adaptations.
- **Safety layers:** red-team test plans, kill-switch logic, rate limiters,
  consent-first sensing, “limbo/pause” mechanics, transparency hooks.
- **Docs & tutorials:** “show, don’t tell” examples and starter guides.

## What we won’t accept

- Content that violates the Code of Conduct.
- Proprietary or non-CC0 assets/code.
- Features that intentionally bypass safety controls.
- Datasets with personal data or covert tracking.

---

## Branches & PRs

- Target `main`. Keep PRs small and atomic.
- Reference the Issue (`Fixes #123`) and fill the PR template:
  - Motivation & user story
  - Safety considerations (threats, mitigations, abuse cases)
  - Tests / demo steps
  - Rollback plan

**Commit style (suggested):**
