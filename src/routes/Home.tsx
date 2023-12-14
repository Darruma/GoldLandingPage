import NavWithLogo from "../components/NavWithLogo";
import { HumpyChat } from "../components/HumpyChat";
import { YieldInfo } from "../components/YieldInfo";
import { TokenInfo } from "../components/TokenInfo";
import { BuyGold } from "../components/BuyGold";
import { GoldStats } from "../components/GoldStats";
import { Hero } from "../components/Hero";
import { LearnMore } from "../components/LearnMore";
import { HumpyInfo } from "../components/HumpyInfo";
import { GAuraInfo } from "../components/GAuraInfo";
import { Footer } from "../components/Footer";

import whale from "../assets/whale.png";

function Home() {
  return (
    <div className="h-full bg-primary md:px-20 max-w-[1800px] mx-auto">
      <div className="flex flex-col h-full overflow-hidden">
        <NavWithLogo />
      </div>
      <div className="flex flex-row justify-between items-center pb-20 gap-8 ">
        <Hero />
      </div>
      <div className="flex flex-col md:flex-row md:items-center bg-[#292E41]  mx-auto gradient-border justify-evenly pb-20">
        <GoldStats />
      </div>
      <div className="gradient-background pt-40 flex flex-col">
        <LearnMore />
      </div>
      <div className="pt-40 flex flex-col">
        <YieldInfo />
      </div>
      <div className="pt-40 flex flex-col">
        <TokenInfo />
      </div>
      <div className="pt-40 flex flex-col">
        <BuyGold />
      </div>
      <div className="flex flex-col md:flex-row md:items-center bg-[#292E41]  mx-auto gradient-border justify-evenly mt-40">
        <GAuraInfo />
      </div>
      <div className="pt-40 pb-20 flex flex-col">
        <div
          style={{
            backgroundImage: `url(${whale})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingBottom: "10%",
          }}
        >
          <div
            id="humpy-leader"
            className="font-bold md:text-6xl text-4xl text-center md:text-left z-2"
          >
            Humpy, the leader of the Golden Boys
          </div>

          <br />
          <div className="text-xl fira pt-6 text-center md:text-left">
            Swim with the whale and make DeFi History{" "}
          </div>
          <br />
          <br />
          <div className="flex md:flex-row flex-col gap-8 justify-items-center z-2">
            <HumpyInfo />
            <div className="basis-full">
              <HumpyChat />{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
