# Polymath API (Minimal Draft)

## Auth
- Bearer JWT (short-lived); device attestation optional.
- Scopes: `play`, `council`, `broadcast`, `moderate`, `admin`.

## Endpoints

### POST /intuition/ingest
Ingests multi-sensor hints (on-device summarized).
- Body: { session_id, ticks:[{t, modality:"vision|audio|env|haptics", signal:{...}}] }
- Returns: { hint_id, confidence:0..1, decay_ms }

### GET /intuition/hint/{hint_id}
- Returns live-decayed hint for client HUD.

### POST /harmonics/sync
- Body: { geo_hash, local_phase, device_clock }
- Returns: { region_phase, drift_ms, suggested_tune }

### POST /pause/suggest
- Body: { session_id, reason:"Doorbell|Pet|Safety|Prayer|Custom", evidence:{class,confidence}}
- Returns: { accepted:true|false, alt:{RematchAI|ReschedVote} }

### POST /cosmetics/mint
- Body: { session_id, elements:["fire","metal",...], phrases:[...], provenance:{...} }
- Returns: { nft_id|badge_id, link }

### POST /civic/donate
- Body: { wallet, chain, amount, tag:"LightRealmReturn|Council|BeeLaw" }
- Returns: { txid, receipt_url }

### POST /users/age-gate
- Body: { birth_year, country, evidence_token? }
- Returns: { tier:"u13|u16|u18|adult", features_enabled:[...] }

### DELETE /users/data
GDPR/CCPA compliant delete-by-scope.
- Body: { scopes:["telemetry","voice","video","purchase","all"] }
- Returns: { job_id, eta_hint }

### GET /users/data/status?job_id=...
- Returns: { state:"queued|running|done", redactions:[...] }

### POST /safety/report
- Body: { session_id, target_id, category, evidence_refs:[...]}
- Returns: { case_id, SLA }

## Events (WebSocket)
- `harmonics:update`, `intuition:ping`, `civic:donation:receipt`, `safety:case:update`

## Notes
- All models log feature-flags with versioning for reproducibility.
- “No Mercy” path can lock subsystems to safe defaults on consensus breach.
