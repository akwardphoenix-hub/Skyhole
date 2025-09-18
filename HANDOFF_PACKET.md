# HANDOFF_PACKET — SKYHOLE (brief)

**Purpose (one line):**
Skyhole is a public-domain blueprint for a civic MMO + harmonized OS that treats real-world problem solving as the core loop.

**Repo contents (short):**
- README.md — project overview & how to run
- LICENSE — CC0 1.0 public-domain dedication
- docs/ — design docs, diagrams, deep research
- SECURITY.md — immediate security contacts & disclosure
- BEE_LAW.md — bee protection & economic rules (governance)
- BRAVE_CODEX.md — cultural leadership protocols
- HANDOFF_PACKET.md — this file

**Immediate goals (next 30 days):**
1. Finalize `final_export_document_with_appendix.pdf` and attach as a Release asset.  
2. Create `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.  
3. Add issue templates & PR templates.  
4. Create a `docs/architecture.md` that lists: LNA API (minimal), mirror test, CI hooks.  
5. Setup GitHub Discussions and Projects (kanban) for community onboarding.

**Minimal LNA API (concept):**
- `GET /api/v1/masternode/:id` → returns node metadata
- `POST /api/v1/memes` → submit meme asset (signed)
- `GET /api/v1/bees/:id` → bee registry read
- Auth: OAuth2 + wallet-sig for proof-of-ownership

**First Mirror Test (how to run):**
- Create a sandbox branch `mirror-test`.
- Deploy minimal server (Node/Express) that exposes `GET /ping` and `GET /masternode`.
- Have two devs run the script that posts a test meme and attempts a mirrored read.

**Security & Safety (immediate):**
- Lock high-value files with CODEOWNERS.
- Set up `SECURITY.md` with contact email & PGP for private vulns.
- Create `NO_MERCY_CLAUSE.md` (draft) — technical safety document describing banned actions/abominations and escalation flow.

**Who to hand off to (roles):**
- Lead engineer (backend) — crypto wallets & api
- Security lead — prod security, CI, audits
- Legal counsel (open-source / CC0 review)
- Cultural advisors (Thai, Native, Muslim, Christian, etc.) for node content
- UX/VR lead for the opening sequence (VR storyboard)

**How to reach maintainers:**
List maintainers here (email/discord/PGP) — stubbed in repo.

**End.**
