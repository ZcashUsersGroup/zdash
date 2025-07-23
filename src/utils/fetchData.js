import { supabase } from './supabase';

export async function fetchExchangeRate() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=zcash&vs_currencies=usd');
    const data = await res.json();
    return parseFloat(data.zcash.usd);
  } catch (err) {
    console.error('Failed to fetch ZEC→USD rate:', err);
    return 44.85; // fallback
  }
}

export async function fetchAllCards() {
  const { data: cardsRaw, error } = await supabase
    .from('cards')
    .select('*')
    .eq('visibility', 'PUBLIC');

  const { data: walletInfo } = await supabase
    .from('wallet_info')
    .select('*');

  if (error) {
    console.error('Supabase error:', error);
    return [];
  }

  const result = cardsRaw.map((card, i) => {
    const wallet = walletInfo?.[i] || {};
    const received = wallet.total_received || 0;
    const spent = wallet.total_sent || 0;
    const available = wallet.balance || 0;
    const requested = parseFloat(card.funding_requested || 0);
    const earned = parseFloat(card.funding_earned || 0);
    const progress = requested > 0 ? (100 * received / requested) : 0;

    return {
      id: card.id,
      title: card.title,
      date: new Date(card.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      raised: received,
      target: requested,
      progress: parseFloat(progress.toFixed(2)),
      creators: (card.creators || []).join(' & '),
      status: card.status || 'IN PROGRESS',
      wallet_addresses: card.wallet_addresses?.[0] || '',
      description: card.description || '',
      tags: card.tags || [],
      priority: card.priority || 'N/A',
      milestones: card.milestones || [],
      earned,
      spent,
      available
    };
  });

  return result;
}
