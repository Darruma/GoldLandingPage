import humpyhero from "../assets/humpyhero.png";
import NavWithLogo from "../components/NavWithLogo";
import chest from "../assets/chest.png";
import crown from "../assets/crown.png";
import dollars from "../assets/dollars.png";
import diamond from "../assets/diamond.png";
import goldcoins from "../assets/goldcoins.png";
import potofgold from "../assets/potofgold.png";
import goldchest from "../assets/goldchest.png";
import gold_small from "../assets/gold_small.png";
import telegram_small from "../assets/telegram_small.png";
import { getTokenImage, usePrice } from "../utils/data";
import tokens from "../assets/tokens.png";

//TODO: add links to yield with display:contents
//TODO: add apr and tvl data from api for yield dashboard

function Home() {
  const { data: goldPrice } = usePrice();
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

  return (
    <div className="h-full bg-primary">
      <div className="flex flex-col h-full overflow-hidden">
        <NavWithLogo />
      </div>
      <div className="flex flex-row justify-center items-center p-20 gap-8 ">
        <div className="flex flex-col gap-8">
          <div className="font-bold text-7xl md:text-left text-center">
            Unlock the <span className="text-secondary">$GOLD </span> <br />
            Standard of Defi
          </div>
          <div className="text-xl fira">
            $GOLD is the quintessential asset for liquidity farming. Our <br />
            platform provides a basket of yields carved from the chain <br />
            by Defi Titans.
          </div>
          <div className="flex flex-row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/#/base/swap/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4"
              className="bg-tertiary p-2 md:w-32 relative mr-8"
            >
              BUY GOLD
              <img
                src={gold_small}
                alt="gold_small"
                className="absolute bottom-[1.25rem] right-[-1.5rem] z-10"
                height={50}
                width={50}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/goldenboysportal"
              className="bg-tertiary p-2 w-64 h-fit relative"
            >
              JOIN THE GOLDEN BOYS
              <img
                src={telegram_small}
                alt="telegram_small"
                className="absolute bottom-[0.75rem] right-[-1.5rem] z-10"
                height={50}
                width={50}
              />
            </a>
          </div>
        </div>
        <div className="hidden md:flex">
          <img src={humpyhero} alt="humpyhero" width={700} height={500} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center  bg-[#292E41] w-4/5 mx-auto gradient-border justify-evenly   ">
        <div className=" flex flex-row gap-2 items-center mx-auto">
          <img src={chest} alt="chest" width={50} height={50} />
          <div className="text-xl">TVL: $5,855,555</div>
        </div>
        <div className=" flex flex-row gap-2 items-center mx-auto">
          <img src={chest} alt="chest" width={50} height={50} />
          <div className="text-xl">
            PRICE: ${Number(goldPrice).toFixed(2) || 0}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center mx-auto">
          <img src={crown} alt="chest" width={50} height={50} />
          <div className="text-xl">HUMPY: $95,525,526</div>
        </div>
      </div>
      <div className="gradient-background p-20 flex flex-col">
        <div className="md:px-40">
          <div className="font-bold md:text-6xl text-4xl ">
            The Power of <span className="text-secondary">$GOLD</span>: <br />
          </div>
          <br />
          <div className="font-bold md:text-6xl text-4xl ">
            A Yield Bearing Asset for DeFi Farmers
          </div>
          <div className="text-xl fira pt-6">
            Harvest the Benefits: Meditate on the harmonious alignment between
            the whale, the community and lucrative yields
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 pt-8">
          <div className="basis-full hidden md:flex justify-center items-center">
            <img src={tokens} alt="tokens"></img>
          </div>
          <div className="basis-full flex flex-col gap-4 md:px-12 py-12 text-xl">
            <div className="flex flex-col gap-4">
              <div className="">
                <span className="text-bold fira">
                  A New Era of Defi Farming:{" "}
                </span>
                <span className="fira-light">
                  Discover our pioneering rewards system that delivers
                  substantial APR through premium tokens.{" "}
                </span>
              </div>
              <a className="bg-tertiary p-2 text-center w-48 ml-4 px-2 relative cursor-pointer">
                Learn More
                <img
                  src={dollars}
                  alt="dollars"
                  className="absolute bottom-[-0.25rem] left-[-1.5rem] z-10"
                  height={50}
                  width={50}
                />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <span className="text-bold fira">
                  Exclusivity Through Scarcity:{" "}
                </span>
                <span className="fira-light">
                  $GOLD’s value is underpinned by a finite supply, burns, and
                  low token emissions for maximized value retention.
                </span>
              </div>
              <a className="bg-tertiary p-2 text-center w-48 ml-4 relative cursor-pointer">
                <img
                  src={diamond}
                  alt="diamond"
                  className="absolute bottom-[0.5rem] left-[-1.5rem] z-10"
                  height={50}
                  width={50}
                />
                Learn More
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-bold fira">Swim with the Whale: </span>
                <span className="fira-light">
                  A thesis of $GOLD is that Humpy, our 9-figure net worth
                  creator, knows what he is doing. Align your strategy with
                  Humpy, the legendary DeFi whale.
                </span>
              </div>
              <a className="bg-tertiary p-2 ml-4 text-center w-48 relative cursor-pointer">
                Learn More
                <img
                  src={crown}
                  alt="crown"
                  className="absolute bottom-[0.5rem] left-[-1.5rem] z-10"
                  height={50}
                  width={50}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 flex flex-col">
        <div className="md:px-40">
          <div className="font-bold md:text-6xl text-4xl ">
            Browse <span className="text-secondary">$GOLD</span> Yield
            Opportunities
          </div>
          <br />
          <div className="text-xl fira pt-6">
            Earn premium tokens by staking $GOLD in LPs on top DeFi platforms
          </div>
          <br />
          <br />
          <div className="md:hidden flex">
            <div className="gradient-border w-full grid custom-grid gap-8 text-center fira-bold">
              {yieldSources.map((s, index) => {
                const addBottomPadding = index == yieldSources.length - 1;

                return (
                  <>
                    <div
                      className={`${addBottomPadding ? "mb-4" : ""} text-left`}
                    >
                      {s.pool}
                    </div>
                    <img
                      className="flex mx-auto"
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
                          <img
                            height={10}
                            width={50}
                            src={getTokenImage(r)}
                          ></img>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 flex flex-col">
        <div className="md:px-40">
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
        <div className="grid md:grid-cols-3 auto-rows-fr gap-8 w-4/5 mx-auto ">
          <div className="flex flex-col gap-4 ">
            <div className="gradient-border flex flex-col gap-4">
              <div className="fira-bold pt-4">High Inflation</div>
              <div className="fira-light">
                Counteract inflation with $GOLD’s fundamentals: fixed supply,
                low team vesting, and monthly burns.
                <br />
                <br />
                The vast majority of yields available to $GOLD holders are
                emitted in the form of coins of major protocols.
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
          <div className="flex flex-col gap-4">
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
              <div className="bg-tertiary px-2 mt-2 relative text-center cursor-pointer">
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
          <div className="flex flex-col gap-4">
            <div className="gradient-border flex flex-col gap-4">
              <div className="fira-bold pt-4">Unsustainable Hype</div>
              <div className="fira-light">
                GOLD has what many projects promise, yet fail to deliver. $GOLD
                emits value to holders every day. Our value is based on the APR
                of LP yields.
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
        </div>
      </div>
      <div className="p-20 flex flex-col">
        <div className="md:px-40">
          <div className="font-bold md:text-6xl text-4xl text-center ">
            How to buy <span className="text-secondary">$GOLD</span> & What to
            do with it
          </div>
          <br />
          add image here with steps (also needed for mobile)
          <br />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center bg-[#292E41] w-4/5 h-[350px] mx-auto gradient-border justify-evenly gap-2 pt-12 ">
        <div className="basis-full flex flex-col justify-center items-center gap-4 ">
          <div className="font-bold md:text-5xl text-4xl text-center">
            Earn passive income with GoldenBoys' goldAura Vault
          </div>
          <div className="text-center fira text-xl">
            Deposit AURA and earn in comfort
          </div>
          <a
            href="/#/vault"
            className="bg-tertiary text-white w-64 py-2 text-center cursor-pointer"
          >
            Enter the Vault
          </a>
        </div>
        <div className="basis-full flex justify-center items-center relative pt-32 mb-12">
          <img
            className="absolute left-[30%] z-10"
            src={gold_small}
            alt="bars"
            width={150}
            height={500}
          />
          <img
            className="absolute bottom-[10%]"
            src={gold_small}
            alt="bars"
            width={150}
            height={500}
          />
          <img
            className="absolute right-[30%]"
            src={gold_small}
            alt="bars"
            width={150}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
