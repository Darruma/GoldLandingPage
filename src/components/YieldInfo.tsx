import { getTokenImage } from "../utils/data";

const yieldSources = [
  {
    pool: "GOLD/USDC/WSETH",
    platform: "Balancer",
    chain: "Base",
    tvl: "$2,000,000",
    apr: "69%",
    rewards: ["BAL"],
  },
  {
    pool: "GOLD/USDC/WSETH",
    platform: "Aura",
    chain: "Arbitrum",
    tvl: "$2,000,000",
    apr: "69%",
    rewards: ["BAL", "AURA"],
  },
  {
    pool: "GOLD/USDC/WSETH",
    platform: "Balancer",
    chain: "Base",
    tvl: "$2,000,000",
    apr: "69%",
    rewards: ["ARB", "BAL"],
  },
  {
    pool: "GOLD/WETH",
    platform: "Ramses",
    chain: "Arbitrum",
    tvl: "$300,000",
    apr: "127%",
    rewards: ["RAM"],
  },
];
export const YieldInfo = () => {
  return (
    <div className="md:px-40">
      <div className="font-bold md:text-6xl text-4xl ">
        Browse <span className="text-secondary">$GOLD</span> Yield Opportunities
      </div>
      <br />
      <div className="text-xl fira pt-6">
        Earn premium tokens by staking $GOLD in LPs on top DeFi platforms
      </div>
      <br />
      <br />
      <div className="md:hidden flex">
        <div className="gradient-border w-full grid custom-grid md:gap-8 gap-2 text-center fira-bold">
          {yieldSources.map((s, index) => {
            const addBottomPadding = index == yieldSources.length - 1;

            return (
              <>
                <div className={`${addBottomPadding ? "mb-4" : ""} text-left`}>
                  {s.pool}
                </div>
                <img
                  className="flex mx-auto invisible sm:visible"
                  width={50}
                  src={getTokenImage(s.chain) || getTokenImage(s.platform)}
                ></img>
                <div>{s.apr}</div>
              </>
            );
          })}
        </div>
      </div>
      <div className="md:flex hidden">
        <div className="gradient-border grid grid-cols-6 gap-12 fira w-full text-center">
          <div className="">Pool</div>
          <div>Platform</div>
          <div>Chain</div>
          <div>TVL</div>
          <div>APR</div>
          <div>Rewards</div>
          {yieldSources.map((s, index) => {
            const addBottomPadding = index == yieldSources.length - 1;

            return (
              <>
                <div className={`${addBottomPadding ? "mb-4" : ""}`}>
                  {s.pool}
                </div>
                <div>{s.platform}</div>
                <div>{s.chain}</div>
                <div>{s.tvl}</div>
                <div>{s.apr}</div>
                <div className="flex flex-row gap-4 justify-center">
                  {s.rewards.map((r) => {
                    return (
                      <img height={10} width={50} src={getTokenImage(r)}></img>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
