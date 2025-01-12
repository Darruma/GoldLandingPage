import { getTokenImage, useYields } from '../utils/data';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const YieldInfo = () => {
  const { data: yieldData } = useYields();
  console.log(yieldData);
  return (
    <div id="yield-dashboard">
      <div>
        <div className="font-bold md:text-6xl text-4xl text-center md:text-left ">
          Browse <span className="text-secondary">$GOLD</span> Yield Opportunities
        </div>
        <br />
        <div className="text-xl fira pt-6 text-center md:text-left">Earn premium tokens by staking $GOLD in LPs on top DeFi platforms</div>
        <br />
        <br />
        <div className="md:hidden flex">
          <div className="gradient-border md:w-full grid custom-grid md:gap-8 gap-2 text-center w-4/5 mx-auto  ">
            {yieldData?.map((s: any, index: number) => {
              const addBottomPadding = index == yieldData.length - 1;

              return (
                <a target="_blank" rel="noopener noreferrer" className="contents cursor-pointer child" href={s.link} key={index}>
                  <div className={`${addBottomPadding ? 'mb-4' : ''} text-left fira-bold`}>{s.symbol}</div>
                  <img
                    className="flex mx-auto invisible sm:visible"
                    width={50}
                    src={getTokenImage(s.project) || getTokenImage(s.platform)}
                  ></img>
                  <div className="fira">{s.apy.toFixed(2)}%</div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="md:flex hidden">
          <div className="gradient-border grid grid-cols-6 gap-12 fira w-full text-center">
            <div className="">Pool</div>
            <div>Platform</div>
            <div>Chain</div>
            <div>TVL</div>
            <div>APR</div>
            <div>Rewards</div>
            {yieldData?.map((s: any, index: number) => {
              const addBottomPadding = index == yieldData.length - 1;
              let rewards = [...new Set(s?.rewardTokens || [])];
              return (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="contents cursor-pointer child" key={index}>
                  <div className={`${addBottomPadding ? 'mb-4' : ''} whitespace-nowrap`}>{s.symbol}</div>
                  <div>{capitalizeFirstLetter(s.project)}</div>
                  <div>{s.chain}</div>
                  <div>${s.tvlUsd.toLocaleString()}</div>
                  <div>{s.apy.toFixed(2)}%</div>
                  <div className="flex flex-row gap-2 justify-left ">
                    {rewards?.map((r: any, i: number) => {
                      return <img alt={r} height={10} width={30} src={getTokenImage(r)} key={i}></img>;
                    })}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
