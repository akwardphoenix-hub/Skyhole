import { DATA_BASE } from '../lib/config';
import { safeFetch } from '../lib/net-fallback';

export type Proposal = {
  id: string;
  title: string;
  description?: string;
  createdAt: string; // ISO
  votingEndsAt?: string; // ISO
};

export async function getProposals(): Promise<Proposal[]> {
  // Always local fixtures to avoid network flake
  const res = await safeFetch(`${DATA_BASE}/council-proposals.json`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load proposals');
  return res.json();
}

export async function saveVoteLocally(entry: { proposalId: string; vote: string; actor: string }) {
  // In dev: mirror to localStorage to keep tests hermetic
  const key = 'council-votes';
  const cur = JSON.parse(localStorage.getItem(key) || '[]');
  cur.push(entry);
  localStorage.setItem(key, JSON.stringify(cur));
}
