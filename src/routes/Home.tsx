import Nav from "../components/Nav";
import humpy from "../assets/humpy.gif";
import humpybg from "../assets/humpybackground.svg";
import logo from "../assets/logo.png";

import egg from "../assets/egg.png";
import { getRandomBibleQuote } from "../utils/bible";
import Socials from "../components/SocialsBar";

function Home() {
  const { number, quote } = getRandomBibleQuote();
  return (
    <div className="h-full">
      <div
        style={{
          backgroundImage: `url(${humpybg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}
        className="flex flex-col h-full overflow-hidden"
      >
        <Nav />
        <img
          src={logo}
          alt="logo"
          className="z-10 mt-[-4rem] md:hidden mx-auto w-[100px] "
        />
        <div className="mx-16 basis-full">
          <div className="flex flex-row items-center md:h-full">
            <div className="flex flex-col gap-4 justify-center items-center md:pt-0 pt-32 basis-full">
              <h1 className="press-start-2p text-secondary text-4xl text-center">
                GOLDEN BOYS
              </h1>
              <div className="font-semi-bold text-2xl text-center roboto-100">
                The $GOLD Standard for DeFi on Base
              </div>
              <div className="flex flex-row justify-center items-center gap-4">
                <a
                  href="/buy"
                  className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
                >
                  Buy
                </a>
                <a
                  href="chart"
                  className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
                >
                  Chart
                </a>
              </div>
            </div>
            <div className="basis-full h-full w-full hidden md:flex justify-center  items-center">
              <img src={humpy} alt="bar" className="z-10 h-[300px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black md:h-40 flex flex-col gap-8 pt-8 pb-8 md:flex-row justify-around items-center text-center ">
        <div>
          <div className="underline font-bold text-2xl roboto">PRICE</div>
          <div className="font-semi-bold text-lg">$100</div>
        </div>
        <div>
          <div className="underline font-bold text-2xl">STAKING APR</div>
          <div className="font-semi-bold text-lg">134%</div>
        </div>
        <div>
          <div className="underline font-bold text-2xl">HOLDER COUNT</div>
          <div className="font-semi-bold text-lg">$100</div>
        </div>
        <div>
          <div className="underline font-bold text-2xl">
            CIRCULATING MARKET CAP{" "}
          </div>
          <div className="font-semi-bold text-lg">$3,659,248</div>
        </div>
      </div>
      <div className="bg-primary flex flex-col gap-8 justify-center items-center pt-8 pb-32">
        <div>
          <img src={egg} />
        </div>
        <div className="text-3xl text-center font-bold md:w-[800px]">
          "{quote}"
        </div>
        <div className="underline">- Golden Boys Bible Verse #{number}</div>
      </div>

      <Socials />
    </div>
  );
}

export default Home;
