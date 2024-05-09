import { useQuery } from 'react-query';

import bal from '../assets/bal.png';
import aura_logo from '../assets/aura_logo.png';
import arb from '../assets/arb.png';
import ramses from '../assets/ramses.webp';

const poolIds = [
  '9ca7c571-ac74-4c73-b55d-b94d442787d5',
  '985696e2-38d9-4006-9c2f-2b78f7ef552d',
  '1266ea36-20bc-4d3a-aa16-40a77e7c2d1e',
  '14bbef2a-cccc-4203-8fe2-8e4eb0863316',
  '82f733a7-9bb2-4c5c-a2d6-2e568ac811a6',
];

const poolIdsToLinks: Record<string, string> = {
  '9ca7c571-ac74-4c73-b55d-b94d442787d5':
    'https://app.balancer.fi/#/arbitrum/pool/0x2e8ea681fd59c9dc5f32b29de31f782724ef4dcb0001000000000000000004bc',
  '985696e2-38d9-4006-9c2f-2b78f7ef552d': 'https://app.aura.finance/#/42161/pool/38',
  '1266ea36-20bc-4d3a-aa16-40a77e7c2d1e':
    'https://app.balancer.fi/#/base/pool/0xb328b50f1f7d97ee8ea391ab5096dd7657555f49000100000000000000000048',
  '14bbef2a-cccc-4203-8fe2-8e4eb0863316': 'https://app.aura.finance/#/42161/pool/37',
  '82f733a7-9bb2-4c5c-a2d6-2e568ac811a6': 'https://app.ramses.exchange/liquidity/v2/0x7e0b1d20367fe055f2884dd6ec6cca1e59f7c7eb',
};

export const getTokenImage = (token: string) => {
  token = token.toLowerCase();
  const tokenImages: Record<string, string> = {
    '0xba100000625a3754423978a60c9317c58a424e3d': bal,
    '0x912ce59144191c1204e64559fe8253a0e49e6548': arb,
    '0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418': ramses,
    '0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921': bal,
    '0x1509706a6c66ca549ff0cb464de88231ddbe213b': aura_logo,
  };
  const platformImages: Record<string, string> = {
    'balancer-v2': bal,
    aura: aura_logo,
    arbitrum: arb,
    ramses: ramses,
  };
  if (token in tokenImages) {
    return tokenImages[token];
  } else {
    if (token in platformImages) {
      return platformImages[token];
    } else {
      return token;
    }
  }
};

export const useAuraPrice = () => {
  return useQuery(['aura'], async () => {
    const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=aura-finance&vs_currencies=usd');
    const result = await resp.json();
    const price = result['aura-finance'].usd;
    return price as string;
  });
};

export const useCompPrice = () => {
  return useQuery(['comp'], async () => {
    const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=compound-governance-token&vs_currencies=usd');
    const result = await resp.json();
    const price = result['compound-governance-token'].usd;
    return price as string;
  });
};

export const useYields = () => {
  return useQuery(['yields'], async () => {
    const resp = await fetch('https://yields.llama.fi/pools');
    const result = await resp.json();
    let filteredPools = result.data.filter((p: any) => {
      return poolIds.includes(p.pool);
    });

    return filteredPools.map((p: any) => {
      return {
        ...p,
        link: poolIdsToLinks[p.pool],
      };
    });
  });
};

export const usePrice = () => {
  return useQuery(['prices'], async () => {
    const resp = await fetch('https://api.studio.thegraph.com/query/24660/balancer-base-v2/version/latest', {
      headers: {
        accept: 'application/json, multipart/mixed',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: '{"query":"{\\n  pool(id: \\"0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047\\") {\\n    id\\n    tokens {\\n      name\\n      token {\\n        latestUSDPrice\\n      }\\n    }\\n  }\\n}","variables":null,"extensions":{"headers":null}}',
      method: 'POST',
    });
    const result = await resp.json();
    const tokens = result.data.pool.tokens;
    const goldPrice = tokens.find((t: any) => t.name === 'GoldenBoys').token.latestUSDPrice;
    return goldPrice as string;
  });
};

export const useStakingApr = () => {
  return useQuery(['stakingApr'], async () => {
    const resp = await fetch('https://api.balancer.fi/graphql', {
      headers: {
        'content-type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: '{"query":"{\\n  pools(chainId: 8453, first: 100, where:{id:{eq:\\"0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047\\"}}) {\\n    pools{\\n      id\\n      address\\n      apr {\\n        swapFees\\n        protocolApr\\n        min\\n        max\\n      }\\n    }\\n  }\\n}","variables":null,"operationName":null}',
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    });
    const result = await resp.json();
    const apr = result.data.pools.pools[0].apr;
    const totalApr = apr.min / 100;
    return totalApr;
  });
};

export const useGoldCompApr = () => {
  return useQuery(['goldCompApr'], async () => {
    const resp = await fetch('https://api.balancer.fi/pools/1/0x56bc9d9987edec2fc6e1990e27af4a0987b53096000200000000000000000686');
    const result = await resp.json();
    return result.apr.min / 100;
  });
};

export const useHumpyQuery = (message: string) => {
  return useQuery(
    ['humpy'],
    async () => {
      const resp = await fetch('https://humpy-webhook.replit.app/pray', {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
        method: 'POST',
      });
      const result = await resp.json();
      return result.response;
    },
    {
      enabled: false,
    }
  );
};
