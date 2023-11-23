import humpyhero from "../assets/humpyhero.png";
import NavWithLogo from "../components/NavWithLogo";
import chest from "../assets/chest.png";
import crown from "../assets/crown.png";
import gold_small from "../assets/gold_small.png";
import telegram_small from "../assets/telegram_small.png";
import { usePrice } from "../utils/data";
import tokens from "../assets/tokens.png";

function Home() {
  //const { number, quote } = getRandomBibleQuote();
  const { data: goldPrice } = usePrice();
  //const { data: stakingApr } = useStakingApr();

  //const circulatingMarketCap = 280000 * Number(Number(goldPrice).toFixed(2));

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
              className="bg-tertiary p-2 w-32 relative mr-8"
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
      <div className="flex flex-col md:flex-row md:items-center  bg-[#292E41] w-4/5 mx-auto gradient-border justify-evenly  ">
        <div className=" flex flex-row gap-2 items-center">
          <img src={chest} alt="chest" width={50} height={50} />
          <div className="text-xl">TVL: $5,855,555</div>
        </div>
        <div className=" flex flex-row gap-2 items-center">
          <img src={chest} alt="chest" width={50} height={50} />
          <div className="text-xl">
            PRICE: ${Number(goldPrice).toFixed(2) || 0}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img src={crown} alt="chest" width={50} height={50} />
          <div className="text-xl">HUMPY: $95,525,526</div>
        </div>
      </div>
      <div className="gradient-background h-[1920px] p-20 flex flex-col">
        <div className="md:px-36">
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
        <div className="flex flex-row justify-center items-center gap-8">
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
              <div className="bg-tertiary p-2 text-center w-48 px-2">
                Learn More
              </div>
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
              <div className="bg-tertiary p-2 text-center w-48">Learn More</div>
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
              <div className="bg-tertiary p-2 text-center w-48">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
