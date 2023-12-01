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

function Home() {
  return (
    <div className="h-full bg-primary">
      <div className="flex flex-col h-full overflow-hidden">
        <NavWithLogo />
      </div>
      <div className="flex flex-row justify-center items-center p-20 gap-8 ">
        <Hero />
      </div>
      <div className="flex flex-col md:flex-row md:items-center  bg-[#292E41] w-4/5 mx-auto gradient-border justify-evenly">
        <GoldStats />
      </div>
      <div className="gradient-background p-20 flex flex-col">
        <LearnMore />
      </div>
      <div className="p-20 flex flex-col">
        <YieldInfo />
      </div>
      <div className="md:p-20 p-10 flex flex-col">
        <TokenInfo />
      </div>
      <div className="p-20 flex flex-col">
        <BuyGold />
      </div>
      <div className="flex md:flex-row md:items-center bg-[#292E41] md:w-4/5 w-4/5 md:h-[350px] flex-col-reverse mx-auto gradient-border justify-evenly gap-2 pt-12 ">
        <GAuraInfo />
      </div>
      <div className="p-20 flex flex-col">
        <div className="md:px-40">
          <div className="font-bold md:text-6xl text-4xl ">
            Humpy, the leader of the Golden Boys
          </div>
          <br />
          <div className="text-xl fira pt-6">
            Swim with the whale and make DeFi History{" "}
          </div>
          <br />
          <br />
          <div className="flex md:flex-row flex-col gap-8 justify-items-center">
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
