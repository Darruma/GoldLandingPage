export const HumpyInfo = () => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center gap-8 basis-full w-full mb-8">
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="fira-bold">Legend of the Holden Egg Humpy</span>
            <br />
            fanfic, based on a true story
          </div>
          <div className="bg-tertiary h-fit p-2 w-48 text-center">
            Read about Him
          </div>
        </div>
        <div className="flex  flex-row justify-between items-center">
          <div>
            <span className="fira-bold">Debank Wallet</span> <br />
            Explore Humpy's main wallet
          </div>
          <div className="bg-tertiary p-2 w-48 text-center">Witness Him</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="fira-bold">Messari Story</span> <br />
            Read about Humpy in the news
          </div>
          <div className="bg-tertiary p-2 w-48 text-center">Behold Him</div>
        </div>
      </div>
    </>
  );
};
