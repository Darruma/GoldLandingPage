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
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1532 481"
          >
            <image width="1532" height="481" xlinkHref={howtobuy}></image>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bungee.exchange/"
            >
              <rect
                x="140"
                y="273"
                fill="#fff"
                opacity="0"
                width="95"
                height="87"
              ></rect>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/"
            >
              <rect
                x="388"
                y="269"
                fill="#fff"
                opacity="0"
                width="100"
                height="100"
              ></rect>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dextools.io/app/en/base/pair-explorer/0x433f09ca08623e48bac7128b7105de678e37d988-0x833589fcd6edb6e08f4c7c32d4f71b54bda02913-0xbefd5c25a59ef2c1316c5a4944931171f30cd3e4s"
            >
              <rect
                x="633"
                y="266"
                fill="#fff"
                opacity="0"
                width="100"
                height="100"
              ></rect>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("yield-dashboard")?.scrollIntoView();
              }}
            >
              <rect
                x="887"
                y="268"
                fill="#fff"
                opacity="0"
                width="100"
                height="100"
              ></rect>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/+YUKhdQVv8KBmMjNk"
            >
              <rect
                x="1134"
                y="269"
                fill="#fff"
                opacity="0"
                width="100"
                height="100"
              ></rect>
            </a>
          </svg>
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
