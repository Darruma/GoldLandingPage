import goldpile from "../assets/goldpile.png";
export const GAuraInfo = () => {
  return (
    <>
      <div className="basis-full flex flex-col justify-center items-center gap-4 mx-auto py-20">
        <div className="font-bold md:text-5xl text-4xl text-center">
          Earn passive income with GoldenBoys' vaults
        </div>
        <div className="text-center fira text-xl">
          Deposit AURA or COMP and earn in comfort
        </div>
        <a
          href="/#/vaults/aura"
          className="bg-tertiary text-white w-64 py-2 text-center cursor-pointer hover:bg-tertiaryLight font-bold"
        >
          Enter the AURA vault
        </a>
        <a
          href="/#/vaults/comp"
          className="bg-tertiary text-white w-64 py-2 text-center cursor-pointer hover:bg-tertiaryLight font-bold"
        >
          Enter the COMP vault
        </a>
      </div>
      <div className="basis-full flex justify-center items-center relative ">
        <img height={300} width={300} src={goldpile}></img>
      </div>
    </>
  );
};
