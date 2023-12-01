import crown from "../assets/crown.png";
import dollars from "../assets/dollars.png";
import diamond from "../assets/diamond.png";
import tokens from "../assets/tokens.png";
export const LearnMore = () => {
  return (
    <>
      <div className="md:px-20 lg:p-40 ">
        <div className="font-bold md:text-6xl text-4xl ">
          The Power of <span className="text-secondary">$GOLD</span>: <br />
        </div>
        <br />
        <div className="font-bold md:text-6xl text-4xl ">
          A Yield Bearing Asset for DeFi Farmers
        </div>
        <div className="text-xl fira pt-6">
          Harvest the Benefits: Meditate on the harmonious alignment between the
          whale, the community and lucrative yields
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 pt-8">
        <div className="basis-full hidden md:flex justify-center items-center">
          <img src={tokens} alt="tokens"></img>
        </div>
        <div className="basis-full flex flex-col gap-12 md:px-12 py-12 text-xl">
          <div className="flex flex-col gap-4">
            <div className="">
              <span className="text-bold fira">
                A New Era of Defi Farming:{" "}
              </span>
              <span className="fira-light">
                Discover our pioneering rewards system that delivers substantial
                APR through premium tokens.{" "}
              </span>
            </div>
            <a
              onClick={() => {
                document.getElementById("yield-dashboard")?.scrollIntoView();
              }}
              className="bg-tertiary p-2 text-center w-48 ml-4 px-2 relative cursor-pointer"
            >
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
                $GOLD’s value is underpinned by a finite supply, burns, and low
                token emissions for maximized value retention.
              </span>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF/sYcQS-26htr4VtutGfMsz70nkgXzPPHqT1drzmFGDAw"
              className="bg-tertiary p-2 text-center w-48 ml-4 relative cursor-pointer"
            >
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
                A thesis of $GOLD is that Humpy, our 9-figure net worth creator,
                knows what he is doing. Align your strategy with Humpy, the
                legendary DeFi whale.
              </span>
            </div>
            <a
              onClick={() => {
                document.getElementById("humpy-leader")?.scrollIntoView();
              }}
              className="bg-tertiary p-2 ml-4 text-center w-48 relative cursor-pointer"
            >
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
    </>
  );
};
