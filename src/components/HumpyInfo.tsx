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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF/figX7_2ek5YEfsfgNjCb_vIOoasmCgnc2rtH9cE0jzc"
            className="bg-tertiary h-fit p-2 w-48 text-center hover:bg-tertiaryLight"
          >
            Read about Him
          </a>
        </div>
        <div className="flex  flex-row justify-between items-center">
          <div>
            <span className="fira-bold">Debank Wallet</span> <br />
            Explore Humpy's main wallet
          </div>
          <a
            href="https://debank.com/profile/0x36cc7B13029B5DEe4034745FB4F24034f3F2ffc6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary p-2 w-48 text-center hover:bg-tertiaryLight"
          >
            Witness Him
          </a>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="fira-bold">Messari Story</span> <br />
            Read about Humpy in the news
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://messari.io/report/governor-note-the-vebal-wars"
            className="bg-tertiary p-2 w-48 text-center hover:bg-tertiaryLight"
          >
            Behold Him
          </a>
        </div>
      </div>
    </>
  );
};
