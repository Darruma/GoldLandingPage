import humpyhero from "../assets/humpyhero.png";
import NavWithLogo from "../components/NavWithLogo";
import chest from "../assets/chest.png";
import crown from "../assets/crown.png";
import gold_small from "../assets/gold_small.png";
import telegram_small from "../assets/telegram_small.png";
import { usePrice } from "../utils/data";

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
          <div className="text-xl">
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
    </div>
  );
}

export default Home;
