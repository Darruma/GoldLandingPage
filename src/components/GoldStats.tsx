import chest from "../assets/chest.png";
import crown from "../assets/crown.png";
import { usePrice } from "../utils/data";
export const GoldStats = () => {
  const { data: goldPrice } = usePrice();
  return (
    <>
      <div className=" flex flex-row gap-2 items-center mx-auto">
        <img src={chest} alt="chest" width={50} height={50} />
        <div className="text-xl">TVL: $5,855,555</div>
      </div>
      <div className=" flex flex-row gap-2 items-center mx-auto">
        <img src={chest} alt="chest" width={50} height={50} />
        <div className="text-xl">
          PRICE: ${Number(goldPrice).toFixed(2) || 0}
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center mx-auto">
        <img src={crown} alt="chest" width={50} height={50} />
        <div className="text-xl">HUMPY: $95,525,526</div>
      </div>
    </>
  );
};
