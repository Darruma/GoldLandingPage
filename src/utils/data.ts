import { useQuery } from "react-query";

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
        body: '{"query":"{\\n  pool(id: \\"0xe40cbccba664c7b1a953827c062f5070b78de86800020000000000000000001b\\") {\\n    id\\n    tokens {\\n      name\\n      token {\\n        latestUSDPrice\\n      }\\n    }\\n  }\\n}","variables":null,"extensions":{"headers":null}}',
        method: "POST",
      }
    );
    const result = await resp.json();
    return result;
  });
};
