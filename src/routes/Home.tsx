import humpyhero from "../assets/humpyhero.png";
import { getRandomBibleQuote } from "../utils/bible";
import Socials from "../components/SocialsBar";
import NavWithLogo from "../components/NavWithLogo";
import { usePrice, useStakingApr } from "../utils/data";

function Home() {
  const { number, quote } = getRandomBibleQuote();
  const { data: goldPrice } = usePrice();
  const { data: stakingApr } = useStakingApr();

  const circulatingMarketCap = 280000 * Number(Number(goldPrice).toFixed(2));

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
          <div className="flex flex-row gap-4">
            <div className="bg-tertiary p-2">BUY GOLD</div>
            <div className="bg-tertiary p-2">JOIN THE GOLDEN BOYS</div>
          </div>
        </div>
        <div className="hidden md:flex">
          <img src={humpyhero} alt="humpyhero" width={700} height={500} />
        </div>
      </div>
      poop
      <Socials />
    </div>
  );
}

export default Home;
