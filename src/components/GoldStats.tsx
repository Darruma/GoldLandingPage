import chest from "../assets/chest.png";
import crown from "../assets/crown.png";
import { useAuraPrice, usePrice } from "../utils/data";
import { useVaultAura } from "../utils/vaultHooks";
export const GoldStats = () => {
  const { data: goldPrice } = usePrice();
  const { data: auraPrice } = useAuraPrice();
  const { data: vaultAura } = useVaultAura();
  const tvl = (Number(vaultAura || "0") / 1e18) * Number(auraPrice || "0");
  return (
    <>
      <div className="flex flex-row gap-2 items-center mx-auto">
        <img src={chest} alt="chest" width={50} height={50} />
        <div className="text-xl">TVL: ${tvl.toFixed(1)}</div>
      </div>
      <div className=" flex flex-row gap-2 items-center mx-auto">
        <img src={chest} alt="chest" width={50} height={50} />
        <div className="text-xl">
          PRICE: ${Number(goldPrice || "0").toFixed(2) || 0}
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center mx-auto">
        <img src={crown} alt="chest" width={50} height={50} />
        <div className="text-xl">HUMPY: $100M</div>
      </div>
    </>
  );
};
