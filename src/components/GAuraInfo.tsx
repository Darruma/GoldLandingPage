import gold_small from "../assets/gold_small.png";
export const GAuraInfo = () => {
  return (
    <>
      <div className="basis-full flex flex-col justify-center items-center gap-4 mx-auto">
        <div className="font-bold md:text-5xl text-4xl text-center">
          Earn passive income with GoldenBoys' goldAura Vault
        </div>
        <div className="text-center fira text-xl">
          Deposit AURA and earn in comfort
        </div>
        <a
          href="/#/vault"
          className="bg-tertiary text-white w-64 py-2 text-center cursor-pointer"
        >
          Enter the Vault
        </a>
      </div>
      <div className="basis-full flex justify-center items-center relative pt-32 mb-12">
        <img
          className="absolute left-[30%] z-10"
          src={gold_small}
          alt="bars"
          width={150}
          height={500}
        />
        <img
          className="absolute bottom-[10%]"
          src={gold_small}
          alt="bars"
          width={150}
          height={500}
        />
        <img
          className="absolute right-[30%]"
          src={gold_small}
          alt="bars"
          width={150}
          height={500}
        />
      </div>
    </>
  );
};
