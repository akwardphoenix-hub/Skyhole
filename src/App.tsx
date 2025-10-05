import { useEffect, useState } from 'react';
import { ProposalCard } from './components/ProposalCard';
import { getProposals, saveVoteLocally, Proposal } from './services/councilData';
import { writeAuditLocal } from './lib/audit';

function App() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProposals()
      .then((data) => {
        setProposals(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleVote = (proposalId: string, vote: string) => {
    saveVoteLocally({ proposalId, vote, actor: 'user' });
    writeAuditLocal({
      actor: 'user',
      action: 'vote',
      refId: proposalId,
      meta: { vote },
    });
    alert(`Vote recorded: ${vote} for ${proposalId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center">
        <p>Loading proposals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Masternode Council</h1>
        <p className="text-zinc-400">
          Vote on proposals using Harmonic Math principles
        </p>
      </header>
      <main className="max-w-4xl mx-auto space-y-4">
        {proposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            id={proposal.id}
            title={proposal.title}
            createdAtISO={proposal.createdAt}
            tally={{ approve: 0, reject: 0, abstain: 0 }}
            needsVote={true}
            onVote={(vote) => handleVote(proposal.id, vote)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
