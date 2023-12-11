import steps_vertical from "../assets/steps-vertical.png";
import howtobuy from "../assets/howtobuy.png";
export const BuyGold = () => {
  return (
    <>
      <div className="">
        <div className="font-bold md:text-6xl text-4xl text-center md:text-left  ">
          How to buy <span className="text-secondary">$GOLD</span> & What to do
          with it
        </div>
        <br />
        <div className="hidden md:flex justify-center items-center flex-col">
          <img src={howtobuy} alt="howtobuy" width="100%" height={500} />
        </div>
        <div className="flex flex-row md:hidden justify-evenly">
          <div className="flex flex-col gap-4">
            <div className="flex-grow">1. Bridge ETH to ARB or Base</div>
            <div className="flex-grow">2. Buy $GOLD on Balancer</div>
            <div className="flex-grow">3. Bookmark the chart</div>
            <div className="flex-grow">4. LP and Earn</div>
            <div className="flex-grow">5. Join the community</div>
          </div>
          <img src={steps_vertical} alt="steps_vertical" height={500} />
        </div>
        <br />
      </div>
    </>
  );
};
