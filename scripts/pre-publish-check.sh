#!/usr/bin/env bash
set -euo pipefail

# Pre-publish check script
# Note: This script does NOT regenerate documentation or setup files
# to avoid recursive loops. Run 'npm run regen-docs' separately if needed.

echo "🔎 Node/npm:"
node -v || true
npm -v || true

echo "📦 Install deps"
npm ci

echo "🔤 Typecheck"
npm run typecheck || true

echo "🧹 Lint"
npm run lint || true

echo "🏗️ Build"
npm run build

echo "🧪 Install Playwright browsers"
npx playwright install chromium

echo "🧭 E2E"
npm run test:e2e

echo "✅ All checks attempted. Review failures above (if any)."
