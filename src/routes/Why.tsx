import bar from "../assets/bar.png";
import piechart from "../assets/tokenomics.png";
import { getRandomBibleQuote } from "../utils/bible";
import Socials from "../components/SocialsBar";
import NavWithLogo from "../components/NavWithLogo";

export function Why() {
  const { quote, number } = getRandomBibleQuote();
  return (
    <div className="">
      <div className="flex flex-col h-full overflow-hidden pb-8 md:pb-0">
        <NavWithLogo />
        <div className="mx-16 basis-full">
          <div className="flex flex-row items-center md:h-full">
            <div className="basis-full h-full w-full hidden md:flex justify-center ">
              <img src={bar} alt="bar" className="h-50 z-10 " />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center md:pt-0 pt-32 basis-full">
              <h1 className="press-start-2p text-secondary text-4xl text-center">
                WHY GOLD
              </h1>
              <div className="font-semi-bold text-2xl text-center roboto-100">
                GOLD is the rarest gem on Base. Forged by the legendary Balancer
                whale Humpy, wrought by a team of DeFi artisans, $GOLD is a
                scarce, strategic resource with rich economic flywheels.
              </div>
              <div className="flex flex-row justify-center items-center gap-4">
                <a
                  href="https://app.balancer.fi/#/base/swap/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8 px-8  flex items-center justify-center max-w-48 text-center ">
        <div className="press-start-2p">{`"${number}. ${quote}"`}</div>
      </div>
      <div className="bg-primary flex flex-col md:flex-row md:gap-8 gap-32 justify-center items-center pt-32 pb-32">
        <div className="flex flex-col text-center gap-4 basis-full">
          <h1 className="press-start-2p text-secondary text-4xl text-center">
            Tokenomics
          </h1>
          <div className="font-semi-bold text-2xl gap-1 text-center roboto-700 flex flex-col ">
            <div>Original Supply: 1,000,000</div>
            <div>Burned Supply: 250,000</div>
            <div>Incentives: 470,000</div>
            <div>Circulating Supply: 280,000</div>
            <div>Team: 20,000</div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <a
              href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF/6wF4FpU5XcFMh7GYvo8BwUPK0aYESatAQNRR161W1ZA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
            >
              Read
            </a>
          </div>
        </div>
        <div className="basis-full">
          <img src={piechart} alt="bar" className="h-50 z-10 " />
        </div>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
}
