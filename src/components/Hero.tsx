import humpyhero from "../assets/humpyhero.png";

export const Hero = () => {
  return (
    <>
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
        <div className="flex md:flex-row flex-col gap-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.balancer.fi/#/base/swap/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4"
            className="bg-tertiary p-2 relative mr-8 flex justify-center items-center fira-bold hover:bg-tertiaryLight"
          >
            BUY GOLD
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/goldenboysportal"
            className="bg-tertiary p-2  h-fit relative justify-center items-center text-center fira-bold hover:bg-tertiaryLight"
          >
            <div className="z-10">JOIN THE GOLDEN BOYS</div>
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <img src={humpyhero} alt="humpyhero" width={700} height={500} />
      </div>
    </>
  );
};
