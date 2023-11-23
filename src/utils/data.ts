import { useQuery } from "react-query";

import bal from "../assets/bal.png";
import aura_logo from "../assets/aura_logo.png";
import arb from "../assets/arb.png";
import ramses from "../assets/ramses.webp";

export const getTokenImage = (token: string) => {
  const tokenImages: Record<string, string> = {
    BAL: bal,
    ARB: arb,
    RAM: ramses,
    AURA: aura_logo,
  };
  const platformImages: Record<string, string> = {
    Balancer: bal,
    Aura: aura_logo,
    Arbitrum: arb,
    Ramses: ramses,
  };
  if (token in tokenImages) {
    return tokenImages[token];
  } else {
    return platformImages[token];
  }
};

export const useAuraPrice = () => {
  return useQuery(["aura"], async () => {
    const resp = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=aura-finance&vs_currencies=usd"
    );
    const result = await resp.json();
    const price = result["aura-finance"].usd;
    return price as string;
  });
};

export const usePrice = () => {
  return useQuery(["prices"], async () => {
    const resp = await fetch(
      "https://api.studio.thegraph.com/query/24660/balancer-base-v2/version/latest",
      {
        headers: {
          accept: "application/json, multipart/mixed",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: '{"query":"{\\n  pool(id: \\"0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047\\") {\\n    id\\n    tokens {\\n      name\\n      token {\\n        latestUSDPrice\\n      }\\n    }\\n  }\\n}","variables":null,"extensions":{"headers":null}}',
        method: "POST",
      }
    );
    const result = await resp.json();
    const tokens = result.data.pool.tokens;
    const goldPrice = tokens.find((t: any) => t.name === "GoldenBoys").token
      .latestUSDPrice;
    return goldPrice as string;
  });
};

export const useStakingApr = () => {
  return useQuery(["stakingApr"], async () => {
    const resp = await fetch("https://api.balancer.fi/graphql", {
      headers: {
        "content-type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: '{"query":"{\\n  pools(chainId: 8453, first: 100, where:{id:{eq:\\"0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047\\"}}) {\\n    pools{\\n      id\\n      address\\n      apr {\\n        swapFees\\n        protocolApr\\n        min\\n        max\\n      }\\n    }\\n  }\\n}","variables":null,"operationName":null}',
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });
    const result = await resp.json();
    const apr = result.data.pools.pools[0].apr;
    const totalApr = apr.min / 100;
    return totalApr;
  });
};
