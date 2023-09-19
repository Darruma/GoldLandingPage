import Nav from "../components/Nav";
import bar from "../assets/bar.png";
function Home() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Nav />
      <div className="mx-16 basis-full">
        <div className="flex flex-row items-center md:h-full">


        <div className="flex flex-col gap-4 justify-center items-center md:pt-0 pt-32 basis-full">
          <h1 className="press-start-2p text-secondary text-4xl text-center">GOLDEN BOYS</h1>
          <div className="font-semi-bold text-2xl text-center">The $GOLD Standard for DeFi on Base</div>
          <div className="flex flex-row justify-center items-center gap-4">
            <a href="/buy" className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl">
                Buy
            </a>
            <a href="chart" className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl">
                  Chart
            </a>
          </div>

        </div>
        <div className="basis-full h-full w-full hidden md:flex justify-center ">
        <img src={bar} alt="bar" className="h-50 z-10 " />
        </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
