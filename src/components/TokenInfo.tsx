import goldcoins from "../assets/goldcoins.png";
import potofgold from "../assets/potofgold.png";
import goldchest from "../assets/goldchest.png";
export const TokenInfo = () => {
  return (
    <>
      <div>
        <div className="font-bold md:text-6xl text-4xl text-center md:text-left ">
          <span className="text-secondary">$GOLD</span> is built different
        </div>
        <br />
        <div className="text-xl fira pt-6 text-center md:text-left px-4 md:px-0">
          Earn premium tokens by staking $GOLD in LPs on top DeFi platforms
        </div>
        <br />
        <br />
      </div>
      <div className="flex flex-col md:flex-row h-full gap-8 md:w-auto w-4/5 mx-auto ">
        <div className="flex flex-col flex-1 gap-4">
          <div className="gradient-border flex flex-col flex-1 gap-4 justify-between">
            <div className="fira-bold pt-4">High Inflation</div>
            <div className="fira-light">
              Counteract inflation with $GOLD’s fundamentals: fixed supply, low
              team vesting, and monthly burns.
              <br />
              <br />
              The vast majority of yields available to $GOLD holders are emitted
              in the form of coins of major protocols.
            </div>
            <a
              href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF/6wF4FpU5XcFMh7GYvo8BwUPK0aYESatAQNRR161W1ZA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary px-2 relative text-center cursor-pointer hover:bg-tertiaryLight"
            >
              Explore Tokenomics
              <img
                className="absolute bottom-3 left-[-1rem] z-10"
                src={goldcoins}
                alt="goldcoins"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className="gradient-border flex flex-col flex-1 gap-4 justify-between">
            <div className="fira-bold pt-4">Impermanent Loss (IL)</div>
            <div className="fira-light pb-2">
              GOLD mitigates impermanent loss with its robust liquidity pools.
              While IL still exists for $GOLD farmers, there is substantially
              less risk than most high-yield DeFi coins in the market.
              <br />
              <br />
              Join our community to learn more about IL mitigation strategies.
              <br />
            </div>
            <div
              onClick={() => {
                document.getElementById("yield-dashboard")?.scrollIntoView();
              }}
              className="bg-tertiary px-2 mt-2 relative text-center cursor-pointer hover:bg-tertiaryLight"
            >
              Explore LP's
              <img
                className="absolute bottom-0 left-[-1rem] z-10"
                src={potofgold}
                alt="potofgold"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className="gradient-border flex flex-col flex-1 gap-4 justify-between">
            <div className="fira-bold pt-4">Unsustainable Hype</div>
            <div className="fira-light">
              GOLD has what many projects promise, yet fail to deliver. $GOLD
              emits value to holders every day. Our value is based on the APR of
              LP yields.
              <br />
              <br />
              Hold $GOLD for sustainable returns and take your cut of the token
              rewards Humpy sends to the Golden Boys.
            </div>
            <a
              href="https://app.balancer.fi/#/arbitrum/swap"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary px-2 relative text-center cursor-pointer hover:bg-tertiaryLight"
            >
              Buy $GOLD
              <img
                className="absolute bottom-3 left-[-1rem] z-10"
                src={goldchest}
                alt="goldchest"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
