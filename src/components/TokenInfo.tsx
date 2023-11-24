import goldcoins from "../assets/goldcoins.png";
import potofgold from "../assets/potofgold.png";
import goldchest from "../assets/goldchest.png";
export const TokenInfo = () => {
  return (
    <>
      <div className="md:px-40 text-center md:text-left">
        <div className="font-bold md:text-6xl text-4xl ">
          <span className="text-secondary">$GOLD</span> is built different
        </div>
        <br />
        <div className="text-xl fira pt-6">
          Earn premium tokens by staking $GOLD in LPs on top DeFi platforms
        </div>
        <br />
        <br />
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-4/5  mx-auto items-center  ">
        <div className="flex flex-col gap-4  ">
          <div className="gradient-border flex flex-col gap-4">
            <div className="fira-bold pt-4">High Inflation</div>
            <div className="fira-light">
              Counteract inflation with $GOLD’s fundamentals: fixed supply, low
              team vesting, and monthly burns.
              <br />
              <br />
              The vast majority of yields available to $GOLD holders are emitted
              in the form of coins of major protocols.
            </div>
            <a className="bg-tertiary px-2 relative text-center cursor-pointer">
              Explore Tokenomics
              <img
                className="absolute bottom-3 left-0 z-10"
                src={goldcoins}
                alt="goldcoins"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="gradient-border flex flex-col gap-4">
            <div className="fira-bold pt-4">Impermanent Loss (IL)</div>
            <div className="fira-light">
              GOLD mitigates impermanent loss with its robust liquidity pools.
              While IL still exists for $GOLD farmers, there is substantially
              less risk than most high-yield DeFi coins in the market.
              <br />
              <br />
              Join our community to learn more about IL mitigation strategies.
            </div>
            <div className="bg-tertiary px-2 mt-2  relative text-center cursor-pointer">
              Explore LP's
              <img
                className="absolute bottom-[0rem] left-[-1rem] z-10"
                src={potofgold}
                alt="potofgold"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="gradient-border flex flex-col gap-4">
            <div className="fira-bold pt-4">Unsustainable Hype</div>
            <div className="fira-light">
              GOLD has what many projects promise, yet fail to deliver. $GOLD
              emits value to holders every day. Our value is based on the APR of
              LP yields.
              <br />
              <br />
              Hold $GOLD for sustainable returns and a take your cut of the
              token rewards Humpy sends to the Golden Boys.
            </div>
            <a className="bg-tertiary px-2 relative text-center cursor-pointer">
              Buy $GOLD
              <img
                className="absolute bottom-4 left-[-1.5rem] z-10"
                src={goldchest}
                alt="goldchest"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
